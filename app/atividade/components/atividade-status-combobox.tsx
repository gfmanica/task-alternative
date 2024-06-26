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

const status = [
  {
    value: 'Pendente',
  },
  {
    value: 'Andamento',
  },
  {
    value: 'Concluído',
  },
];

export function AtividadeStatusCombobox({
  setValue,
  value,
}: {
  setValue: any;
  value: any;
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedValue || 'Selecione um status'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="max-h-[--radix-popover-content-available-height] w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>Sem registros</CommandEmpty>

            <CommandGroup>
              {status?.map((status) => (
                <CommandItem
                  className="px-4 py-1"
                  key={status.value}
                  value={status.value}
                  onSelect={(currentValue) => {
                    setValue('status', currentValue);
                    setSelectedValue(currentValue);

                    setOpen(false);
                  }}
                >
                  {status.value}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
