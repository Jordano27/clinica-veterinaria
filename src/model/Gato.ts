import { Animal } from "./Animal";

export class Gato extends Animal {
  constructor(
    nome: string,
    idade: number,
    peso: number,
    private readonly ehCastrado: boolean,
    private readonly pelagem: string,
    nomeDono: string,
    telefoneDono: string,
    cpfDono: string
  ) {
    super(
      nome,
      idade,
      peso,
      "gato",
      "pequeno",
      nomeDono,
      telefoneDono,
      cpfDono
    );
  }

  isCastrado(): boolean {
    return this.ehCastrado;
  }

  getPelagem(): string {
    return this.pelagem;
  }
}
