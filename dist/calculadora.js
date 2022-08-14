export class Calculadora {
    // inicializa a lógica da classe
    constructor(calculo) {
        this.primeiroNumero = calculo.primeiroNumero;
        this.segundoNumero = calculo.segundoNumero;
        this.operador = calculo.operador;
    }
    calcular() {
        let resultado = 0;
        if (this.operador === "/" && this.segundoNumero === 0)
            return 0;
        switch (this.operador) {
            case "+":
                resultado = this.primeiroNumero + this.segundoNumero;
                break;
            case "-":
                resultado = this.primeiroNumero - this.segundoNumero;
                break;
            case "*":
                resultado = this.primeiroNumero * this.segundoNumero;
                break;
            case "/":
                resultado = this.primeiroNumero / this.segundoNumero;
                break;
        }
        return resultado;
    }
}
