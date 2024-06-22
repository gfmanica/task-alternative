import { use } from 'react';
import { queryUsuario } from '../actions/query-usuario';
import { TUsuario } from '../types';
import { UsuarioCard } from './usuario-card';

export function UsuarioList() {
  const usuarios: TUsuario[] = use(queryUsuario());

  return usuarios?.map((usuario) => <UsuarioCard usuario={usuario} />);
}
