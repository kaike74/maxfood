import { Link } from "react-router-dom";
import { SiteLayout } from "../components/SiteChrome";
import { LossVsProfit } from "../components/visual/LossVsProfit";

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
    <SiteLayout>
      <div className="site-container py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-leaf">Preços</p>
        <h1 className="mt-2 text-3xl font-extrabold">Assinatura mensal (SaaS) a partir de R$ 197</h1>
        <p className="mt-3 max-w-xl text-ink/70">
          Três linhas de receita: mensalidade para o comércio, 15% de comissão no
          marketplace e parcerias com fornecedores. Quem compra nas ofertas não paga
          assinatura.
        </p>
        <div className="mf-stagger mt-10 grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`mf-card rounded-2xl border p-6 ${
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
          Comissão de 15% sobre vendas no marketplace, retida no checkout e repassada
          pelo estabelecimento. A terceira linha — parcerias com fornecedores e
          programas de incentivo — entra conforme a operação cresce.
        </p>
        <div className="mt-10 max-w-xl">
          <LossVsProfit />
        </div>
        <Link to="/app" className="mf-btn mt-6 inline-flex font-bold text-leaf">
          Testar o protótipo
        </Link>
      </div>
    </SiteLayout>
  );
}
