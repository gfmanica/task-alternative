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

const tipos = [
  {
    value: 'user',
    label: 'Usuário',
  },
  {
    value: 'admin',
    label: 'Administrador',
  },
];

export function UsuarioTipoCombobox({
  setValue,
  value,
}: {
  setValue: any;
  value: any;
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(
    tipos.find((tipo) => tipo.value === value)?.label,
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedValue || 'Selecione um tipo'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="max-h-[--radix-popover-content-available-height] w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>Sem registros</CommandEmpty>

            <CommandGroup>
              {tipos?.map((tipo) => (
                <CommandItem
                  className="px-4 py-1"
                  key={tipo.value}
                  value={tipo.value}
                  onSelect={(currentValue) => {
                    setValue('tipo', currentValue);

                    setSelectedValue(
                      tipos.find((tipo) => tipo.value === currentValue)?.label,
                    );

                    setOpen(false);
                  }}
                >
                  {tipo.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
