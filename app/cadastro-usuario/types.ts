import { z } from 'zod';

export type TRegistro = {
  nome: string;
  login: string;
  senha: string;
};

export const RegistroSchema = z
  .object({
    nome: z.string().min(1, { message: 'Nome é obrigatório' }),
    login: z.string().min(1, { message: 'Login é obrigatório' }),
    senha: z.string().min(1, { message: 'Senha é obrigatório' }),
    confirmacaoSenha: z
      .string()
      .min(1, { message: 'Confirmação de senha é obrigatório' }),
  })
  .refine((data) => data.senha === data.confirmacaoSenha || !data.senha || !data.confirmacaoSenha, {
    path: ['confirmacaoSenha'],
    message: 'Senhas não conferem',
  });
