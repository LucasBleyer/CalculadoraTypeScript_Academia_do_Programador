export interface IRepositorio{

  inserir(dados: any): void;

  excluir(): void;

  selecionarTodos(): string[];
}