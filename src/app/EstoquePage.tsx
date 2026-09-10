import type { CSSProperties } from "react";
import { productsByStore, riskOf, type StoreId } from "../data/mock";
import { brl, daysLabel, daysUntil, formatDate } from "../lib/format";
import { getStoreId } from "../lib/session";
import { ValidityBadge } from "../components/visual";

export function EstoquePage() {
  const storeId = getStoreId() as StoreId;
  const list = [...productsByStore(storeId)].sort(
    (a, b) => daysUntil(a.expiresAt) - daysUntil(b.expiresAt),
  );

  return (
    <div>
      <h1 className="text-2xl font-extrabold">Estoque e validade</h1>
      <p className="mt-1 text-sm text-ink/65">
        Lotes com custo, preço e prazo. Ordenado pelo que vence primeiro.
      </p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-emerald-100 bg-white">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-mint text-xs uppercase tracking-wide text-forest">
            <tr>
              <th className="px-4 py-3">Produto</th>
              <th className="px-4 py-3">Qtd</th>
              <th className="px-4 py-3">Validade</th>
              <th className="px-4 py-3">Risco</th>
              <th className="px-4 py-3">Valor</th>
              <th className="px-4 py-3">Local</th>
            </tr>
          </thead>
          <tbody>
            {list.map((p, i) => {
              const risk = riskOf(p.expiresAt);
              const value = p.qty * (p.price > 0 ? p.price : p.cost);
              return (
                <tr
                  key={p.id}
                  className="mf-row-in border-t border-emerald-50"
                  style={{ "--mf-delay": `${40 + i * 40}ms` } as CSSProperties}
                >
                  <td className="px-4 py-3">
                    <p className="font-semibold">{p.name}</p>
                    <p className="text-xs text-ink/50">{p.category}</p>
                  </td>
                  <td className="px-4 py-3">
                    {p.qty} {p.unit}
                  </td>
                  <td className="px-4 py-3">
                    <p>{formatDate(p.expiresAt)}</p>
                    <p className="text-xs text-ink/50">{daysLabel(daysUntil(p.expiresAt))}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className="mf-badge-in inline-flex"
                      style={{ "--mf-delay": `${80 + i * 40}ms` } as CSSProperties}
                    >
                      <ValidityBadge risk={risk} />
                    </span>
                  </td>
                  <td className="px-4 py-3 font-semibold">{brl(value)}</td>
                  <td className="px-4 py-3 text-ink/70">{p.location}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
