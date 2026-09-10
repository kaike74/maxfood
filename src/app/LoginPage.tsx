import { Navigate, useNavigate } from "react-router-dom";
import { stores, type StoreId } from "../data/mock";
import { getStoreId, setStoreId } from "../lib/session";
import { SiteLayout } from "../components/SiteChrome";
import { Photo, photoForStoreType } from "../components/visual";

export function LoginPage() {
  const navigate = useNavigate();
  if (getStoreId()) {
    return <Navigate to="/app/dashboard" replace />;
  }

  function enter(id: StoreId) {
    setStoreId(id);
    navigate("/app/dashboard");
  }

  return (
    <SiteLayout className="min-h-screen bg-cream">
      <div className="site-container py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-leaf">Protótipo</p>
        <h1 className="mt-2 text-3xl font-extrabold">Entre como um estabelecimento</h1>
        <p className="mt-3 max-w-xl text-ink/70">
          Sem senha. Dados fictícios, mas realistas — o mesmo fluxo que o gerente veria
          no dia a dia: validade, risco em reais e ofertas para o consumidor.
        </p>
        <div className="mf-stagger mt-10 grid gap-4 md:grid-cols-2">
          {stores.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => enter(s.id)}
              className="mf-card overflow-hidden rounded-2xl border border-emerald-100 bg-white text-left shadow-sm transition hover:border-leaf hover:shadow-md"
            >
              <Photo
                src={photoForStoreType(s.type)}
                alt=""
                overlay="soft"
                className="h-36"
              />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-leaf">{s.type}</p>
                <h2 className="mt-2 text-xl font-extrabold">{s.name}</h2>
                <p className="mt-1 text-sm text-ink/65">{s.city}</p>
                <p className="mt-4 text-sm">
                  {s.manager} · {s.role}
                </p>
                <p className="mt-6 text-sm font-bold text-forest">Entrar no painel →</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
