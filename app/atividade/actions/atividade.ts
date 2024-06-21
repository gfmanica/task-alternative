'use server';

import { checkAuthenticity } from '@/utils/response';
import { cookies } from 'next/headers';

// Retorna uma atividade ou todas as atividades, de acordo com o id informado
export async function getAtividade(id?: number) {
  const response = await fetch(
    `http://localhost:3001/atividade${id ? `/${id}` : ''}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies().get('token')?.value}`,
      },
    },
  );
  const data = await response.json();

  checkAuthenticity(response);

  return data;
}
