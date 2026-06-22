import { Animal } from "./Animal";
import { FormaPagamento, StatusConsulta } from "./Tipos";

export class Consulta {
  id: number;
  animal: Animal;
  veterinario: string;
  dataHora: Date;
  status: StatusConsulta;
  motivoCancelamento?: string;
  valorConsulta: number;
  formaPagamento?: FormaPagamento;
  pago: boolean;

  constructor(
    id: number,
    animal: Animal,
    veterinario: string,
    dataHora: Date,
    valorConsulta: number
  ) {
    try {
      if (animal === null) throw new Error("animal nulo");
      if (valorConsulta < 0) throw new Error("valor negativo");
      if (veterinario === null || veterinario.length === 0)
        throw new Error("sem veterinário");
    } catch (e) {
      console.log("Aviso: " + (e as Error).message);
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
    if (
      forma === FormaPagamento.Pix ||
      forma === FormaPagamento.Cartao ||
      forma === FormaPagamento.Dinheiro
    ) {
      this.formaPagamento = forma;
      this.pago = true;
    } else {
      throw new Error("Forma de pagamento inválida: " + forma);
    }
  }

  cancelar(motivo: string): void {
    this.status = StatusConsulta.Cancelada;
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
