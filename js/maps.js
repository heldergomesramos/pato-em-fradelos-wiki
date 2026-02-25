/* ============================================================
   MAPS.JS — Lógica da página de mapas
   Scroll contínuo: tab activo actualiza ao fazer scroll,
   clicar no tab faz scroll suave para a zona correcta.
   Partículas atmosféricas para todas as zonas.
   ============================================================ */

/* ──────────────────────────────────────────────────────────
   NAVEGAÇÃO POR TABS (scroll-based)
────────────────────────────────────────────────────────── */

function initMapTabs() {
  const tabs   = document.querySelectorAll('.map-tab');
  const panels = document.querySelectorAll('.map-panel');
  if (!tabs.length || !panels.length) return;

  /* Clicar no tab → scroll suave até ao painel */
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;
      const target   = document.getElementById(targetId);
      if (!target) return;

      const navHeight  = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height')) || 56;
      const tabsEl     = document.querySelector('.map-tabs-sticky');
      const tabsHeight = tabsEl ? tabsEl.offsetHeight : 44;
      const offset     = navHeight + tabsHeight + 8;

      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  /* IntersectionObserver → tab activo actualiza com scroll */
  const navHeight  = parseInt(getComputedStyle(document.documentElement)
    .getPropertyValue('--nav-height')) || 56;
  const tabsEl     = document.querySelector('.map-tabs-sticky');
  const tabsHeight = tabsEl ? tabsEl.offsetHeight : 44;
  const rootMarginTop = -(navHeight + tabsHeight + 2);

  function setActiveTab(activeId) {
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.target === activeId);
    });
    const activeTab = document.querySelector(`.map-tab[data-target="${activeId}"]`);
    if (activeTab) {
      activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    },
    {
      rootMargin: `${rootMarginTop}px 0px -30% 0px`,
      threshold: 0,
    }
  );

  panels.forEach(panel => observer.observe(panel));
}

/* ──────────────────────────────────────────────────────────
   PARTÍCULAS ATMOSFÉRICAS
────────────────────────────────────────────────────────── */

function createBubble(container) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  const size = 4 + Math.random() * 10;
  const left = 5 + Math.random() * 90;
  const duration = 7 + Math.random() * 7;
  const delay = Math.random() * 10;
  bubble.style.cssText = `width:${size}px;height:${size}px;left:${left}%;animation-duration:${duration}s;animation-delay:-${delay}s;`;
  container.appendChild(bubble);
}

function createLightRay(container) {
  const ray = document.createElement('div');
  ray.className = 'light-ray';
  const left = 10 + Math.random() * 80;
  const height = 40 + Math.random() * 35;
  const duration = 4 + Math.random() * 5;
  const delay = Math.random() * 4;
  ray.style.cssText = `left:${left}%;height:${height}%;animation-duration:${duration}s;animation-delay:-${delay}s;`;
  container.appendChild(ray);
}

function createSpore(container) {
  const spore = document.createElement('div');
  spore.className = 'spore';
  const size = 2 + Math.random() * 3;
  const left = 5 + Math.random() * 90;
  const duration = 9 + Math.random() * 9;
  const delay = Math.random() * 12;
  spore.style.cssText = `width:${size}px;height:${size}px;left:${left}%;animation-duration:${duration}s;animation-delay:-${delay}s;`;
  container.appendChild(spore);
}

function createLeaf(container) {
  const leaf = document.createElement('div');
  leaf.className = 'leaf-particle';
  const size = 3 + Math.random() * 5;
  const left = 5 + Math.random() * 90;
  const duration = 10 + Math.random() * 8;
  const delay = Math.random() * 12;
  leaf.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${left}%;border-radius:50% 0 50% 0;background:rgba(100,220,60,0.35);box-shadow:0 0 4px rgba(100,220,60,0.2);animation:leafFloat ${duration}s ease-in-out -${delay}s infinite;pointer-events:none;`;
  container.appendChild(leaf);
}

function createDust(container) {
  const dust = document.createElement('div');
  dust.className = 'dust-particle';
  const size = 1 + Math.random() * 3;
  const left = 5 + Math.random() * 90;
  const duration = 12 + Math.random() * 10;
  const delay = Math.random() * 15;
  dust.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${left}%;border-radius:50%;background:rgba(180,140,80,0.3);animation:dustFloat ${duration}s linear -${delay}s infinite;pointer-events:none;`;
  container.appendChild(dust);
}

function createSteam(container) {
  const steam = document.createElement('div');
  steam.className = 'steam-particle';
  const size = 6 + Math.random() * 12;
  const left = 10 + Math.random() * 80;
  const duration = 3 + Math.random() * 4;
  const delay = Math.random() * 6;
  steam.style.cssText = `position:absolute;bottom:0;width:${size}px;height:${size * 3}px;left:${left}%;border-radius:50%;background:rgba(255,160,60,0.12);filter:blur(4px);animation:steamRise ${duration}s ease-out -${delay}s infinite;pointer-events:none;`;
  container.appendChild(steam);
}

