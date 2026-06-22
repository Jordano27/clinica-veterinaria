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
