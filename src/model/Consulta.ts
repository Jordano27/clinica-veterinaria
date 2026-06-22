import { Animal } from "./Animal";

export class Consulta {
  private status: string;
  private motivoCancelamento?: string;
  private formaPagamento?: string;
  private pago: boolean;

  constructor(
    private readonly id: number,
    private readonly animal: Animal,
    private readonly veterinario: string,
    private readonly dataHora: Date,
    private readonly valorConsulta: number
  ) {
    try {
      if (animal === null) throw new Error("animal nulo");
      if (valorConsulta < 0) throw new Error("valor negativo");
      if (veterinario === null || veterinario.length === 0)
        throw new Error("sem veterinário");
    } catch (e) {
      console.log("Aviso: " + (e as Error).message);
    }

    this.status = "agendada";
    this.pago = false;
  }

  getId(): number {
    return this.id;
  }

  getAnimal(): Animal {
    return this.animal;
  }

  getVeterinario(): string {
    return this.veterinario;
  }

  getDataHora(): Date {
    return this.dataHora;
  }

  getStatus(): string {
    return this.status;
  }

  getMotivoCancelamento(): string | undefined {
    return this.motivoCancelamento;
  }

  getValorConsulta(): number {
    return this.valorConsulta;
  }

  getFormaPagamento(): string | undefined {
    return this.formaPagamento;
  }

  isPago(): boolean {
    return this.pago;
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

  finalizar(): void {
    this.status = "finalizada";
  }

  imprimirResumo(): void {
    console.log(
      "[Consulta #" +
        this.id +
        "] " +
        this.animal.getNome() +
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
