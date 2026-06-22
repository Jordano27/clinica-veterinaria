import { Animal } from "./Animal";
import { FormaPagamento, StatusConsulta } from "./Tipos";

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
    this.status = StatusConsulta.Agendada;
    this.pago = false;
  }

  registrarPagamento(forma: FormaPagamento): void {
    this.formaPagamento = forma;
    this.pago = true;
  }

  cancelar(motivo: string): void {
    this.status = StatusConsulta.Cancelada;
    this.motivoCancelamento = motivo;
  }

  imprimirResumo(): string {
    return (
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
