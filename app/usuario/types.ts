// import { z } from 'zod';

export type TUsuario = {
  _id: string;
  nome: string;
  tipo: string;
  login: string;
};

// export const AtividadeSchema = z.object({
//   nome: z.string().min(1, { message: 'Nome é obrigatório' }),
//   // status: z.string().min(1, { message: 'Status é obrigatório' }),
//   // responsavel: z.string().min(1, { message: 'Responsável é obrigatório' }),
//   // artefatos: z.array(z.string(), { message: 'Artefatos é obrigatório' }),
// });
