import type { Product, RiskLevel } from "../../data/mock";
import { riskOf } from "../../data/mock";

const colors: Record<RiskLevel, string> = {
  critico: "#c2410c",
  alto: "#d97706",
  medio: "#ca8a04",
  ok: "#1f8a3e",
};

const labels: Record<RiskLevel, string> = {
  critico: "Crítico",
  alto: "Alto",
  medio: "Médio",
  ok: "Estável",
};

export function RiskMix({ products }: { products: Product[] }) {
  const counts: Record<RiskLevel, number> = {
    critico: 0,
    alto: 0,
    medio: 0,
    ok: 0,
  };
  for (const p of products) counts[riskOf(p.expiresAt)] += 1;
  const total = products.length || 1;
  const order: RiskLevel[] = ["critico", "alto", "medio", "ok"];
  let x = 0;
  const segs = order.map((k) => {
    const w = (counts[k] / total) * 320;
    const seg = { k, x, w, n: counts[k] };
    x += w;
    return seg;
  });

  return (
    <figure className="rounded-2xl border border-emerald-100 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
        Mix de validade
      </p>
      <svg viewBox="0 0 320 18" className="mt-3 w-full" role="img">
        <title>Distribuição de SKUs por risco de validade</title>
        {segs.map((s) =>
          s.w > 0 ? (
            <rect
              key={s.k}
              x={s.x}
              y="0"
              width={Math.max(s.w - 2, 0)}
              height="18"
              rx="6"
              fill={colors[s.k]}
            />
          ) : null,
        )}
      </svg>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink/70">
        {order.map((k) => (
          <li key={k} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: colors[k] }} />
            {labels[k]} · {counts[k]}
          </li>
        ))}
      </ul>
    </figure>
  );
}
