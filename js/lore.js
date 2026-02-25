/* ============================================================
   LORE.JS — Lógica da página de Lore
   Efeito de digitação no terminal e filtros de secção
   ============================================================ */

/* ──────────────────────────────────────────────────────────
   EFEITO DE DIGITAÇÃO NO TERMINAL
────────────────────────────────────────────────────────── */

/**
 * Anima um elemento de texto com efeito de máquina de escrever.
 * O texto aparece caractere a caractere.
 * @param {HTMLElement} el       - Elemento cujo textContent será animado
 * @param {string}      text     - Texto a digitar
 * @param {number}      speed    - Milissegundos entre cada caractere (omissão: 18)
 * @param {Function}    callback - Função chamada quando a digitação terminar
 */
function typeText(el, text, speed = 18, callback) {
  el.textContent = '';
  let i = 0;

  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (typeof callback === 'function') callback();
    }
  }, speed);
}

/**
 * Inicia a animação de digitação em todos os elementos
 * com a classe .terminal__text dentro de um terminal visível.
 * Encadeia as linhas sequencialmente.
 * @param {HTMLElement} terminalEl - Elemento do terminal
 */
function animateTerminal(terminalEl) {
  const lines = terminalEl.querySelectorAll('.terminal__text[data-type]');
  if (!lines.length) return;

  let index = 0;

  function typeNextLine() {
    if (index >= lines.length) return;
    const el   = lines[index];
    const text = el.dataset.type;
    index++;
    typeText(el, text, 14, () => {
      /* Pequena pausa entre linhas */
      setTimeout(typeNextLine, 80);
    });
  }

  typeNextLine();
}

/**
 * Usa IntersectionObserver para disparar a animação
 * do terminal apenas quando ele entra no viewport.
 */
function initTerminalAnimations() {
  const terminals = document.querySelectorAll('.terminal');
  if (!terminals.length) return;

  if (!('IntersectionObserver' in window)) {
    /* Fallback: mostra texto imediatamente se não há suporte */
    terminals.forEach(t => {
      t.querySelectorAll('.terminal__text[data-type]').forEach(el => {
        el.textContent = el.dataset.type;
      });
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          /* Espera 300ms antes de começar a digitar */
          setTimeout(() => animateTerminal(entry.target), 300);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  terminals.forEach(t => observer.observe(t));
}

/* ──────────────────────────────────────────────────────────
   FILTROS DE SECÇÃO
────────────────────────────────────────────────────────── */

/**
 * Inicializa os botões de filtro da página de Lore.
 * Ao clicar num filtro, mostra apenas os elementos
 * cujo data-category corresponde ao filtro seleccionado.
 */
function initLoreFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      /* Actualiza estado activo dos botões */
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      /* Mostra/oculta os elementos filtráveis */
      document.querySelectorAll('[data-category]').forEach(el => {
        if (filter === 'all' || el.dataset.category === filter) {
          el.style.display = '';
          /* Re-anima na entrada */
          el.style.animation = 'none';
          void el.offsetHeight;
          el.style.animation = 'fadeInUp 0.3s ease both';
        } else {
          el.style.display = 'none';
        }
      });
    });
  });
}

/* ──────────────────────────────────────────────────────────
   PONTO DE ENTRADA
────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initTerminalAnimations();
  initLoreFilters();
});
