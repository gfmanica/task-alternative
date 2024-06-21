import { z } from 'zod';

export type TAtividade = {
  _id: string;
  nome: string;
  status: string;
  responsavel: string;
  artefatos: string[];
  dataCriacao: string;
};

export const AtividadeSchema = z.object({
  nome: z.string().min(1, { message: 'Nome é obrigatório' }),
  // status: z.string().min(1, { message: 'Status é obrigatório' }),
  // responsavel: z.string().min(1, { message: 'Responsável é obrigatório' }),
  // artefatos: z.array(z.string(), { message: 'Artefatos é obrigatório' }),
});
