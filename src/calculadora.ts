import { Calculo } from "./calculo.type.js";

export class Calculadora {
  primeiroNumero: number;
  segundoNumero: number;
  operador: string;

  // inicializa a lógica da classe
  constructor(calculo: Calculo) {
    this.primeiroNumero = calculo.primeiroNumero;
    this.segundoNumero = calculo.segundoNumero;
    this.operador = calculo.operador;
  }

  calcular(): number {
    let resultado: number = 0;

    if (this.operador === "/" && this.segundoNumero === 0)
      return 0;

    switch (this.operador) {
      case "+": resultado = this.primeiroNumero + this.segundoNumero; break;
      case "-": resultado = this.primeiroNumero - this.segundoNumero; break;
      case "*": resultado = this.primeiroNumero * this.segundoNumero; break;
      case "/": resultado = this.primeiroNumero / this.segundoNumero; break;
    }
    return resultado;
  }

} 