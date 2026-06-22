export class Pessoa {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;

  constructor(nome: string, cpf: string, telefone: string, email: string) {
    if (!Pessoa.validarCPF(cpf)) {
      throw new Error("CPF inválido: " + cpf);
    }

    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.email = email;
  }

  static validarCPF(cpf: string): boolean {
    return /^\d{11}$/.test(cpf);
  }
}
