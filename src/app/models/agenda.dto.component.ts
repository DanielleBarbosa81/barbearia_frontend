export class AgendaDto {
  agendaId?: number;           // ID do agendamento
  clienteNome: string;         // Nome do cliente
  clienteId?: number;          // ID do cliente (caso seja necessário)
  barbeiroNome: string;        // Nome do barbeiro
  barbeiroId?: number;         // ID do barbeiro (caso seja necessário)
  dataHora: string;            // Data e hora do agendamento

  constructor(clienteNome: string, barbeiroNome: string, dataHora: string) {
    this.clienteNome = clienteNome;
    this.barbeiroNome = barbeiroNome;
    this.dataHora = dataHora;
  }
}
