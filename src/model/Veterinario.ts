import { Pessoa } from "./Pessoa";
import { Consulta } from "./Consulta";
import { EspecialidadeVeterinario, StatusConsulta, TipoConsulta } from "./Tipos";

export class Veterinario extends Pessoa {
  crmv: string;
  especialidade: EspecialidadeVeterinario;
  historicoConsultas: Consulta[] = [];
  disponivel: boolean = true;

  constructor(
    nome: string,
    cpf: string,
    telefone: string,
    email: string,
    crmv: string,
    especialidade: EspecialidadeVeterinario
  ) {
    super(nome, cpf, telefone, email);
    this.crmv = crmv;
    this.especialidade = especialidade;
  }

  calcularValorConsulta(tipoConsulta: TipoConsulta): number {
    if (this.especialidade === EspecialidadeVeterinario.Clinico) {
      if (tipoConsulta === TipoConsulta.Rotina) return 150.0;
      if (tipoConsulta === TipoConsulta.Emergencia) return 300.0;
    } else if (this.especialidade === EspecialidadeVeterinario.Cirurgiao) {
      if (tipoConsulta === TipoConsulta.Rotina) return 250.0;
      if (tipoConsulta === TipoConsulta.Emergencia) return 500.0;
    }

    return 0.0;
  }

  finalizarConsulta(c: Consulta): void {
    c.status = StatusConsulta.Finalizada;
    this.historicoConsultas.push(c);
    this.disponivel = true;
  }
}
