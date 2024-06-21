'use server';

export async function login(previousState: any, formData: FormData) {
  const content = formData.values();

  console.log(content);
}