function createWindParticle(container) {
  const w = document.createElement('div');
  w.className = 'wind-particle';
  const height = 1 + Math.random() * 1;
  const width = 20 + Math.random() * 60;
  const top = 5 + Math.random() * 90;
  const duration = 2 + Math.random() * 3;
  const delay = Math.random() * 5;
  w.style.cssText = `position:absolute;height:${height}px;width:${width}px;top:${top}%;left:-10%;border-radius:1px;background:rgba(180,220,255,0.12);animation:windStreakMove ${duration}s linear -${delay}s infinite;pointer-events:none;`;
  container.appendChild(w);
}

function createDataParticle(container) {
  const chars = '01アイウエオカ∆∑Ψ≡';
  const d = document.createElement('div');
  d.className = 'data-particle';
  d.textContent = chars[Math.floor(Math.random() * chars.length)];
  const left = 5 + Math.random() * 90;
  const duration = 8 + Math.random() * 10;
  const delay = Math.random() * 12;
  d.style.cssText = `left:${left}%;animation:dataFloat ${duration}s linear -${delay}s infinite;`;
  container.appendChild(d);
}

function createFacilityScan(container) {
  const scan = document.createElement('div');
  scan.className = 'facility-scan';
  const delay = Math.random() * 7;
  scan.style.animationDelay = `-${delay}s`;
  container.appendChild(scan);
}

function createLabOrb(container) {
  const orb = document.createElement('div');
  orb.className = 'lab-orb';
  const size = 4 + Math.random() * 10;
  const left = 10 + Math.random() * 80;
  const top = 20 + Math.random() * 60;
  const duration = 4 + Math.random() * 6;
  const delay = Math.random() * 6;
  orb.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${left}%;top:${top}%;animation-duration:${duration}s;animation-delay:-${delay}s;`;
  container.appendChild(orb);
}

function createCorridorShadow(container) {
  const shadow = document.createElement('div');
  shadow.className = 'corridor-shadow';
  const duration = 6 + Math.random() * 8;
  const delay = Math.random() * 10;
  shadow.style.cssText = `animation-duration:${duration}s;animation-delay:-${delay}s;`;
  container.appendChild(shadow);
}

function createRailCart(container) {
  const cart = document.createElement('div');
  cart.className = 'rail-cart';
  const duration = 8 + Math.random() * 8;
  const delay = Math.random() * 12;
  cart.style.cssText = `animation-duration:${duration}s;animation-delay:-${delay}s;`;
  container.appendChild(cart);
}

function initAtmosphericParticles() {
  const aquariumBg = document.querySelector('.atm-aquarium__bg');
  if (aquariumBg) {
    const p = aquariumBg.parentElement;
    for (let i = 0; i < 8; i++) createBubble(p);
    for (let i = 0; i < 5; i++) createLightRay(p);
  }

  const depthsBg = document.querySelector('.atm-depths__bg');
  if (depthsBg) {
    const p = depthsBg.parentElement;
    for (let i = 0; i < 7; i++) createSpore(p);
  }

  const natureBg = document.querySelector('.atm-nature__bg');
  if (natureBg) {
    const p = natureBg.parentElement;
    for (let i = 0; i < 10; i++) createLeaf(p);
    for (let i = 0; i < 4; i++)  createSpore(p);
  }

  const minesBg = document.querySelector('.atm-mines__bg');
  if (minesBg) {
    const p = minesBg.parentElement;
    for (let i = 0; i < 12; i++) createDust(p);
  }

  const facilityBg = document.querySelector('.atm-facility__bg');
  if (facilityBg) {
    const p = facilityBg.parentElement;
    for (let i = 0; i < 2; i++)  createFacilityScan(p);
    for (let i = 0; i < 10; i++) createDataParticle(p);
  }

  const labBg = document.querySelector('.atm-lab__bg');
  if (labBg) {
    const p = labBg.parentElement;
    for (let i = 0; i < 6; i++) createLabOrb(p);
  }

  const corridorBg = document.querySelector('.atm-corridor__bg');
  if (corridorBg) {
    const p = corridorBg.parentElement;
    for (let i = 0; i < 3; i++) createCorridorShadow(p);
  }

  const geysersBg = document.querySelector('.atm-geysers__bg');
  if (geysersBg) {
    const p = geysersBg.parentElement;
    for (let i = 0; i < 8; i++) createSteam(p);
  }

  const transportBg = document.querySelector('.atm-transport__bg');
  if (transportBg) {
    const p = transportBg.parentElement;
    for (let i = 0; i < 3; i++) createRailCart(p);
  }

  const windBg = document.querySelector('.atm-wind__bg');
  if (windBg) {
    const p = windBg.parentElement;
    for (let i = 0; i < 12; i++) createWindParticle(p);
  }
}

/* ──────────────────────────────────────────────────────────
   PONTO DE ENTRADA
────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initMapTabs();
  initAtmosphericParticles();
});
