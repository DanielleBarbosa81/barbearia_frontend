export interface ClienteDto {
  clienteId?: number; // O ID pode ser opcional ao cadastrar um novo cliente
  clienteNome: string;
  clienteEmail: string;
  clienteTelefone: string;
}
