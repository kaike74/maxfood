import { Link } from "react-router-dom";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const plans = [
  {
    name: "Essencial",
    price: "R$ 197",
    detail: "por mês · restaurantes e cafeterias",
    items: ["Alertas de validade", "Painel de risco em R$", "Até 2 usuários", "Ofertas no marketplace"],
  },
  {
    name: "Profissional",
    price: "R$ 247",
    detail: "por mês · supermercados e padarias",
    items: [
      "Tudo do Essencial",
      "Sugestão automática de promoção",
      "Até 8 usuários",
      "Relatório semanal de perdas evitadas",
    ],
    featured: true,
  },
  {
    name: "Rede",
    price: "R$ 297",
    detail: "por mês · hotéis e redes",
    items: ["Tudo do Profissional", "Várias unidades", "Prioridade no suporte", "Comissão 15% só nas ofertas"],
  },
];

export function PrecosPage() {
  return (
    <div>
      <SiteHeader solid />
      <div className="site-container py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-leaf">Preços</p>
        <h1 className="mt-2 text-3xl font-extrabold">Assinatura mensal para o comércio</h1>
        <p className="mt-3 max-w-xl text-ink/70">
          Quem compra no marketplace não paga. A barreira de entrada fica baixa de
          propósito: a dor do vencimento é grande; o preço, não.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`rounded-2xl border p-6 ${
                p.featured ? "border-leaf bg-mint" : "border-emerald-100 bg-white"
              }`}
            >
              <h2 className="font-bold">{p.name}</h2>
              <p className="mt-2 text-3xl font-extrabold text-forest">{p.price}</p>
              <p className="mt-1 text-xs text-ink/55">{p.detail}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/75">
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/60">
          Comissão de 15% retida no checkout das ofertas, repassada pelo estabelecimento.
        </p>
        <Link to="/app" className="mt-6 inline-flex font-bold text-leaf">
          Testar o protótipo
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}
