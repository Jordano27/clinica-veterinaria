type Especie = "cachorro" | "gato" | "passaro" | "reptil";
type Porte = "pequeno" | "medio" | "grande";

export class Animal {
  constructor(
    private readonly nome: string,
    private readonly idade: number,
    private readonly peso: number,
    private readonly especie: string,
    private readonly porte: string,
    private readonly nomeDono: string,
    private readonly telefoneDono: string,
    private readonly cpfDono: string
  ) {}

  getNome(): string {
    return this.nome;
  }

  getIdade(): number {
    return this.idade;
  }

  getPeso(): number {
    return this.peso;
  }

  getEspecie(): string {
    return this.especie;
  }

  getPorte(): string {
    return this.porte;
  }

  getNomeDono(): string {
    return this.nomeDono;
  }

  getTelefoneDono(): string {
    return this.telefoneDono;
  }

  getCpfDono(): string {
    return this.cpfDono;
  }

  getCategoriaVacina(): string {
    if (this.especie === "cachorro") {
      if (this.porte === "pequeno") return "V8-pequeno";
      if (this.porte === "medio") return "V8-medio";
      return "V10-grande";
    } else if (this.especie === "gato") {
      return "V4-felino";
    }

    return "";
  }

  imprimirFicha(): void {
    console.log("========== FICHA DO ANIMAL ==========");
    console.log("Nome   : " + this.nome);
    console.log("EspÃ©cie: " + this.especie);
    console.log("Porte  : " + this.porte);
    console.log("Peso   : " + this.peso + " kg");
    console.log("Idade  : " + this.idade + " anos");
    console.log(
      "Dono   : " +
        this.nomeDono +
        " | CPF: " +
        this.cpfDono +
        " | Tel: " +
        this.telefoneDono
    );
    console.log("=====================================");
  }
}
