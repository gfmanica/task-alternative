'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from '@/actions/actions';
import { Button } from '@/components/ui/button';
import { useActionState } from 'react';
import { Loader } from 'lucide-react';

export function LoginForm() {
  const [state, action, isPending] = useActionState(login, null);

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Nome de usuário</Label>
        <Input id="name" />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="framework">Senha</Label>
        <Input id="name" type="password" />
      </div>

      <Button disabled={isPending}>
        {isPending && <Loader size={16} className="mr-2 animate-spin" />}
        Entrar
      </Button>
    </form>
  );
}
