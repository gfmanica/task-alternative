import { use } from 'react';
import { AtividadeForm } from '../../components/atividade-form';
import { queryAtividade } from '../../actions/query-atividade';
import { TAtividade } from '../../types';

export default function AtividadeFormPage({
  params,
}: {
  params: { id: string[] };
}) {
  const id = params?.id?.at(0);
  const atividade: TAtividade = id ? use(queryAtividade(id)) : {};

  if (atividade?.artefatos) {
    atividade.artefatos = atividade.artefatos[0];
  }

  return (
    <>
      <h1 className="text-2xl font-semibold">
        {id ? 'Editar' : 'Criar'} atividade
      </h1>

      <AtividadeForm atividade={atividade} />
    </>
  );
}
