import { Suspense } from 'react';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UsuarioList } from './components/usuario-list';
import { Loading } from '@/components/loading';

export default function UsuarioPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Usuários</h1>

      <Suspense fallback={<Loading />}>
        <UsuarioList />
      </Suspense>
    </>
  );
}
