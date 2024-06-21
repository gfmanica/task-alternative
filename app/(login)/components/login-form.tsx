'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useActionState } from 'react';
import { Loader } from 'lucide-react';
import { login } from '../actions/login';

export function LoginForm() {
  const [state, action, isPending] = useActionState(login, null);

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="login">Nome de usuário</Label>

        <Input name="login" />

        {state?.errors?.login && (
          <p className="text-xs text-red-500">{state.errors.login}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="senha">Senha</Label>

        <Input name="senha" type="password" />

        {state?.errors?.senha && (
          <p className="text-xs text-red-500">{state.errors.senha}</p>
        )}

        {state?.errors?.message && (
          <p className="text-xs text-red-500">{state.errors.message}</p>
        )}
      </div>

      <Button disabled={isPending}>
        {isPending && <Loader size={18} className="mr-2 animate-spin" />}
        Entrar
      </Button>
    </form>
  );
}
