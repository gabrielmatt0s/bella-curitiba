document.addEventListener("DOMContentLoaded", () => {
  // ===================== CARROSSEL DE DEPOIMENTOS =====================
  // No desktop avança de slide em slide (3 cards); no mobile, de card em card.
  const carousel = document.querySelector(".depoimentos__carousel");
  const track = document.querySelector(".depoimentos__track");
  const slides = document.querySelectorAll(".depoimentos__slide");
  const cards = document.querySelectorAll(".depoimentos__card");
  const prevBtn = document.querySelector(".depoimentos__arrow--prev");
  const nextBtn = document.querySelector(".depoimentos__arrow--next");
  const dotsContainer = document.querySelector(".depoimentos__dots");

  if (track && slides.length > 0) {
    const mobile = window.matchMedia("(max-width: 768px)");
    const cardsPorSlide = Math.ceil(cards.length / slides.length);
    const DOTS_VISIVEIS = 3;
    let current = 0;
    let inicioJanela = 0;
    let dots = [];

    // No mobile cada bolinha é um depoimento (9); no desktop, um slide de 3
    function criarDots() {
      const total = mobile.matches ? cards.length : slides.length;
      dotsContainer.innerHTML = "";
      dots = Array.from({ length: total }, (_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "depoimentos__dot";
        dot.setAttribute(
          "aria-label",
          mobile.matches ? `Ir para a avaliação ${index + 1}` : `Ir para o slide ${index + 1}`
        );
        dot.addEventListener("click", () => irPara(index));
        dotsContainer.appendChild(dot);
        return dot;
      });
    }

    function update() {
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle("depoimentos__dot--active", index === current);
      });

      // Janela deslizante: só 3 bolinhas visíveis por vez; a janela anda
      // apenas quando a bolinha ativa sai dela (a 4ª entra quando a 1ª sai)
      if (mobile.matches && dots.length > DOTS_VISIVEIS) {
        if (current < inicioJanela) inicioJanela = current;
        if (current > inicioJanela + DOTS_VISIVEIS - 1) inicioJanela = current - (DOTS_VISIVEIS - 1);
        const passo = dots[1].offsetLeft - dots[0].offsetLeft;
        dotsContainer.scrollTo({ left: inicioJanela * passo, behavior: "smooth" });
      }
    }

    function irPara(index) {
      const total = mobile.matches ? cards.length : slides.length;
      current = (index + total) % total;
      update();
    }

    nextBtn?.addEventListener("click", () => irPara(current + 1));
    prevBtn?.addEventListener("click", () => irPara(current - 1));

    // Converte o índice atual ao cruzar o breakpoint, para não pular de posição
    mobile.addEventListener("change", (e) => {
      current = e.matches ? current * cardsPorSlide : Math.floor(current / cardsPorSlide);
      inicioJanela = 0;
      criarDots();
      update();
    });

    // Arrastar com o dedo ou mouse
    let inicioX = null;
    let arrastou = false;

    carousel.addEventListener("pointerdown", (e) => {
      inicioX = e.clientX;
      arrastou = false;
    });

    carousel.addEventListener("pointerup", (e) => {
      if (inicioX === null) return;
      const delta = e.clientX - inicioX;
      inicioX = null;
      if (Math.abs(delta) > 40) {
        arrastou = true;
        irPara(delta < 0 ? current + 1 : current - 1);
      }
    });

    carousel.addEventListener("pointercancel", () => {
      inicioX = null;
    });

    // Depois de um arrasto, cancela o clique para não abrir o link da avaliação
    carousel.addEventListener("click", (e) => {
      if (arrastou) {
        e.preventDefault();
        arrastou = false;
      }
    }, true);

    criarDots();
    update();
  }

  // ===================== CARROSSEL DOS CARDS (PRODUÇÃO ARTESANAL) =====================
  document.querySelectorAll(".card-carrossel").forEach((carrossel) => {
    const cardTrack = carrossel.querySelector(".card-carrossel__track");
    const fotos = cardTrack.querySelectorAll("img");
    const dotsContainer = carrossel.querySelector(".card-carrossel__dots");
    const total = fotos.length;
    let atual = 0;

    // Carrossel ainda sem fotos: esconde setas/bolinhas e não inicializa
    if (total === 0) {
      carrossel.classList.add("card-carrossel--vazio");
      return;
    }

    // Clones nas pontas para o loop contínuo: avançar da última foto segue
    // pra direita (sobre um clone da primeira) e voltar da primeira segue
    // pra esquerda (sobre um clone da última); depois da animação o track é
    // reposicionado na foto real sem transição, de forma invisível.
    const temLoop = total > 1;
    const offset = temLoop ? 1 : 0;
    if (temLoop) {
      cardTrack.appendChild(fotos[0].cloneNode(true));
      cardTrack.insertBefore(fotos[total - 1].cloneNode(true), fotos[0]);
    }

    const cardDots = Array.from({ length: total }, (_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "card-carrossel__dot";
      dot.setAttribute("aria-label", `Foto ${index + 1} de ${total}`);
      dot.addEventListener("click", () => {
        normalizar();
        irPara(index);
      });
      dotsContainer.appendChild(dot);
      return dot;
    });

    function posicionar(animar) {
      if (!animar) cardTrack.style.transition = "none";
      cardTrack.style.transform = `translateX(-${(atual + offset) * 100}%)`;
      if (!animar) {
        cardTrack.offsetHeight; // aplica a posição antes de reativar a transição
        cardTrack.style.transition = "";
      }
    }

    // Se a animação terminou (ou foi interrompida) sobre um clone,
    // volta pra foto real equivalente sem o usuário perceber
    function normalizar() {
      if (atual === -1 || atual === total) {
        atual = (atual + total) % total;
        posicionar(false);
      }
    }

    function irPara(index) {
      atual = Math.max(-1, Math.min(total, index));
      posicionar(true);
      const real = (atual + total) % total;
      cardDots.forEach((dot, i) => {
        dot.classList.toggle("card-carrossel__dot--active", i === real);
      });
    }

    function avancar(passo) {
      normalizar();
      irPara(atual + passo);
    }

    cardTrack.addEventListener("transitionend", normalizar);

    carrossel.querySelector(".card-carrossel__arrow--prev")
      .addEventListener("click", () => avancar(-1));
    carrossel.querySelector(".card-carrossel__arrow--next")
      .addEventListener("click", () => avancar(1));

    // Arrastar com o dedo ou mouse
    let inicioX = null;

    carrossel.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button")) return;
      inicioX = e.clientX;
    });

    carrossel.addEventListener("pointerup", (e) => {
      if (inicioX === null) return;
      const delta = e.clientX - inicioX;
      inicioX = null;
      if (Math.abs(delta) > 40) avancar(delta < 0 ? 1 : -1);
    });

    carrossel.addEventListener("pointercancel", () => {
      inicioX = null;
    });

    posicionar(false);
    irPara(0);
  });

  // ===================== ANIMAÇÕES REVEAL =====================
  const revealEls = document.querySelectorAll(".reveal");

  if (revealEls.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    revealEls.forEach((el) => observer.observe(el));
  }

  // ===================== CARDS DE VAGAS (página vagas.html) =====================
  document.querySelectorAll(".vagas__toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const card = toggle.closest(".vagas__card");
      const detalhe = card.querySelector(".vagas__detalhe");
      const aberta = card.classList.toggle("vagas__card--aberta");
      toggle.setAttribute("aria-expanded", String(aberta));
      detalhe.hidden = !aberta;
    });
  });
});
