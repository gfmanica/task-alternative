'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useActionState } from 'react';
import { Loader } from 'lucide-react';
import { login } from '../actions/login';
import { Error } from '@/components/form/error';
import Link from 'next/link';

export function LoginForm() {
  const [state, action, isPending] = useActionState(login, null);

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="login">Login</Label>

        <Input name="login" />

        <Error value={state?.errors?.login} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="senha">Senha</Label>

        <Input name="senha" type="password" />

        <Error value={state?.errors?.senha} />

        <Error value={state?.errors?.message} />
      </div>

      <p className="text-sm">
        Não possui uma conta?
        <Link href="/cadastro-usuario">
          <span> Cadastrar-se</span>
        </Link>
      </p>

      <Button disabled={isPending}>
        {isPending && <Loader size={18} className="mr-2 animate-spin" />}
        Entrar
      </Button>
    </form>
  );
}
