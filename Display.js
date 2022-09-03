/* va ser la encargada de controlar la calculadora
interactua con los botones y muestra en pantalla */
class Display {
  constructor(displayValorSuperior, displayValorInferior){
    this.displayValorInferior = displayValorSuperior;
    this.displayValorSuperior = displayValorInferior;
    this.calculador = new calculadora();
    this.ValorInferior = '';
    this.ValorSuperior = '';
  }
  agregarNumero(numero) {
    this.ValorInferior = numero;
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValorInferior.textContent = this.ValorInferior;
    this.displayValorSuperior.textContent = this.ValorSuperior;
  }
}