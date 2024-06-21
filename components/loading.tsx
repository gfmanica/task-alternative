import { Loader } from 'lucide-react';

export function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Loader size={34} className="mr-2 animate-spin" />
    </div>
  );
}
