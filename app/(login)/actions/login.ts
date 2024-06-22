'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { z } from 'zod';

type TLoginError = {
  message?: string;
  login?: string[];
  senha?: string[];
};

type TLoginResponse = {
  error?: string;
  token?: string;
};

const LoginSchema = z.object({
  login: z.string().min(1, { message: 'Login é obrigatório' }),
  senha: z.string().min(1, { message: 'Senha é obrigatória' }),
});

const parseFormData = (formData: FormData) =>
  LoginSchema.safeParse({
    login: formData.get('login'),
    senha: formData.get('senha'),
  });

export async function login(
  previousState: any,
  formData: FormData,
): Promise<{
  errors?: TLoginError;
}> {
  const validationResult = parseFormData(formData);

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  try {
    const { login, senha } = validationResult.data;

    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify({ login, senha }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        errors: {
          message: data.error,
        },
      };
    }

    cookies().set('token', data.token);
  } catch (e) {
    return {
      errors: {
        message: 'Usuário ou senha inválidos',
      },
    };
  }

  redirect('/atividade');
}
