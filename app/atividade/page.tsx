import { Suspense } from 'react';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Loading } from '@/components/loading';
import { AtividadeList } from './components/atividade-list';
import { Combobox } from '@/components/ui/combobox';

export default function AtividadePage() {
  return (
    <>
      <div className="flex gap-4">
        <h1 className="text-2xl font-semibold">Atividades</h1>

        <Link href="/atividade/form">
          <Button size="sm">
            <Plus size={18} className="mr-2" /> Novo
          </Button>
        </Link>

        <Combobox />
      </div>

      <Suspense fallback={<Loading />}>
        <AtividadeList />
      </Suspense>
    </>
  );
}
