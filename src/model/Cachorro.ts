import { Animal } from "./Animal";

export class Cachorro extends Animal {
  constructor(
    nome: string,
    idade: number,
    peso: number,
    porte: string,
    private readonly raca: string,
    private readonly vacinado: boolean,
    nomeDono: string,
    telefoneDono: string,
    cpfDono: string
  ) {
    super(
      nome,
      idade,
      peso,
      "cachorro",
      porte,
      nomeDono,
      telefoneDono,
      cpfDono
    );
  }

  getRaca(): string {
    return this.raca;
  }

  isVacinado(): boolean {
    return this.vacinado;
  }

  override getCategoriaVacina(): string {
    return super.getCategoriaVacina() + (this.vacinado ? "-reforco" : "-primaria");
  }

  override imprimirFicha(): void {
    super.imprimirFicha();
    console.log("Raça   : " + this.raca);
    console.log("Vacina : " + (this.vacinado ? "Em dia" : "Pendente"));
  }
}
