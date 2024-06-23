import { z } from 'zod';

export type TAtividade = {
  _id: string;
  nome: string;
  status: string;
  responsavel: string;
  artefatos: string;
  dataCriacao: string;
};

export type TAtividadeForm = z.infer<typeof atividadeSchema>;

export const atividadeSchema = z.object({
  _id: z.string().optional(),
  nome: z.string().min(1, { message: 'Nome é obrigatório' }),
  responsavel: z.string().min(1, { message: 'Responsável é obrigatório' }),
  status: z.string().min(1, { message: 'Status é obrigatório' }),
  artefatos: z.string().min(1, { message: 'Artefatos é obrigatório' }),
});
