const displayValorSuperior = document.getElementById('valorSuperior');
const displayValorInferior = document.getElementById('valorInferior');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorSuperior, displayValorInferior);

botonesNumeros.forEach(boton => {
  boton.addEventListener('click', ()=> display.agregarNumero(boton.innerHTML));
});