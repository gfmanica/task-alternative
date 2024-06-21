'use server';

import { checkAuthenticity } from '@/utils/response';
import { cookies } from 'next/headers';
import { AtividadeSchema } from '../types';
import { redirect } from 'next/navigation';

const validateFormData = (formData: FormData) =>
  AtividadeSchema.safeParse({ nome: formData.get('nome') });

// Realiza o post de uma atividade
export async function mutateAtividade(previousState: any, formData: FormData) {
  const validatedFormData = validateFormData(formData);

  if (!validatedFormData.success) {
    return {
      errors: validatedFormData.error.flatten().fieldErrors,
    };
  }

  let data;

  try {
    const { nome } = validatedFormData.data;

    const response = await fetch('http://localhost:3001/atividade', {
      method: 'POST',
      body: JSON.stringify({ nome }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies().get('token')?.value}`,
      },
    });

    checkAuthenticity(response);

    data = await response.json();

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

  redirect('/atividade');
}
