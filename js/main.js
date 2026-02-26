/* ============================================================
   MAIN.JS — Comportamento partilhado por todas as páginas
   Navbar, hamburger menu, active links
   ============================================================ */

/**
 * Inicializa a navbar:
 * - Marca o link activo com base no URL actual
 * - Liga o botão hamburger para mobile
 * - Fecha o menu mobile ao clicar num link
 */
function initNavbar() {
  const hamburger    = document.querySelector('.navbar__hamburger');
  const mobileMenu   = document.querySelector('.navbar__mobile-menu');
  const allNavLinks  = document.querySelectorAll('.navbar__links a, .navbar__mobile-menu a');

  if (!hamburger || !mobileMenu) return;

  /* Abre/fecha o menu mobile ao clicar no hamburger */
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    /* Anima as barras do hamburger quando aberto */
    const bars = hamburger.querySelectorAll('span');
    if (isOpen) {
      bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      bars[1].style.opacity   = '0';
      bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      bars[0].style.transform = '';
      bars[1].style.opacity   = '';
      bars[2].style.transform = '';
    }
  });

  /* Fecha o menu mobile ao clicar num link */
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      const bars = hamburger.querySelectorAll('span');
      bars[0].style.transform = '';
      bars[1].style.opacity   = '';
      bars[2].style.transform = '';
    });
  });

  /* Marca o link activo com base no pathname actual */
  markActiveNavLink(allNavLinks);
}

/**
 * Compara o href de cada link com o URL actual
 * e adiciona a classe 'active' ao correspondente.
 * @param {NodeList} links - Todos os links de navegação
 */
function markActiveNavLink(links) {
  const currentPath = window.location.pathname;

  links.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (!href) return;

    /* Normaliza para comparação (remove .html e barras finais) */
    const normalizedCurrent = currentPath.replace(/\/?index\.html$/, '/').replace(/\/$/, '') || '/';
    const normalizedHref    = href.replace(/\.html$/, '').replace(/\/$/, '') || '/';

    if (
      normalizedCurrent.endsWith(normalizedHref) ||
      (normalizedHref === '/' && (currentPath === '/' || currentPath.endsWith('index.html')))
    ) {
      link.classList.add('active');
    }
  });
}

/**
 * Adiciona animações de entrada aos elementos com
 * o atributo data-animate="fadeInUp" usando IntersectionObserver.
 * Garante que os elementos animam quando entram no viewport.
 */
function initScrollAnimations() {
  /* Verifica suporte ao IntersectionObserver */
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.5s ease both';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-animate]').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

/**
 * Ponto de entrada principal — corre quando o DOM estiver pronto.
 */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
});
