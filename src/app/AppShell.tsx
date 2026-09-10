import { NavLink, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import { alerts, storeById, type StoreId } from "../data/mock";
import { clearStoreId } from "../lib/session";
import { PageTransition } from "../components/motion/PageTransition";

const links = [
  { to: "/app/dashboard", label: "Painel" },
  { to: "/app/estoque", label: "Estoque" },
  { to: "/app/alertas", label: "Alertas" },
  { to: "/app/ofertas", label: "Conexão" },
];

export function AppShell({
  storeId,
  children,
}: {
  storeId: StoreId;
  children: ReactNode;
}) {
  const store = storeById(storeId);
  const navigate = useNavigate();
  const alertCount = alerts.filter((a) => a.storeId === storeId).length;

  return (
    <div className="min-h-screen bg-cream text-ink md:grid md:grid-cols-[240px_1fr]">
      <aside className="border-b border-emerald-100 bg-forest text-white md:min-h-screen md:border-b-0 md:border-r md:border-emerald-900/30">
        <div className="flex items-center gap-2 px-4 py-4">
          <img src="/logo-maxfood.jpg" alt="" className="h-9 w-9 rounded-md bg-white object-cover" />
          <div>
            <p className="text-sm font-extrabold leading-tight">MaxFood</p>
            <p className="text-[11px] text-white/60">Operação</p>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-2 pb-3 md:flex-col md:px-3" aria-label="Produto">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `mf-app-link whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold ${
                  isActive ? "bg-white/15 text-lime" : "text-white/75 hover:bg-white/10"
                }`
              }
            >
              {l.label}
              {l.to.includes("alertas") ? (
                <span className="mf-badge-pulse ml-2 inline-block rounded-full bg-lime px-1.5 text-[10px] font-bold text-forest">
                  {alertCount}
                </span>
              ) : null}
            </NavLink>
          ))}
        </nav>
        <div className="hidden px-4 py-4 md:block">
          <p className="text-xs text-white/50">Estabelecimento</p>
          <p className="mt-1 text-sm font-bold">{store.name}</p>
          <p className="text-xs text-white/60">{store.city}</p>
        </div>
      </aside>
      <div>
        <header className="flex items-center justify-between gap-3 border-b border-emerald-100 bg-white px-4 py-3">
          <div>
            <p className="text-sm font-bold">{store.name}</p>
            <p className="text-xs text-ink/55">
              {store.manager} · {store.role} · plano {store.plan}
            </p>
          </div>
          <button
            type="button"
            className="mf-btn rounded-lg border border-emerald-100 px-3 py-1.5 text-xs font-semibold text-forest hover:bg-mint"
            onClick={() => {
              clearStoreId();
              navigate("/app");
            }}
          >
            Trocar estabelecimento
          </button>
        </header>
        <main className="p-4 md:p-8">
          <PageTransition>{children}</PageTransition>
        </main>
      </div>
    </div>
  );
}
