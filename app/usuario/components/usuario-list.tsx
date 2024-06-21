import { use } from 'react';
import { getUsuario } from '../actions/query-usuario';
import { TUsuario } from '../types';
import { UsuarioCard } from './usuario-card';

export function UsuarioList() {
  const usuarios: TUsuario[] = use(getUsuario());

  return usuarios?.map((usuario) => <UsuarioCard usuario={usuario} />);
}
