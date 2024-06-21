'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useActionState } from 'react';
import { postAtividade } from '../actions/atividade';
import { Button } from '@/components/ui/button';
import { Loader, Save } from 'lucide-react';
import { Error } from '@/components/form/error';

export function AtividadeForm() {
  const [state, action, isPending] = useActionState(postAtividade, null);

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="nome">Nome da atividade</Label>

        <Input name="nome" disabled={isPending} />

        <Error value={state?.errors?.nome} />
      </div>

      <div className="flex justify-end">
        <Button size="sm" disabled={isPending}>
          {isPending && <Loader size={18} className="mr-2 animate-spin" />}
          {!isPending && <Save size={18} className="mr-2" />}
          Salvar
        </Button>
      </div>
    </form>
  );
}
