export function CardItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-1 flex-col items-start">
      <p className="text-xs">{label}</p>

      <p className="text-base font-semibold">{value}</p>
    </div>
  );
}
