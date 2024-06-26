'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { queryUsuario } from '@/app/usuario/actions/query-usuario';
import { TUsuario } from '@/app/usuario/types';

export function AtividadeUsuarioCombobox({
  setValue,
  value,
}: {
  setValue: any;
  value: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<string>(value);
  const [usuarios, setUsuarios] = React.useState<TUsuario[]>([]);

  React.useEffect(() => {
    const fetchUsuarios = async () => {
      const usuarios: TUsuario[] = await queryUsuario();

      setUsuarios(usuarios);
    };

    fetchUsuarios();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedValue || 'Selecione um responsável'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="max-h-[--radix-popover-content-available-height] w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>Sem registros</CommandEmpty>

            <CommandGroup>
              {usuarios?.map((usuario) => (
                <CommandItem
                  className="px-4 py-1"
                  key={usuario.nome}
                  value={usuario.nome}
                  onSelect={(currentValue) => {
                    setValue('responsavel', currentValue);
                    setSelectedValue(currentValue);

                    setOpen(false);
                  }}
                >
                  {usuario.nome}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
