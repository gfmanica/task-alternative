import * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CadastroUsuarioForm } from './components/cadastro-usuario-form';

export default function CadastroUsuarioPage() {
  return (
    <div className="item flex flex-1 flex-col items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader className="pb-4">
          <CardTitle>Cadastro de usuário</CardTitle>

          <CardDescription>
            Cadastre-se para ter acesso ao sistema.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <CadastroUsuarioForm />
        </CardContent>
      </Card>
    </div>
  );
}
