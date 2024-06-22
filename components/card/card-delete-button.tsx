'use client';

import { Button } from '@/components/ui/button';
import { Loader, Trash } from 'lucide-react';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

export function CardDeleteButton({
  id,
  deleteAction,
}: {
  id: string;
  deleteAction: (prevState: string, id: string) => Promise<any>;
}) {
  const [state, action, isPending] = useActionState(deleteAction, '');

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
  }, [state.error]);

  return (
    <Button
      size="icon"
      variant="ghost"
      className="text-red-500 hover:text-red-500"
      disabled={isPending}
      onClick={() => action(id)}
    >
      {!isPending && <Trash size={18} />}
      {isPending && <Loader size={18} className="animate-spin" />}
    </Button>
  );
}
