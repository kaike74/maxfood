import type { CSSProperties } from "react";
import { alerts, type StoreId } from "../data/mock";
import { getStoreId } from "../lib/session";

export function AlertasPage() {
  const storeId = getStoreId() as StoreId;
  const list = alerts.filter((a) => a.storeId === storeId);

  return (
    <div>
      <h1 className="text-2xl font-extrabold">Alertas inteligentes</h1>
      <p className="mt-1 text-sm text-ink/65">
        O sistema avisa o gerente antes do produto vencer e sugere promoção na ponta
        de gôndola — sem esperar o lixo.
      </p>
      <ul className="mt-6 space-y-3">
        {list.map((a, i) => (
          <li
            key={a.id}
            className="mf-alert-in mf-card rounded-2xl border border-emerald-100 bg-white p-5"
            style={{ "--mf-delay": `${70 + i * 80}ms` } as CSSProperties}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span
                className={`mf-badge-in rounded-full px-2 py-0.5 text-xs font-bold ${
                  a.tone === "critico"
                    ? "bg-red-100 text-red-800"
                    : a.tone === "alerta"
                      ? "bg-amber-100 text-amber-900"
                      : "bg-emerald-100 text-emerald-800"
                }`}
              >
                {a.tone === "critico" ? "Agir agora" : a.tone === "alerta" ? "Pré-alerta" : "Conexão"}
              </span>
              <span className="text-xs text-ink/45">{a.time}</span>
            </div>
            <h2 className="mt-3 font-bold">{a.title}</h2>
            <p className="mt-1 text-sm text-ink/70">{a.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
