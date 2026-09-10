import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import {
  alerts,
  atRiskValue,
  offers,
  productsByStore,
  riskOf,
  storeById,
  type StoreId,
} from "../data/mock";
import { brl } from "../lib/format";
import { getStoreId } from "../lib/session";
import { CountUp } from "../components/motion/CountUp";
import { RiskMix, ValidityBadge } from "../components/visual";

export function DashboardPage() {
  const storeId = getStoreId() as StoreId;
  const store = storeById(storeId);
  const list = productsByStore(storeId);
  const risk = list.reduce((sum, p) => sum + atRiskValue(p), 0);
  const expiring = list.filter((p) => riskOf(p.expiresAt) !== "ok");
  const activeOffers = offers.filter((o) => o.storeId === storeId && o.status !== "sugerida");
  const latest = alerts.filter((a) => a.storeId === storeId).slice(0, 3);

  const cards = [
    {
      label: "Itens em estoque",
      value: list.length,
      hint: "SKUs monitorados",
      format: (n: number) => String(Math.round(n)),
    },
    {
      label: "Perto do vencimento",
      value: expiring.length,
      hint: "atenção nas próximas 72h+",
      format: (n: number) => String(Math.round(n)),
    },
    {
      label: "R$ em risco",
      value: risk,
      hint: "valor de venda/custo ameaçado",
      format: brl,
    },
    {
      label: "Ofertas ativas",
      value: activeOffers.length,
      hint: "conexão com o consumidor",
      format: (n: number) => String(Math.round(n)),
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-extrabold">Painel de validade</h1>
      <p className="mt-1 text-sm text-ink/65">
        {store.name} · visão do dia. O sistema avisa antes do prejuízo.
      </p>
      <div className="mf-stagger mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card.label} className="mf-card rounded-2xl border border-emerald-100 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">{card.label}</p>
            <p className="mt-2 text-2xl font-extrabold text-forest">
              <CountUp value={card.value} format={card.format} />
            </p>
            <p className="mt-1 text-xs text-ink/55">{card.hint}</p>
          </article>
        ))}
      </div>

      <div className="mt-6">
        <RiskMix products={list} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-emerald-100 bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Produtos em risco</h2>
            <Link to="/app/estoque" className="text-sm font-semibold text-leaf">
              Ver estoque
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-emerald-50">
            {expiring.slice(0, 6).map((p, i) => (
              <li
                key={p.id}
                className="mf-row-in flex items-center justify-between py-3 text-sm"
                style={{ "--mf-delay": `${80 + i * 55}ms` } as CSSProperties}
              >
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs text-ink/55">
                    {p.qty} {p.unit} · {p.location}
                  </p>
                </div>
                <span
                  className="mf-badge-in inline-flex"
                  style={{ "--mf-delay": `${140 + i * 55}ms` } as CSSProperties}
                >
                  <ValidityBadge
                    risk={riskOf(p.expiresAt)}
                    date={p.expiresAt.split("-").reverse().join("/")}
                  />
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-emerald-100 bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Alertas inteligentes</h2>
            <Link to="/app/alertas" className="text-sm font-semibold text-leaf">
              Todos
            </Link>
          </div>
          <ul className="mt-4 space-y-3">
            {latest.map((a, i) => (
              <li
                key={a.id}
                className="mf-alert-in rounded-xl bg-mint p-3 text-sm"
                style={{ "--mf-delay": `${120 + i * 90}ms` } as CSSProperties}
              >
                <p className="font-bold">{a.title}</p>
                <p className="mt-1 text-ink/70">{a.message}</p>
                <p className="mt-2 text-xs text-ink/45">{a.time}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
