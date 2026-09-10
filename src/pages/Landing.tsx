import { Link } from "react-router-dom";
import { SITE_URL, SLOGAN } from "../config";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const pillars = [
  {
    title: "Conexão que gera impacto",
    text: "Liga o vendedor ao consumidor final. O que ia para o lixo vira oferta com desconto — e um canal novo de receita.",
  },
  {
    title: "Monitoramento em tempo real",
    text: "Estoque e validade com dados precisos. O gerente vê o risco em reais, não só em datas.",
  },
  {
    title: "Alertas inteligentes",
    text: "Avisos no momento certo, antes do vencimento, com sugestão de promoção relâmpago na ponta de gôndola.",
  },
];

const segments = [
  { title: "Restaurantes", text: "Insumos da cozinha com validade curta e cardápio ajustável no mesmo dia." },
  { title: "Supermercados", text: "Perecíveis em gôndola: hortifruti, laticínios, padaria e açougue." },
  { title: "Hotéis", text: "Cozinha e buffet com volume alto e janela curta de consumo." },
  { title: "Serviços de alimentação", text: "Padarias, cafeterias e food service que precisam girar estoque todo dia." },
];

export function LandingPage() {
  return (
    <div className="bg-white">
      <div className="bg-forest">
        <SiteHeader />
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-lime/20 blur-3xl" />
          <div className="site-container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-lime">
                Aplicativo inteligente
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                {SLOGAN}
              </h1>
              <p className="mt-5 max-w-lg text-lg text-white/75">
                A plataforma que conecta quem vende e quem consome para reduzir o
                desperdício. Avisa antes do prejuízo — e transforma validade em oferta.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#qr"
                  className="inline-flex rounded-xl bg-lime px-5 py-3 text-sm font-bold text-forest hover:brightness-110"
                >
                  Ver demonstração
                </a>
                <Link
                  to="/app"
                  className="inline-flex rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                >
                  Acessar o protótipo
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/logo-maxfood.jpg"
                alt="Logo MaxFood: smartphone, hortifruti e gráfico de crescimento"
                className="mx-auto w-full max-w-md rounded-3xl bg-white shadow-2xl shadow-black/30"
              />
            </div>
          </div>
        </section>
      </div>

      <section id="problema" className="bg-cream py-20">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-widest text-leaf">O problema</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-4xl">
            No Brasil, cerca de 36% do desperdício é por validade do produto.
          </h2>
          <p className="mt-4 max-w-2xl text-ink/70">
            Todos os dias restaurantes, mercados e comércios jogam fora alimentos que
            ainda poderiam ser consumidos. Ao mesmo tempo, pessoas procuram maneiras de
            economizar.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Econômico", "Perdas que custam bilhões. Produto vencido na prateleira é faturamento rasgado."],
              ["Ambiental", "Mais emissão, água, energia e solo gastos em comida que não chega à mesa."],
              ["Social", "Desperdício enquanto milhões passam fome. Gestão ruim agrava os dois lados."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-emerald-100 bg-white p-6">
                <h3 className="font-bold text-forest">{title}</h3>
                <p className="mt-2 text-sm text-ink/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solucao" className="py-20">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-widest text-leaf">A solução MaxFood</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Três pilares, um fluxo</h2>
          <p className="mt-4 max-w-2xl text-ink/70">
            Software de gestão de validade mais marketplace. O empresário lança produtos
            com validade, custo e preço. O sistema avisa, sugere promoção e conecta com
            quem quer comprar mais barato.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <article key={p.title} className="rounded-2xl bg-mint p-6">
                <p className="text-sm font-bold text-leaf">0{i + 1}</p>
                <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-forest py-20 text-white">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-widest text-lime">Como funciona</p>
          <h2 className="mt-3 text-3xl font-extrabold">Produz. Vende. Consome.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Produz", "Quem fabrica ou prepara registra lote, validade e custo."],
              ["Vende (MaxFood)", "O estabelecimento monitora risco e publica oferta antes do prejuízo."],
              ["Consome", "O usuário do marketplace recebe desconto. Sem mensalidade para quem compra."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-bold text-lime">{title}</h3>
                <p className="mt-2 text-white/75">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-widest text-leaf">Para quem</p>
          <h2 className="mt-3 text-3xl font-extrabold">Grandes oportunidades em alimentação</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {segments.map((s) => (
              <article key={s.title} className="rounded-2xl border border-emerald-100 p-6">
                <h3 className="font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="site-container grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-leaf">Modelo de negócio</p>
            <h2 className="mt-3 text-3xl font-extrabold">Assinatura mensal para o comércio</h2>
            <p className="mt-4 text-ink/70">
              Mensalidade de R$ 197 a R$ 297. O usuário do marketplace não paga nada.
              No checkout da oferta, 15% de comissão retida — repassada pelo próprio
              estabelecimento.
            </p>
            <p className="mt-4 text-ink/70">
              Se o cliente evita R$ 5.000 em perdas e a mensalidade custa R$ 247, o
              software se paga no primeiro ciclo.
            </p>
            <Link
              to="/precos"
              className="mt-6 inline-flex font-bold text-leaf hover:underline"
            >
              Ver planos
            </Link>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="font-bold">Benefícios para o usuário</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/75">
              <li>Menos descarte, mais eficiência e economia.</li>
              <li>Aumento de margem com controle de estoque.</li>
              <li>Interface simples e integração com a rotina da loja.</li>
              <li>Sustentabilidade com resultado financeiro — green business de verdade.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="qr" className="bg-ink py-20 text-white">
        <div className="site-container grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-lime">No palco</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Aponte a câmera</h2>
            <p className="mt-4 text-white/70">
              Abra a câmera do celular, leia o QR e entre no site. Depois toque em
              “Acessar o protótipo” e escolha um estabelecimento.
            </p>
            <p className="mt-4 break-all font-mono text-sm text-lime">{SITE_URL}</p>
          </div>
          <div className="flex justify-center">
            <figure className="rounded-3xl bg-white p-6 text-ink">
              <img
                src="/qr-maxfood.png"
                alt={`QR Code para ${SITE_URL}`}
                className="h-64 w-64 sm:h-80 sm:w-80"
                width={320}
                height={320}
              />
              <figcaption className="mt-3 text-center text-sm font-semibold">
                MaxFood — site ao vivo
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20">
        <div className="site-container rounded-3xl bg-mint px-8 py-12 text-center">
          <h2 className="text-3xl font-extrabold">Venha fazer parte dessa mudança</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/70">
            Estamos transformando o prejuízo do vencimento em lucro e sustentabilidade.
            Agende uma demonstração, fale sobre parceria ou invista numa solução que
            gera impacto e resultado.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/app"
              className="rounded-xl bg-forest px-5 py-3 text-sm font-bold text-white"
            >
              Abrir o protótipo
            </Link>
            <Link
              to="/sobre"
              className="rounded-xl border border-forest/20 px-5 py-3 text-sm font-bold text-forest"
            >
              Conhecer o time
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
