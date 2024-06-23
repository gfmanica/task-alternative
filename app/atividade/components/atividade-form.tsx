'use client';

import { Input } from '@/components/ui/input';
import { useActionState } from 'react';
import { mutateAtividade } from '../actions/mutate-atividade';
import { Button } from '@/components/ui/button';
import { Loader, Save } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TAtividade, TAtividadeForm, atividadeSchema } from '../types';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Error } from '@/components/form/error';

export function AtividadeForm({ atividade }: { atividade: TAtividade }) {
  const [state, action, isPending] = useActionState(mutateAtividade, null);

  const form = useForm<TAtividadeForm>({
    resolver: zodResolver(atividadeSchema),
    defaultValues: atividade,
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
                <FormLabel>Nome da atividade</FormLabel>

                <FormControl>
                  <Input {...field} />
                </FormControl>

                <Error value={form.formState.errors?.nome?.message} />
              </FormItem>
            )}
          />

          <FormField
            name="responsavel"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Responsável</FormLabel>

                <FormControl>
                  <Input {...field} />
                </FormControl>

                <Error value={form.formState.errors?.responsavel?.message} />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4">
          <FormField
            name="status"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Status</FormLabel>

                <FormControl>
                  <Input {...field} />
                </FormControl>

                <Error value={form.formState.errors?.status?.message} />
              </FormItem>
            )}
          />

          <FormField
            name="artefatos"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Artefato</FormLabel>

                <FormControl>
                  <Input {...field} />
                </FormControl>

                <Error value={form.formState.errors?.artefatos?.message} />
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
