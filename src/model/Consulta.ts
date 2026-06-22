import { Animal } from "./Animal";

export class Consulta {
  id: number;
  animal: Animal;
  veterinario: string;
  dataHora: Date;
  status: string;
  motivoCancelamento?: string;
  valorConsulta: number;
  formaPagamento?: string;
  pago: boolean;

  constructor(
    id: number,
    animal: Animal,
    veterinario: string,
    dataHora: Date,
    valorConsulta: number
  ) {
    if (animal == null) {
      throw new Error("Animal não pode ser nulo");
    }

    if (veterinario == null || veterinario.trim().length === 0) {
      throw new Error("Veterinário não pode ser vazio");
    }

    if (valorConsulta < 0) {
      throw new Error("Valor da consulta não pode ser negativo");
    }

    this.id = id;
    this.animal = animal;
    this.veterinario = veterinario;
    this.dataHora = dataHora;
    this.valorConsulta = valorConsulta;
    this.status = "agendada";
    this.pago = false;
  }

  registrarPagamento(forma: string): void {
    if (
      forma === "pix" ||
      forma === "cartao" ||
      forma === "dinheiro"
    ) {
      this.formaPagamento = forma;
      this.pago = true;
    } else {
      throw new Error("Forma de pagamento inválida: " + forma);
    }
  }

  cancelar(motivo: string): void {
    this.status = "cancelada";
    this.motivoCancelamento = motivo;
  }

  imprimirResumo(): void {
    console.log(
      "[Consulta #" +
        this.id +
        "] " +
        this.animal.nome +
        " | Vet: " +
        this.veterinario +
        " | Status: " +
        this.status +
        " | Valor: R$" +
        this.valorConsulta +
        " | Pago: " +
        (this.pago ? "Sim" : "Não")
    );
  }
}
