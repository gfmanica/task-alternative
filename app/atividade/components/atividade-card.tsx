import { Card, CardContent } from '@/components/ui/card';
import { TAtividade } from '../types';
import { AtividadeCardItem } from './atividade-card-item';
import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';

export function AtividadeCard({ atividade }: { atividade: TAtividade }) {
  return (
    <Card>
      <CardContent className="flex items-center gap-8 p-3">
        <AtividadeCardItem label="Nome" value={atividade.nome} />

        <AtividadeCardItem label="Responsável" value={atividade.responsavel} />

        <AtividadeCardItem label="Status" value={atividade.status} />

        <AtividadeCardItem
          label="Data de criação"
          value={new Date(atividade.dataCriacao).toLocaleString()}
        />

        <div className="ml-auto flex gap-1">
          <Button variant="ghost" size="icon">
            <Pencil size={18} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-red-500 hover:text-red-500"
          >
            <Trash size={18} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
