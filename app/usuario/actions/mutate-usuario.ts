'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { TUsuario } from '../types';

type TAtividadeReturn = {
  errors: {
    message?: string;
    nome?: string[];
    responsavel?: string[];
  };
};

// Realiza o post de uma atividade
export async function mutateUsuario(
  previousState: any,
  formData: TUsuario,
): Promise<TAtividadeReturn> {
  const url = `http://localhost:3001/usuario${formData._id ? `/${formData._id}` : ''}`;

  try {
    const response = await fetch(url, {
      method: formData._id ? 'PUT' : 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies().get('token')?.value}`,
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
  } catch (error) {
    return {
      errors: {
        message: 'Erro ao criar atividade',
      },
    };
  }

  redirect('/usuario');
}
