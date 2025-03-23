export interface Cliente {
  id: number;
  nome: string;
  telefone: string;
  email: string;
}

export interface Barbeiro {
  id: number;
  nome: string;
  especialidade: string;
}

export interface Agendamento {
  id: number;
  clienteId: number;
  barbeiroId: number;
  dataHora: string; // ISO 8601 format
}
