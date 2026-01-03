interface ResultDisplayProps {
  salary: number | null;
}

export default function ResultDisplay({ salary }: ResultDisplayProps) {
  if (salary === null) return null;

  return (
    <div className="mt-10 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 animate-in fade-in zoom-in duration-300">
      <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-[0.2em] text-center mb-2">
        Estimated Annual Income
      </p>
      <div className="flex justify-center items-baseline gap-1">
        <span className="text-2xl font-bold text-emerald-700">$</span>
        <h2 className="text-5xl font-black text-emerald-800">
          {salary.toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </h2>
      </div>
    </div>
  );
}