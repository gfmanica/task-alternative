import { use } from 'react';
import { getAtividade } from '../actions/atividade';
import { TAtividade } from '../types';
import { AtividadeCard } from './atividade-card';

export function AtividadeList() {
  const atividades: TAtividade[] = use(getAtividade());

  return atividades?.map((atividade) => (
    <AtividadeCard atividade={atividade} />
  ));
}
