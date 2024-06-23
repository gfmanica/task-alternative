export function Error({ value }: { value?: string | string[] }) {
  return value && <p className="mt-1 text-xs text-red-500">{value}</p>;
}
