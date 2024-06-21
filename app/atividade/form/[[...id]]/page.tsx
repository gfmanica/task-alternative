import { Loader } from 'lucide-react';
import { Suspense } from 'react';
import { AtividadeForm } from '../../components/atividade-form';

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

      <Suspense fallback={<Loader size={16} className="mr-2 animate-spin" />}>
        <AtividadeForm />
      </Suspense>
    </>
  );
}
