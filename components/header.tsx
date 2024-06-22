'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Loader, LogOut } from 'lucide-react';
import { useActionState } from 'react';
import { logOut } from '@/actions/log-out';

export function Header() {
  const pathname = usePathname();
  const [state, action, isPending] = useActionState(logOut, null);
  const hideHeader = ['/', '/cadastro-usuario'].includes(pathname);

  if (hideHeader) return null;

  return (
    <header className="sticky top-0 flex items-center justify-center gap-8 border-b-[1px] border-gray-200 bg-white p-4 backdrop-blur-sm">
      <Link href="/atividade">
        <Button variant="link" className="text-lg font-semibold">
          Atividades
        </Button>
      </Link>

      <Link href="/usuario">
        <Button variant="link" className="text-lg font-semibold">
          Usuários
        </Button>
      </Link>

      <Button
        variant="ghost"
        className="text-lg font-semibold text-red-500 hover:bg-red-100 hover:text-red-500"
        onClick={() => action()}
      >
        {!isPending && <LogOut size={18} className="mr-2" />}
        {isPending && <Loader size={18} className="mr-2 animate-spin" />}
        Sair
      </Button>
    </header>
  );
}
