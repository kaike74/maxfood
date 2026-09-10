import type { RiskLevel } from "../../data/mock";

const styles: Record<RiskLevel, string> = {
  critico: "bg-red-100 text-red-800 ring-red-200",
  alto: "bg-amber-100 text-amber-900 ring-amber-200",
  medio: "bg-yellow-50 text-yellow-900 ring-yellow-200",
  ok: "bg-emerald-50 text-emerald-800 ring-emerald-100",
};

const labels: Record<RiskLevel, string> = {
  critico: "Crítico",
  alto: "Alto",
  medio: "Médio",
  ok: "Estável",
};

export function ValidityBadge({
  risk,
  date,
}: {
  risk: RiskLevel;
  date?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-bold ring-1 ${styles[risk]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          risk === "critico"
            ? "bg-red-600"
            : risk === "alto"
              ? "bg-amber-600"
              : risk === "medio"
                ? "bg-yellow-500"
                : "bg-leaf"
        }`}
      />
      {date ?? labels[risk]}
    </span>
  );
}
