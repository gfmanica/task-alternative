import { Suspense } from 'react';
import { Loader, Plus } from 'lucide-react';
import { AtividadeList } from './components';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
      </div>

      <Suspense fallback={<Loader size={16} className="mr-2 animate-spin" />}>
        <AtividadeList />
      </Suspense>
    </>
  );
}
