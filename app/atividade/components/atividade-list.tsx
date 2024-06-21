import { use } from 'react';
import { queryAtividade } from '../actions/query-atividade';
import { TAtividade } from '../types';
import { AtividadeCard } from './atividade-card';

export function AtividadeList() {
  const atividades: TAtividade[] = use(queryAtividade());

  return atividades?.map((atividade) => (
    <AtividadeCard atividade={atividade} />
  ));
}
