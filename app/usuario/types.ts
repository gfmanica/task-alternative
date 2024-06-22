import { z } from 'zod';

export type TUsuario = {
  _id: string;
  nome: string;
  tipo: string;
  senha: string;
  login: string;
};

export const usuarioSchema = z.object({
  _id: z.string().optional(),
  nome: z.string().min(1, { message: 'Nome é obrigatório' }),
  tipo: z.string().min(1, { message: 'Tipo é obrigatório' }),
  login: z.string().min(1, { message: 'Login é obrigatório' }),
});
