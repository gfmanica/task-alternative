export function Error({ value }: { value?: string | string[] }) {
  return value && <p className="text-xs text-red-500">{value}</p>;
}
