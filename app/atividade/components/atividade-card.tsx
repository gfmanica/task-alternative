import { Card, CardContent } from '@/components/ui/card';
import { TAtividade } from '../types';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { CardItem } from '@/components/card/card-item';
import { CardDeleteButton } from '@/components/card/card-delete-button';
import { deleteAtividade } from '../actions/delete-atividade';
import Link from 'next/link';

export function AtividadeCard({ atividade }: { atividade: TAtividade }) {
  return (
    <Card>
      <CardContent className="flex items-center gap-8 p-3">
        <CardItem label="Nome" value={atividade.nome} />

        <CardItem label="Responsável" value={atividade.responsavel} />

        <CardItem label="Status" value={atividade.status} />

        <CardItem
          label="Data de criação"
          value={new Date(atividade.dataCriacao).toLocaleString()}
        />

        <div className="ml-auto flex gap-1">
          <Link href={`/atividade/form/${atividade._id}`}>
            <Button variant="ghost" size="icon">
              <Pencil size={18} />
            </Button>
          </Link>

          <CardDeleteButton id={atividade._id} deleteAction={deleteAtividade} />
        </div>
      </CardContent>
    </Card>
  );
}
