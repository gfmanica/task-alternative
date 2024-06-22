import { Suspense, use } from 'react';
import { AtividadeForm } from '../../components/atividade-form';
import { Loading } from '@/components/loading';
import { queryAtividade } from '../../actions/query-atividade';
import { TUsuario } from '@/app/usuario/types';
import { TAtividade } from '../../types';

export default function AtividadeFormPage({
  params,
}: {
  params: { id: string[] };
}) {
  const id = params?.id?.at(0);
  const atividade: TAtividade = id ? use(queryAtividade(id)) : {};

  return (
    <>
      <h1 className="text-2xl font-semibold">
        {id ? 'Editar' : 'Criar'} atividade
      </h1>

      <AtividadeForm atividade={atividade} />
    </>
  );
}
