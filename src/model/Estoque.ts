export class Medicamento {
  constructor(
    private readonly nome: string,
    private readonly tipo: string,
    private readonly preco: number,
    private quantidade: number,
    private readonly validade: string
  ) {}

  getNome(): string {
    return this.nome;
  }

  getTipo(): string {
    return this.tipo;
  }

  getPreco(): number {
    return this.preco;
  }

  getQuantidade(): number {
    return this.quantidade;
  }

  getValidade(): string {
    return this.validade;
  }

  reduzirQuantidade(qtd: number): void {
    this.quantidade -= qtd;
  }
}

export class Estoque {
  static Medicamento = Medicamento;

  private itens: Medicamento[] = [];

  adicionar(m: Medicamento): void {
    this.itens.push(m);
  }

  darBaixa(nomeMedicamento: string, qtd: number): boolean {
    for (const m of this.itens) {
      if (m.getNome() === nomeMedicamento) {
        try {
          if (m.getQuantidade() < qtd) {
            throw new Error("Estoque insuficiente");
          }
          m.reduzirQuantidade(qtd);
          return true;
        } catch (e) {
          return false;
        }
      }
    }

    return false;
  }

  getItens(): ReadonlyArray<Medicamento> {
    return [...this.itens];
  }

  imprimirEstoque(): void {
    console.log("===== ESTOQUE =====");
    for (const m of this.itens) {
      console.log(
        m.getNome() +
          " | " +
          m.getTipo() +
          " | Qtd: " +
          m.getQuantidade() +
          " | Validade: " +
          m.getValidade() +
          " | R$" +
          m.getPreco()
      );
    }
  }

  alertarEstoqueBaixo(): void {
    for (const m of this.itens) {
      if (m.getQuantidade() < 5) {
        console.log("ALERTA: estoque baixo para " + m.getNome());
      }
    }
  }
}
