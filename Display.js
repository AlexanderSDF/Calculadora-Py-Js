class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new calculadora();
    this.ValorActual = "";
    this.ValorAnterior = "";
  }

  agregarNumero(numero) {
    this.ValorInferior = numero;
    this.imprimirValores ();
  }

  imprimirValores() {
    this.displayValorInferior.textContent = this.ValorInferior;
    this.displayValorSuperior.textContent = this.ValorSuperior;
  }
}