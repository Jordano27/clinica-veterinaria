export class Estoque {
  static Medicamento = class {
    nome: string;
    tipo: string;
    preco: number;
    quantidade: number;
    validade: string;

    constructor(
      nome: string,
      tipo: string,
      preco: number,
      quantidade: number,
      validade: string
    ) {
      this.nome = nome;
      this.tipo = tipo;
      this.preco = preco;
      this.quantidade = quantidade;
      this.validade = validade;
    }
  };

  itens: InstanceType<typeof Estoque.Medicamento>[] = [];

  adicionar(m: InstanceType<typeof Estoque.Medicamento>): void {
    this.itens.push(m);
  }

  darBaixa(nomeMedicamento: string, qtd: number): boolean {
    if (nomeMedicamento.trim().length === 0) {
      throw new Error("Nome do medicamento não pode ser vazio");
    }

    if (qtd <= 0) {
      throw new Error("Quantidade deve ser maior que zero");
    }

    for (const m of this.itens) {
      if (m.nome === nomeMedicamento) {
        if (m.quantidade < qtd) {
          throw new Error("Estoque insuficiente");
        }

        m.quantidade -= qtd;
        return true;
      }
    }

    throw new Error("Medicamento não encontrado: " + nomeMedicamento);
  }

  getItens(): InstanceType<typeof Estoque.Medicamento>[] {
    return this.itens;
  }

  imprimirEstoque(): void {
    console.log("===== ESTOQUE =====");
    for (const m of this.itens) {
      console.log(
        m.nome +
          " | " +
          m.tipo +
          " | Qtd: " +
          m.quantidade +
          " | Validade: " +
          m.validade +
          " | R$" +
          m.preco
      );
    }
  }

  alertarEstoqueBaixo(): void {
    for (const m of this.itens) {
      if (m.quantidade < 5) {
        console.log("ALERTA: estoque baixo para " + m.nome);
      }
    }
  }
}
