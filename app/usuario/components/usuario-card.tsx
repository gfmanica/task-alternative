import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { CardItem } from '@/components/card/card-item';
import { TUsuario } from '../types';
import { CardDeleteButton } from '@/components/card/card-delete-button';
import { deleteUsuario } from '../actions/delete-usuario';
import Link from 'next/link';

export function UsuarioCard({ usuario }: { usuario: TUsuario }) {
  return (
    <Card>
      <CardContent className="flex items-center gap-8 p-3">
        <CardItem label="Nome" value={usuario.nome} />

        <CardItem label="Login" value={usuario.login} />

        <CardItem label="Status" value={usuario.tipo} />

        <div className="ml-auto flex gap-1">
          <Link href={`/usuario/form/${usuario._id}`}>
            <Button variant="ghost" size="icon">
              <Pencil size={18} />
            </Button>
          </Link>

          <CardDeleteButton id={usuario._id} deleteAction={deleteUsuario} />
        </div>
      </CardContent>
    </Card>
  );
}
