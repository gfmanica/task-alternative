'use server';

import { cookies } from 'next/headers';

// Retorna um usuário ou todos usuários, de acordo com o id informado
export async function queryUsuario(id?: string) {
  try {
    const response = await fetch(
      `http://localhost:3001/usuario${id ? `/${id}` : ''}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies().get('token')?.value}`,
        },
      },
    );

    const data = await response.json();

    return data;
  } catch {
    return [];
  }
}
