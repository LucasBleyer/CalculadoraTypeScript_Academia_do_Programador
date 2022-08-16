import { Calculadora } from "./calculadora.js";
import { Calculo } from "./calculo.type.js";

// Data Binding
const txtPrimeiroNumero = document.getElementById("primeiroNumero") as HTMLInputElement;
const txtSegundoNumero = document.getElementById("segundoNumero") as HTMLInputElement;
const selectOperador = document.getElementById("operador") as HTMLSelectElement;

const btnCalcular = document.getElementById("btnCalcular") as HTMLButtonElement;
const txtResultado = document.getElementById("txtResultado") as HTMLHeadingElement;
const divHistorico = document.getElementById("historico") as HTMLDivElement;

const calculadora = new Calculadora();

function calcular() {
  let resultado: number = 0;

  const calculo: Calculo = {
    primeiroNumero: Number(txtPrimeiroNumero.value),
    segundoNumero: Number(txtSegundoNumero.value),
    operador: selectOperador.options[selectOperador.selectedIndex].value
  }

  resultado = calculadora.calcular(calculo);

  if(calculadora.historicoOperacoes.length === 0)
  {
    divHistorico.style.display = "none";
  }
  else
  {
    limparOperacoes();
    mostrarHistorico();
  }
  txtResultado.innerText = "O resultado é: " + resultado;
}

function mostrarHistorico(){
  divHistorico.style.display = "flex";

  calculadora.historicoOperacoes.forEach((operacao: string) =>{
    const txtOperacao = document.createElement("h3") as HTMLHeadingElement;
    txtOperacao.className = "card-historico";
    txtOperacao.innerText = operacao;

    divHistorico.appendChild(txtOperacao);//vai estar adicionando um elemento dentro da div 
  })
}

function limparOperacoes(){
  //enquanto o div historico tiver o primeiro elemento ele ira remover o primeiro elemento para o mesmo nao se repetir
  while(divHistorico.firstChild){
    divHistorico.removeChild(divHistorico.firstChild);
  }
}

btnCalcular.addEventListener("click", calcular);