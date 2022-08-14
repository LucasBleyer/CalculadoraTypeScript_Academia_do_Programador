import { Calculadora } from "./calculadora.js";
import { Calculo } from "./calculo.type.js";

// Data Binding
const txtPrimeiroNumero = document.getElementById("primeiroNumero") as HTMLInputElement;
const txtSegundoNumero = document.getElementById("segundoNumero") as HTMLInputElement;
const selectOperador = document.getElementById("operador") as HTMLSelectElement;

const btnCalcular = document.getElementById("btnCalcular") as HTMLButtonElement;
const txtResultado = document.getElementById("txtResultado") as HTMLHeadingElement;

function calcular() {
  let resultado: number = 0;

  const calculo: Calculo = {
    primeiroNumero: Number(txtPrimeiroNumero.value),
    segundoNumero: Number(txtSegundoNumero.value),
    operador: selectOperador.options[selectOperador.selectedIndex].value
  }

  const calculadora = new Calculadora(calculo);

  resultado = calculadora.calcular();

  txtResultado.innerText = "O resultado é: " + resultado;
}

btnCalcular.addEventListener("click", calcular);