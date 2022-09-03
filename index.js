const displayValorSuperior = document.getElementById('valorSuperior');
const displayValorInferior = document.getElementById('valorInferior');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorSuperior, displayValorInferior);

botonesNumeros.forEach(boton => {
  boton.addEventListener('click', ()=> display.agregarNumero(boton.innerHTML));
});


/* PRUEBA DE CONSOLA
const calculadora = new Calculadora();

console.log(calculadora.sumar(2,3))
console.log(calculadora.multiplicar(8,5))
console.log(calculadora.dividir(6,3))
console.log(calculadora.restar(5,3))  */