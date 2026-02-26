/* ============================================================
   ENTITIES.JS — Lógica da página de entidades (Pokédex)
   Desenho de sprites pixel art e navegação entre entidades
   ============================================================ */

/* ──────────────────────────────────────────────────────────
   DADOS DAS ENTIDADES
   Cada entidade tem: id, cor, pixels do sprite (array de [x, y, cor])
   e pixels do sprite em miniatura (escala diferente)
────────────────────────────────────────────────────────── */

/**
 * Definição de todos os sprites pixel art.
 * Cada entrada: [x, y, cor_css]
 * O sprite grande usa escala 8, o mini usa escala 3.
 */
const SPRITE_DATA = {

  /* Lurker — mancha bidimensional nas paredes */
  lurker: [
    [2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],
    [1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],
    [1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],
    [2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7],[9,7],
    [3,8],[4,8],[5,8],[6,8],[7,8],[8,8],
  ].map(([x,y]) => [x, y, 'rgba(139,47,201,0.9)'])
  .concat([
    /* Olhos brilhantes */
    [4,5, 'rgba(200,100,255,1)'],
    [7,5, 'rgba(200,100,255,1)'],
  ]),

  /* Shadow Wisp — massa difusa errática */
  'shadow-wisp': [
    [3,2],[4,2],[5,2],[6,2],[7,2],[8,2],
    [2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],
    [2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],
    [1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],
    [2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],
    [3,7],[4,7],[5,7],[6,7],[7,7],[8,7],
    [4,8],[5,8],[6,8],[7,8],
    [3,9],[4,9],[7,9],[8,9],
    [2,10],[3,10],[8,10],[9,10],
  ].map(([x,y]) => [x, y, 'rgba(80,100,140,0.85)']),

  /* The Shadow — massa imponente com franja vermelha */
  'the-shadow': [
    [4,1],[5,1],[6,1],[7,1],
    [3,2],[4,2],[5,2],[6,2],[7,2],[8,2],
    [2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],
    [1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],
    [1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],
    [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[11,6],
    [0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[11,7],
    [1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],
    [2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],
    [3,10],[4,10],[7,10],[8,10],
    [2,11],[3,11],[8,11],[9,11],
    [1,12],[2,12],[9,12],[10,12],
  ].map(([x,y]) => [x, y, 'rgba(40,5,5,0.95)'])
  .concat([
    /* Franja vermelha */
    [4,0,'rgba(255,26,74,0.6)'],[5,0,'rgba(255,26,74,0.6)'],
    [6,0,'rgba(255,26,74,0.6)'],[7,0,'rgba(255,26,74,0.6)'],
    [0,5,'rgba(255,26,74,0.6)'],[11,5,'rgba(255,26,74,0.6)'],
    [0,6,'rgba(255,26,74,0.6)'],[11,6,'rgba(255,26,74,0.6)'],
  ]),

  /* Anglerfish — corpo escuro com isco e olho */
  anglerfish: [
    [3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],
    [2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],
    [1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[11,6],
    [1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[11,7],
    [2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],
    [3,9],[4,9],[5,9],[6,9],[7,9],[8,9],
    [3,10],[5,10],[7,10],[9,10],
  ].map(([x,y]) => [x, y, 'rgba(10,30,50,0.95)'])
  .concat([
    /* Olho ciano */
    [4,6,'rgba(0,204,255,1)'],[5,6,'rgba(0,180,255,1)'],
    /* Isco verde */
    [6,1,'rgba(100,255,200,0.9)'],[6,2,'rgba(80,220,180,0.7)'],
    [6,3,'rgba(60,180,150,0.5)'],
  ]),

  /* Observer — esfera com olho dourado */
  observer: [
    [4,1],[5,1],[6,1],[7,1],
    [2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],
    [1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[10,3],
    [1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],
    [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[11,5],
    [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[11,6],
    [1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],
    [1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],
    [2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],
    [3,10],[4,10],[5,10],[6,10],[7,10],[8,10],
    [4,11],[5,11],[6,11],[7,11],
  ].map(([x,y]) => [x, y, 'rgba(20,15,5,0.95)'])
  .concat([
    /* Olho dourado */
    [4,5,'rgba(255,220,0,0.9)'],[5,5,'rgba(255,200,0,1)'],
    [6,5,'rgba(255,200,0,1)'],[7,5,'rgba(255,220,0,0.9)'],
    [4,6,'rgba(255,180,0,0.9)'],[5,6,'rgba(255,150,0,1)'],
    [6,6,'rgba(255,150,0,1)'],[7,6,'rgba(255,180,0,0.9)'],
    /* Reflexo */
    [5,5,'rgba(255,255,200,0.7)'],
  ]),
};

/* ──────────────────────────────────────────────────────────
   FUNÇÕES DE DESENHO
────────────────────────────────────────────────────────── */

/**
 * Desenha um sprite pixel art num canvas HTML.
 * @param {string}  canvasId - ID do elemento canvas
 * @param {Array}   pixels   - Array de [x, y, cor]
 * @param {number}  scale    - Tamanho de cada pixel em px
 */
function drawSprite(canvasId, pixels, scale) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pixels.forEach(([x, y, color]) => {
    ctx.fillStyle = color;
    ctx.fillRect(x * scale, y * scale, scale, scale);
  });
}

/**
 * Desenha todos os sprites — grandes e miniaturas.
 * Chama drawSprite para cada entidade conhecida.
 */
function drawAllSprites() {
  Object.entries(SPRITE_DATA).forEach(([id, pixels]) => {
    /* Sprite grande no painel de detalhe */
    drawSprite(`sprite-${id}`, pixels, 8);
    /* Sprite miniatura na sidebar */
    drawSprite(`mini-${id}`, pixels, id === 'the-shadow' ? 2.5 : 3);
  });
}

/* ──────────────────────────────────────────────────────────
   NAVEGAÇÃO ENTRE ENTIDADES
────────────────────────────────────────────────────────── */

/**
 * Mostra o painel de detalhe da entidade seleccionada
 * e actualiza o estado activo na sidebar.
 * @param {string}      entityId - ID da entidade (ex: 'lurker')
 * @param {HTMLElement} rowEl    - Elemento da linha clicada na sidebar
 */
function showEntity(entityId, rowEl) {
  /* Remove activo de todas as linhas e painéis */
  document.querySelectorAll('.entity-row').forEach(r => r.classList.remove('active'));
  document.querySelectorAll('.detail-panel').forEach(d => d.classList.remove('active'));

  /* Activa a linha e o painel correspondentes */
  rowEl.classList.add('active');
  const panel = document.getElementById(`detail-${entityId}`);
  if (panel) panel.classList.add('active');

  /* Re-anima as barras de estatística */
  if (panel) {
    panel.querySelectorAll('.stat-fill').forEach(bar => {
      bar.style.animation = 'none';
      /* Força reflow para reiniciar a animação */
      void bar.offsetHeight;
      bar.style.animation = '';
    });
  }

  /* Em mobile, faz scroll para o painel de detalhe */
  if (window.innerWidth <= 900 && panel) {
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Liga os eventos de clique nas linhas da sidebar
 * através de delegação de eventos.
 */
function initEntityNavigation() {
  const sidebar = document.querySelector('.pokedex__sidebar');
  if (!sidebar) return;

  sidebar.addEventListener('click', (e) => {
    const row = e.target.closest('.entity-row');
    if (!row) return;
    const entityId = row.dataset.entity;
    if (entityId) showEntity(entityId, row);
  });
}

/* ──────────────────────────────────────────────────────────
   PONTO DE ENTRADA
────────────────────────────────────────────────────────── */

/**
 * Inicializa a página de entidades:
 * desenha sprites e liga a navegação.
 */
document.addEventListener('DOMContentLoaded', () => {
  drawAllSprites();
  initEntityNavigation();
});
