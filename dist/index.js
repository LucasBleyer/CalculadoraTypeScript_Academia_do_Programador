import { Calculadora } from "./calculadora.js";
import { repositorioLocalStorage } from "./repositorios/repositorioLocalStorage.js";
// Data Binding
const txtPrimeiroNumero = document.getElementById("primeiroNumero");
const txtSegundoNumero = document.getElementById("segundoNumero");
const selectOperador = document.getElementById("operador");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpar = document.getElementById("btnLimpar");
const txtResultado = document.getElementById("txtResultado");
const divHistorico = document.getElementById("historico");
const calculadora = new Calculadora();
const repositorio = new repositorioLocalStorage();
function calcular() {
    const calculo = {
        primeiroNumero: Number(txtPrimeiroNumero.value),
        segundoNumero: Number(txtSegundoNumero.value),
        operador: selectOperador.options[selectOperador.selectedIndex].value
    };
    const resultado = calculadora.calcular(calculo);
    repositorio.inserir(calculadora.historicoOperacoes);
    if (calculadora.historicoOperacoes.length === 0) {
        divHistorico.style.display = "none";
    }
    else {
        limparOperacoes();
        mostrarHistorico();
    }
    txtResultado.innerText = "O resultado é: " + resultado;
}
function mostrarHistorico() {
    calculadora.historicoOperacoes = repositorio.selecionarTodos();
    if (calculadora.historicoOperacoes.length > 0) {
        divHistorico.classList.remove("d-none");
    }
    calculadora.historicoOperacoes.forEach((operacao) => {
        const txtOperacao = document.createElement("h3");
        txtOperacao.className = "alert alert-danger";
        txtOperacao.innerText = operacao;
        divHistorico.appendChild(txtOperacao); //vai estar adicionando um elemento dentro da div 
    });
}
function limparOperacoes() {
    //enquanto o div historico tiver o primeiro elemento ele ira remover o primeiro elemento para o mesmo nao se repetir
    while (divHistorico.firstChild) {
        divHistorico.removeChild(divHistorico.firstChild);
    }
}
btnCalcular.addEventListener("click", calcular);
btnLimpar.addEventListener("click", () => {
    repositorio.excluir();
    divHistorico.classList.add("d-none");
    mostrarHistorico();
});
