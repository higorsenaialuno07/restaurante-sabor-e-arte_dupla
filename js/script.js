// 1. CARROSSEL DE BANNERS
const slides = document.querySelectorAll('.slide');
const pontos = document.querySelectorAll('.ponto');
const btnAnterior = document.getElementById('btnAnterior');
const btnProximo = document.getElementById('btnProximo');

let slideAtual = 0;

function mostrarSlide(indice) {
  slides.forEach((slide, i) => {
    slide.classList.remove('ativo');
    pontos[i].classList.remove('ativo');
  });

  slides[indice].classList.add('ativo');
  pontos[indice].classList.add('ativo');
}

btnProximo.addEventListener('click', () => {
  slideAtual = (slideAtual + 1) % slides.length;
  mostrarSlide(slideAtual);
});

btnAnterior.addEventListener('click', () => {
  slideAtual = (slideAtual - 1 + slides.length) % slides.length;
  mostrarSlide(slideAtual);
});

pontos.forEach((ponto) => {
  ponto.addEventListener('click', () => {
    slideAtual = Number(ponto.getAttribute('data-index'));
    mostrarSlide(slideAtual);
  });
});

// 2. RECURSO JS: BOTÃO "VER DESTAQUE DO DIA" (click, textContent e if/else)
const btnDestaque = document.getElementById('btnDestaque');
const textoDestaque = document.getElementById('textoDestaque');
let mostrandoDestaque = false;

btnDestaque.addEventListener('click', () => {
  if (!mostrandoDestaque) {
    textoDestaque.textContent = '🍽️ Prato recomendado do dia: Picanha Grelhada na Brasa com arroz biro-biro e batatas rústicas — R$ 89,90!';
    btnDestaque.textContent = 'Ocultar destaque do dia';
    mostrandoDestaque = true;
  } else {
    textoDestaque.textContent = 'Clique no botão acima para descobrir o prato recomendado pelo chef hoje!';
    btnDestaque.textContent = 'Ver destaque do dia';
    mostrandoDestaque = false;
  }
});

// 3. DESTACAR O BOTÃO ATIVO NO MENU AO CLICAR
const linksMenu = document.querySelectorAll('.menu a');

linksMenu.forEach((link) => {
  link.addEventListener('click', () => {
    linksMenu.forEach((item) => item.classList.remove('ativo'));
    link.classList.add('ativo');
  });
});