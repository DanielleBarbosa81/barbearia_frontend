export interface Agendamento {
  id?: number;
  dataHora: string;
  cliente: {
    clienteId: number;
    clienteNome?: string;
  };
  barbeiro: {
    barbeiroId: number;
    barbeiroNome?: string;
  };
}
