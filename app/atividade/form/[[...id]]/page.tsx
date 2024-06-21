
import { Suspense } from 'react';
import { AtividadeForm } from '../../components/atividade-form';
import { Loading } from '@/components/loading';

export default function AtividadeFormPage({
  params,
}: {
  params: { id: string[] };
}) {
  const id = params?.id?.at(0);

  return (
    <>
      <h1 className="text-2xl font-semibold">
        {id ? 'Editar' : 'Criar'} atividade
      </h1>

      <Suspense fallback={<Loading />}>
        <AtividadeForm />
      </Suspense>
    </>
  );
}
