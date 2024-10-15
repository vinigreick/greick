
const botao2 = document.querySelector('.botao2');

botao2.addEventListener('click', handleVerMaisClick);

function handleVerMaisClick() {
  const el = 'card3'; 
  botao2(el);
}

function handleVerMenosClick() {
  const el = 'card4'; 
  botao2(el);
}

function botao2(el) {
  var display = document.getElementById(el).style.display;
  if (display == "none") {
    document.getElementById(el).style.display = 'block';
    botao2.innerHTML = '<div class="pb">Ver menos</div>';
    botao2.removeEventListener('click', handleVerMaisClick);
    botao2.addEventListener('click', handleVerMenosClick);
  } else {
    document.getElementById(el).style.display = 'none';
    botao2.innerHTML = '<div class="pb">Ver mais</div>';
    botao2.removeEventListener('click', handleVerMenosClick);
    botao2.addEventListener('click', handleVerMaisClick);
  }
}