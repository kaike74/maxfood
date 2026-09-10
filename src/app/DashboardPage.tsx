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

export function DashboardPage() {
  const storeId = getStoreId() as StoreId;
  const store = storeById(storeId);
  const list = productsByStore(storeId);
  const risk = list.reduce((sum, p) => sum + atRiskValue(p), 0);
  const expiring = list.filter((p) => riskOf(p.expiresAt) !== "ok");
  const activeOffers = offers.filter((o) => o.storeId === storeId && o.status !== "sugerida");
  const latest = alerts.filter((a) => a.storeId === storeId).slice(0, 3);

  const cards = [
    ["Itens em estoque", String(list.length), "SKUs monitorados"],
    ["Perto do vencimento", String(expiring.length), "atenção nas próximas 72h+"],
    ["R$ em risco", brl(risk), "valor de venda/custo ameaçado"],
    ["Ofertas ativas", String(activeOffers.length), "conexão com o consumidor"],
  ];

  return (
    <div>
      <h1 className="text-2xl font-extrabold">Painel de validade</h1>
      <p className="mt-1 text-sm text-ink/65">
        {store.name} · visão do dia. O sistema avisa antes do prejuízo.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(([label, value, hint]) => (
          <article key={label} className="rounded-2xl border border-emerald-100 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">{label}</p>
            <p className="mt-2 text-2xl font-extrabold text-forest">{value}</p>
            <p className="mt-1 text-xs text-ink/55">{hint}</p>
          </article>
        ))}
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
            {expiring.slice(0, 6).map((p) => (
              <li key={p.id} className="flex items-center justify-between py-3 text-sm">
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs text-ink/55">
                    {p.qty} {p.unit} · {p.location}
                  </p>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                    riskOf(p.expiresAt) === "critico"
                      ? "bg-red-100 text-red-800"
                      : riskOf(p.expiresAt) === "alto"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-lime/20 text-forest"
                  }`}
                >
                  {p.expiresAt.split("-").reverse().join("/")}
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
            {latest.map((a) => (
              <li key={a.id} className="rounded-xl bg-mint p-3 text-sm">
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
