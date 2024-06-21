import { Suspense } from 'react';
import { Loader, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UsuarioList } from './components/usuario-list';

export default function UsuarioPage() {
  return (
    <>
      <div className="flex gap-4">
        <h1 className="text-2xl font-semibold">Usuários</h1>

        <Link href="/usuario/form">
          <Button size="sm">
            <Plus size={18} className="mr-2" /> Novo
          </Button>
        </Link>
      </div>

      <Suspense fallback={<Loader size={16} className="mr-2 animate-spin" />}>
        <UsuarioList />
      </Suspense>
    </>
  );
}
