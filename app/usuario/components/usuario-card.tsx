import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';
import { CardItem } from '@/components/card/card-item';
import { TUsuario } from '../types';

export function UsuarioCard({ usuario }: { usuario: TUsuario }) {
  return (
    <Card>
      <CardContent className="flex items-center gap-8 p-3">
        <CardItem label="Nome" value={usuario.nome} />

        <CardItem label="Responsável" value={usuario.login} />

        <CardItem label="Status" value={usuario.tipo} />

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
