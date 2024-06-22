'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

// Exclui a atividade com o id informado
export async function deleteAtividade(prevValue: string, id: string) {
  let data;

  try {
    const response = await fetch(`http://localhost:3001/atividade/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies().get('token')?.value}`,
      },
    });

    data = response.json();
  } catch {
    return [];
  }

  revalidatePath('/atividade');

  return data;
}
