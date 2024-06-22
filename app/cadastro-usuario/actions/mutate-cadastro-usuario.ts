'use server';

import { redirect } from 'next/navigation';
import { RegistroSchema } from '../types';

const validateFormData = (formData: FormData) =>
  RegistroSchema.safeParse({
    nome: formData.get('nome'),
    login: formData.get('login'),
    senha: formData.get('senha'),
    confirmacaoSenha: formData.get('confirmacaoSenha'),
  });

type TMutateCadastroUsuarioReturn = {
  errors: {
    message?: string;
    nome?: string[];
    login?: string[];
    senha?: string[];
    confirmacaoSenha?: string[];
  };
};

export async function mutateCadastroUsuario(
  previousState: any,
  formData: FormData,
): Promise<TMutateCadastroUsuarioReturn> {
  const validatedFormData = validateFormData(formData);

  if (!validatedFormData.success) {
    return {
      errors: validatedFormData.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await fetch('http://localhost:3001/usuario', {
      method: 'POST',
      body: JSON.stringify(validatedFormData.data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const data = await response.json();

      return {
        errors: {
          message: data.error,
        },
      };
    }
  } catch (error) {
    return {
      errors: {
        message: 'Erro ao criar usuário',
      },
    };
  }

  redirect('/');
}
