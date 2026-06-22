import { EspecieAnimal, PorteAnimal } from "./Tipos";

export class Animal {
  nome: string;
  idade: number;
  peso: number;
  especie: EspecieAnimal;
  porte: PorteAnimal;
  nomeDono: string;
  telefoneDono: string;
  cpfDono: string;

  constructor(
    nome: string,
    idade: number,
    peso: number,
    especie: EspecieAnimal,
    porte: PorteAnimal,
    nomeDono: string,
    telefoneDono: string,
    cpfDono: string
  ) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.especie = especie;
    this.porte = porte;
    this.nomeDono = nomeDono;
    this.telefoneDono = telefoneDono;
    this.cpfDono = cpfDono;
  }

  getCategoriaVacina(): string {
    if (this.especie === EspecieAnimal.Cachorro) {
      if (this.porte === PorteAnimal.Pequeno) return "V8-pequeno";
      if (this.porte === PorteAnimal.Medio) return "V8-medio";
      return "V10-grande";
    } else if (this.especie === EspecieAnimal.Gato) {
      return "V4-felino";
    }

    return "";
  }

  imprimirFicha(): string {
    return [
      "========== FICHA DO ANIMAL ==========",
      "Nome   : " + this.nome,
      "Espécie: " + this.especie,
      "Porte  : " + this.porte,
      "Peso   : " + this.peso + " kg",
      "Idade  : " + this.idade + " anos",
      "Dono   : " +
        this.nomeDono +
        " | CPF: " +
        this.cpfDono +
        " | Tel: " +
        this.telefoneDono,
      "=====================================",
    ].join("\n");
  }
}
