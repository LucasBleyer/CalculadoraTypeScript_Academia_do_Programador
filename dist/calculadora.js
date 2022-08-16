export class Calculadora {
    constructor() {
        this.historicoOperacoes = [];
    }
    calcular(calculo) {
        let resultado = 0;
        if (calculo.operador === "/" && calculo.segundoNumero === 0)
            return 0;
        switch (calculo.operador) {
            case "+":
                resultado = calculo.primeiroNumero + calculo.segundoNumero;
                break;
            case "-":
                resultado = calculo.primeiroNumero - calculo.segundoNumero;
                break;
            case "*":
                resultado = calculo.primeiroNumero * calculo.segundoNumero;
                break;
            case "/":
                resultado = calculo.primeiroNumero / calculo.segundoNumero;
                break;
        }
        const operacao = `${calculo.primeiroNumero} ${calculo.operador} ${calculo.segundoNumero} = ${resultado}`;
        this.historicoOperacoes.push(operacao);
        return resultado;
    }
}
