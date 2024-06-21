export function AtividadeCardItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-start">
      <p className="text-xs">{label}</p>

      <p className="text-base font-semibold">{value}</p>
    </div>
  );
}
