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

  imprimirEstoque(): string {
    return [
      "===== ESTOQUE =====",
      ...this.itens.map(
        (m) =>
          m.nome +
          " | " +
          m.tipo +
          " | Qtd: " +
          m.quantidade +
          " | Validade: " +
          m.validade +
          " | R$" +
          m.preco
      ),
    ].join("\n");
  }

  alertarEstoqueBaixo(): string[] {
    return this.itens
      .filter((m) => m.quantidade < 5)
      .map((m) => "ALERTA: estoque baixo para " + m.nome);
  }
}
