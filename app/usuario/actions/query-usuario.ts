'use server';

import { checkAuthenticity } from '@/utils/response';
import { cookies } from 'next/headers';

// Retorna um usuário ou todos usuários, de acordo com o id informado
export async function queryUsuario(id?: string) {
  const response = await fetch(
    `http://localhost:3001/usuario${id ? `/${id}` : ''}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies().get('token')?.value}`,
      },
    },
  );

  checkAuthenticity(response);

  return await response.json();
}
