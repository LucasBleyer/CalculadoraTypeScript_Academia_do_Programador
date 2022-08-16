export class repositorioLocalStorage {
    constructor() {
        this.localStorage = window.localStorage;
    }
    inserir(dados) {
        const dadosJson = JSON.stringify(dados);
        this.localStorage.setItem("historico", dadosJson);
    }
    excluir() {
        this.localStorage.removeItem("historico");
    }
    selecionarTodos() {
        const dadosJson = this.localStorage.getItem("historico");
        if (!dadosJson)
            return [];
        else
            return JSON.parse(dadosJson);
    }
}
