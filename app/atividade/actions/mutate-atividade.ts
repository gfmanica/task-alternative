'use server';

import { checkAuthenticity } from '@/utils/response';
import { cookies } from 'next/headers';
import { TAtividadeForm, atividadeSchema } from '../types';
import { redirect } from 'next/navigation';

type TAtividadeReturn = {
  errors: {
    message?: string;
    nome?: string[];
    responsavel?: string[];
  };
};

// Realiza o post de uma atividade
export async function mutateAtividade(
  previousState: any,
  formData: TAtividadeForm,
): Promise<TAtividadeReturn> {
  try {
    const response = await fetch('http://localhost:3001/atividade', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies().get('token')?.value}`,
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
        message: 'Erro ao criar atividade',
      },
    };
  }

  redirect('/atividade');
}
