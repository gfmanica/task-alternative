'use client';

import { Input } from '@/components/ui/input';
import { useActionState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Loader, Save } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TUsuario, usuarioSchema } from '../types';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { mutateUsuario } from '../actions/mutate-usuario';
import { toast } from 'sonner';
import { Error } from '@/components/form/error';

export function UsuarioForm({ usuario }: { usuario: TUsuario }) {
  const [state, action, isPending] = useActionState(mutateUsuario, null);

  useEffect(() => {
    if (state?.errors) {
      toast.error(state?.errors?.message);
    }
  }, [state?.errors]);

  const form = useForm<TUsuario>({
    resolver: zodResolver(usuarioSchema),
    defaultValues: usuario,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(action)}
        className="flex flex-col gap-4"
      >
        <div className="flex gap-4">
          <FormField
            name="nome"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Nome</FormLabel>

                <FormControl>
                  <Input {...field} />
                </FormControl>

                <Error value={form.formState.errors?.nome?.message} />
              </FormItem>
            )}
          />

          <FormField
            name="login"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Login</FormLabel>

                <FormControl>
                  <Input {...field} />
                </FormControl>

                <Error value={form.formState.errors?.login?.message} />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4">
          <FormField
            name="tipo"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Tipo de usuário</FormLabel>

                <FormControl>
                  <Input {...field} />
                </FormControl>

                <Error value={form.formState.errors?.tipo?.message} />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end">
          <Button size="sm" disabled={isPending}>
            {isPending && <Loader size={18} className="mr-2 animate-spin" />}
            {!isPending && <Save size={18} className="mr-2" />}
            Salvar
          </Button>
        </div>
      </form>
    </Form>
  );
}
