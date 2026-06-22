import { Animal } from "./Animal";
import { EspecieAnimal, PorteAnimal } from "./Tipos";

export class Gato extends Animal {
  ehCastrado: boolean;
  pelagem: string;

  constructor(
    nome: string,
    idade: number,
    peso: number,
    ehCastrado: boolean,
    pelagem: string,
    nomeDono: string,
    telefoneDono: string,
    cpfDono: string
  ) {
    super(
      nome,
      idade,
      peso,
      EspecieAnimal.Gato,
      PorteAnimal.Pequeno,
      nomeDono,
      telefoneDono,
      cpfDono
    );
    this.ehCastrado = ehCastrado;
    this.pelagem = pelagem;
  }
}
