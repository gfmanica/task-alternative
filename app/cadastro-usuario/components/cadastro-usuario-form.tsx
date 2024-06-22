'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useActionState } from 'react';
import { Loader, Save } from 'lucide-react';
import { Error } from '@/components/form/error';
import { mutateCadastroUsuario } from '../actions/mutate-cadastro-usuario';
import Link from 'next/link';

export function CadastroUsuarioForm() {
  const [state, action, isPending] = useActionState(
    mutateCadastroUsuario,
    null,
  );

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="nome">Nome</Label>

        <Input name="nome" disabled={isPending} />

        <Error value={state?.errors?.nome} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="login">Login</Label>

        <Input name="login" disabled={isPending} />

        <Error value={state?.errors?.login} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="senha">Senha</Label>

        <Input name="senha" type="password" disabled={isPending} />

        <Error value={state?.errors?.senha} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="confirmacaoSenha">Confirmação senha</Label>

        <Input name="confirmacaoSenha" type="password" disabled={isPending} />

        <Error value={state?.errors?.confirmacaoSenha} />

        <Error value={state?.errors?.message} />
      </div>

      <p className="text-sm">
        Já possui uma conta?
        <Link href="/">
          <span> Realizar o login</span>
        </Link>
      </p>

      <Button disabled={isPending}>
        {isPending && <Loader size={18} className="mr-2 animate-spin" />}
        Cadastrar
      </Button>
    </form>
  );
}
