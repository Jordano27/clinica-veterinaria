export class Pessoa {
  constructor(
    private readonly nome: string,
    private readonly cpf: string,
    private readonly telefone: string,
    private readonly email: string
  ) {}

  getNome(): string {
    return this.nome;
  }

  getCpf(): string {
    return this.cpf;
  }

  getTelefone(): string {
    return this.telefone;
  }

  getEmail(): string {
    return this.email;
  }

  static validarCPF(cpf: string): boolean {
    return cpf !== null && cpf.length === 11;
  }
}
