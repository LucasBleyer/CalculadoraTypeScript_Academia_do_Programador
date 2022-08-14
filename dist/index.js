import { Calculadora } from "./calculadora.js";
// Data Binding
const txtPrimeiroNumero = document.getElementById("primeiroNumero");
const txtSegundoNumero = document.getElementById("segundoNumero");
const selectOperador = document.getElementById("operador");
const btnCalcular = document.getElementById("btnCalcular");
const txtResultado = document.getElementById("txtResultado");
function calcular() {
    let resultado = 0;
    const calculo = {
        primeiroNumero: Number(txtPrimeiroNumero.value),
        segundoNumero: Number(txtSegundoNumero.value),
        operador: selectOperador.options[selectOperador.selectedIndex].value
    };
    const calculadora = new Calculadora(calculo);
    resultado = calculadora.calcular();
    txtResultado.innerText = "O resultado é: " + resultado;
}
btnCalcular.addEventListener("click", calcular);
