const swiper = new Swiper('.car1', {
    grabCursor: true,
    spaceBetween: 30,

    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // 3000 ms = 3 seconds
        disableOnInteraction: false, // continua a autoplay mesmo após interação
      },

    //Pontos Responsivos
    breakpoints: {
        0:{
        slidesPerView: 1
        },
        768:{
            slidesPerView: 2
            },
        1024:{
        slidesPerView: 3
        },
    }
  });

  //Botão
  //Parte dos Serviços

  class Accordion {
constructor(el) {
this.el = el;
this.summary = el.querySelector('summary');
this.conteudo = el.querySelector('.conteudo');

this.animation = null;
this.isClosing = false;
this.isExpanding = false;

this.summary.addEventListener('click', (e) => this.onClick(e));
}

static closeAllAccordions(currentAccordion) {
document.querySelectorAll('details').forEach((el) => {
  if (el !== currentAccordion && el.open) {
    el.querySelector('.conteudo').style.opacity = '0'; // Esconde o conteúdo visualmente
    el.querySelector('.conteudo').style.transition = 'opacity 0.4s ease'; // Transição suave de opacidade

    const startHeight = `${el.offsetHeight}px`;
    const endHeight = `${el.querySelector('summary').offsetHeight}px`;

    el.animate({
      height: [startHeight, endHeight]
    },  {
      duration: 400,
      easing: 'ease-out'
    }).onfinish = () => {
      el.open = false;
      el.style.height = '';
    };
  }
});
}

onClick(e) {
e.preventDefault();

const wasOpen = this.el.open;

Accordion.closeAllAccordions(this.el);

if (wasOpen) {
  this.shrink();
} else {
  this.open();
}
}

shrink() {
this.isClosing = true;
this.conteudo.style.opacity = '0'; // Esconde o conteúdo visualmente
this.conteudo.style.transition = 'opacity 0.1s ease'; // Transição suave de opacidade

const startHeight = `${this.el.offsetHeight}px`;
const endHeight = `${this.summary.offsetHeight}px`;

if (this.animation) {
  this.animation.cancel();
}

this.animation = this.el.animate({
  height: [startHeight, endHeight]
}, {
    
  duration: 400,
  easing: 'ease-out'
} 
);

this.animation.onfinish = () => this.onAnimationFinish(false);
this.animation.oncancel = () => this.isClosing = false;
}

open() {
this.conteudo.style.display = 'block'; 
this.conteudo.style.opacity = '1'; 
this.conteudo.style.transition = 'opacity 0.1s ease'; 

this.el.style.height = `${this.el.offsetHeight}px`;
this.el.open = true;
window.requestAnimationFrame(() => this.expand());
}

expand() {
this.isExpanding = true;
const startHeight = `${this.el.offsetHeight}px`;
const endHeight = `${this.summary.offsetHeight + this.conteudo.offsetHeight}px`;

if (this.animation) {
  this.animation.cancel();
}

this.animation = this.el.animate({
  height: [startHeight, endHeight]
}, {
  duration: 400,
  easing: 'ease-out'
});

this.animation.onfinish = () => this.onAnimationFinish(true);
this.animation.oncancel = () => this.isExpanding = false;
}

onAnimationFinish(open) {
this.el.open = open;
this.animation = null;
this.isClosing = false;
this.isExpanding = false;
this.el.style.height = this.el.style.overflow = '';

if (!open) {
  this.conteudo.style.display = 'none'; // Certifica-se de que o conteúdo não é clicável quando fechado
}
}
}

document.querySelectorAll('details').forEach((el) => {
new Accordion(el);
});

// Carrossel do lugar
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Função para mover o item para a frente
function moveNext() {
let items = document.querySelectorAll('.item');
document.querySelector('.slide').appendChild(items[0]);
}

// Função para mover o item para trás
function movePrev() {
let items = document.querySelectorAll('.item');
document.querySelector('.slide').prepend(items[items.length - 1]);
}

// Evento para os botões de navegação
next.addEventListener('click', moveNext);
prev.addEventListener('click', movePrev);

// Evento para clicar em cada imagem
let items = document.querySelectorAll('.item');
items.forEach(item => {
item.addEventListener('click', function() {
    // Coloca a imagem clicada na posição principal
    let itemsArray = Array.from(document.querySelectorAll('.item'));
    let index = itemsArray.indexOf(this);
    
    for (let i = 0; i < index; i++) {
        moveNext();
    }
});
});










document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.direita');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // Adiciona a classe .show ao elemento visível
        observer.unobserve(entry.target); // Para de observar o elemento
      }
    });
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.esquerda');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); 
        observer.unobserve(entry.target); 
      }
    });
  });

 
  elements.forEach(element => {
    observer.observe(element);
  });
});
