import { use } from 'react';
import { TUsuario } from '@/app/usuario/types';
import { queryUsuario } from '../../actions/query-usuario';
import { UsuarioForm } from '../../components/usuario-form';

export default function UsuarioFormPage({
  params,
}: {
  params: { id: string[] };
}) {
  const id = params?.id?.at(0);
  const usuario: TUsuario = id ? use(queryUsuario(id)) : {};

  return (
    <>
      <h1 className="text-2xl font-semibold">
        {id ? 'Editar' : 'Criar'} usuário
      </h1>

      <UsuarioForm usuario={usuario} />
    </>
  );
}
