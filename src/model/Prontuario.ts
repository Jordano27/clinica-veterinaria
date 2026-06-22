import { Animal } from "./Animal";

interface Registravel {
  registrar(): void;
  atualizar(): void;
  deletar(): void;
  imprimir(): void;
  exportarCSV(): void;
  enviarEmail(): void;
}

export class Prontuario implements Registravel {
  private readonly dataCriacao: Date;
  private readonly peso: number;
  private observacoes: string[] = [];
  private diagnostico?: string;
  private prescricao?: string;

  constructor(private readonly id: number, private readonly animal: Animal) {
    this.dataCriacao = new Date();
    this.peso = animal.getPeso();
  }

  getId(): number {
    return this.id;
  }

  getAnimal(): Animal {
    return this.animal;
  }

  getDataCriacao(): Date {
    return this.dataCriacao;
  }

  getPeso(): number {
    return this.peso;
  }

  getObservacoes(): ReadonlyArray<string> {
    return [...this.observacoes];
  }

  getDiagnostico(): string | undefined {
    return this.diagnostico;
  }

  getPrescricao(): string | undefined {
    return this.prescricao;
  }

  definirDiagnostico(diagnostico: string): void {
    this.diagnostico = diagnostico;
  }

  definirPrescricao(prescricao: string): void {
    this.prescricao = prescricao;
  }

  registrar(): void {
    console.log("Prontuário #" + this.id + " registrado.");
  }

  atualizar(): void {
    console.log("Prontuário atualizado.");
  }

  deletar(): void {}

  imprimir(): void {
    console.log(
      "Prontuário #" +
        this.id +
        " | Animal: " +
        this.animal.getNome() +
        " | Diagnóstico: " +
        this.diagnostico
    );
  }

  exportarCSV(): void {}

  enviarEmail(): void {
    console.log(
      "Enviando prontuário por email para " + this.animal.getNomeDono()
    );
  }

  adicionarObservacao(obs: string): void {
    this.observacoes.push(obs);
  }
}
