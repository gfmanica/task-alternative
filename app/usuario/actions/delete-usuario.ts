'use server';

import { checkAuthenticity } from '@/utils/response';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { toast } from 'sonner';

// Exclui o usuário com o id informado
export async function deleteUsuario(prevValue: string, id: string) {
  let data;

  try {
    const response = await fetch(`http://localhost:3001/usuario/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies().get('token')?.value}`,
      },
    });

    data = await response.json();
  } catch {
    return [];
  }

  revalidatePath('/usuario');

  return data;
}
