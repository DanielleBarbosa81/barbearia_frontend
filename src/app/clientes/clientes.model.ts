export interface ClienteModelForm {
   id? : number;
    nome: string;
    telefone: string;
    email: string;
}

export interface ClienteModelTable{
  id: number;
  nome: string;
  telefone: string;
  email: string;
  acoes: string;
}
