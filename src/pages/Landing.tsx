import { Link } from "react-router-dom";
import { SITE_URL, SLOGAN } from "../config";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { CountUp } from "../components/motion/CountUp";
import { Reveal } from "../components/motion/Reveal";
import { HeroStage } from "../components/visual/HeroStage";
import {
  IconBell,
  IconCart,
  IconChef,
  IconCoins,
  IconHotel,
  IconLeaf,
  IconLink,
  IconPeople,
  IconRadar,
  IconService,
  IconStore,
} from "../components/visual/icons";
import { Connector } from "../components/visual/Connector";
import { Journey } from "../components/visual/Journey";
import { FunnelFlow, LossVsProfit } from "../components/visual/LossVsProfit";
import { Photo } from "../components/visual/Photo";
import { PhoneMock } from "../components/visual/PhoneMock";
import { visual } from "../components/visual/photos";
import { PillarsDiagram } from "../components/visual/Pillars";
import { WasteDonut } from "../components/visual/WasteDonut";
import { TestimonialVideo } from "../components/TestimonialVideo";
import {
  benefits,
  business,
  hero,
  market,
  nextSteps,
  problem,
  solution,
} from "../content/landing";

const impactIcons = [IconCoins, IconLeaf, IconPeople];
const pillarIcons = [IconLink, IconRadar, IconBell];
const streamIcons = [IconCoins, IconCart, IconPeople];
const segmentIcons = [IconChef, IconStore, IconHotel, IconService];

const segmentPhotos = {
  restaurant: visual.restaurant,
  supermarket: visual.supermarket,
  hotel: visual.hotel,
  bakery: visual.bakery,
} as const;

export function LandingPage() {
  return (
    <div className="bg-white">
      <div className="bg-forest">
        <SiteHeader />
        <section className="relative overflow-hidden">
          <div className="mf-hero-blob pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-lime/20 blur-3xl" />
          <div className="site-container grid items-center gap-12 py-16 pb-24 md:grid-cols-2 md:py-24 md:pb-28">
            <div>
              <p className="mf-hero-kicker inline-flex items-center gap-2 rounded-full border border-lime/30 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-lime">
                {hero.badge}
              </p>
              <p className="mf-hero-title mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Max<span className="text-lime">Food</span>
              </p>
              <h1 className="mf-hero-lead mt-4 max-w-lg text-2xl font-bold leading-tight text-white md:text-3xl">
                {SLOGAN}
              </h1>
              <p className="mf-hero-lead mt-5 max-w-lg text-lg text-white/75">{hero.lead}</p>
              <div className="mf-hero-cta mt-8 flex flex-wrap gap-3">
                <a
                  href="#qr"
                  className="mf-btn mf-cta-arrow inline-flex items-center rounded-xl bg-lime px-5 py-3 text-sm font-bold text-forest hover:brightness-110"
                >
                  Ver demonstração
                </a>
                <Link
                  to="/app"
                  className="mf-btn inline-flex rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                >
                  Acessar o protótipo
                </Link>
              </div>
            </div>
            <div className="mf-hero-logo">
              <HeroStage />
            </div>
          </div>
        </section>
      </div>

      <section id="problema" className="bg-forest text-white">
        <div className="grid md:grid-cols-2">
          <div className="site-container max-w-none px-0 py-16 md:py-20">
            <Reveal className="mx-auto w-[min(560px,calc(100%-2rem))]">
              <p className="text-xs font-bold uppercase tracking-widest text-lime">
                {problem.kicker}
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                O problema do
                <span className="block text-white">desperdício</span>
                <span className="block text-lime">de alimentos</span>
              </h2>
              <p className="mt-6 max-w-md text-lg text-white/85">
                {problem.statLead}{" "}
                <CountUp
                  value={36}
                  format={(n) => `${Math.round(n)}%`}
                  className="font-extrabold text-lime"
                />{" "}
                {problem.statTail}
              </p>
              <ul className="mf-stagger mt-8 space-y-4">
                {problem.impacts.map((item, i) => {
                  const Icon = impactIcons[i];
                  return (
                    <li key={item.label} className="flex gap-3 text-sm text-white/75">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                      <span>
                        <span className="font-semibold text-white">Impacto </span>
                        <span className="font-semibold text-lime">{item.label}</span>
                        <span>: {item.text}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 text-ink">
                <WasteDonut />
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[280px] md:min-h-full">
            <Photo
              src="/slide-desperdicio.jpg"
              alt="Alimentos ainda aproveitáveis descartados em uma lixeira"
              overlay="forest"
              className="absolute inset-0 h-full min-h-[280px] w-full md:min-h-full"
            />
          </div>
        </div>
      </section>

      <section id="solucao" className="bg-forest py-20 text-white">
        <div className="site-container grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-lime">
              {solution.kicker}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              A solução <span className="text-lime">MaxFood</span>
            </h2>
            <p className="mt-4 max-w-lg text-white/75">{solution.lead}</p>
            <div className="mt-8">
              <PillarsDiagram />
            </div>
            <div className="mf-stagger mt-10 space-y-6">
              {solution.pillars.map((p, i) => {
                const Icon = pillarIcons[i];
                return (
                  <article key={p.title} className="flex gap-4 border-l-2 border-lime/50 pl-5">
                    <Icon className="mt-1 h-6 w-6 shrink-0 text-lime" />
                    <div>
                      <p className="text-xs font-bold text-lime">0{i + 1}</p>
                      <h3 className="mt-1 text-lg font-bold">{p.title}</h3>
                      <p className="mt-1 text-sm text-white/70">{p.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={120} className="flex justify-center">
            <PhoneMock />
          </Reveal>
        </div>
        <div className="site-container mt-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-lime">Como funciona</p>
            <h2 className="mt-3 text-3xl font-extrabold">Produz. MaxFood. Consome.</h2>
            <div className="mt-8 hidden md:block">
              <FunnelFlow />
            </div>
            <div className="mt-8">
              <Journey />
            </div>
            <Connector />
          </Reveal>
        </div>
      </section>

      <section id="mercado" className="bg-cream py-20">
        <div className="site-container">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-leaf">
              {market.kicker}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight md:text-4xl">
              {market.title}
            </h2>
            <p className="mt-4 max-w-2xl text-ink/70">{market.lead}</p>
          </Reveal>
          <Reveal>
            <div className="mf-stagger mt-10 grid gap-6 md:grid-cols-3">
            <article className="mf-card rounded-2xl bg-forest p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-lime/80">
                Mercado global em crescimento
              </p>
              <p className="mt-3 text-5xl font-extrabold text-lime">
                <CountUp value={20} format={(n) => `${Math.round(n)}%`} />
              </p>
              <p className="mt-3 text-sm text-white/75">{market.growthDetail}</p>
            </article>
            <article className="mf-card rounded-2xl border border-emerald-100 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-leaf">
                Oportunidade em diversos setores
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-forest">
                {market.segmentsLabel}
              </h3>
              <p className="mt-3 text-sm text-ink/70">{market.segmentsDetail}</p>
            </article>
            <article className="mf-card rounded-2xl border border-emerald-100 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-leaf">
                Impacto direto para nossos clientes
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-forest">
                {market.impactTitle}
              </h3>
              <p className="mt-3 text-sm text-ink/70">{market.impactDetail}</p>
            </article>
            </div>
          </Reveal>
          <Reveal>
            <div className="mf-stagger mt-8 grid gap-4 sm:grid-cols-2">
            {market.segments.map((s, i) => {
              const Icon = segmentIcons[i];
              return (
                <article
                  key={s.title}
                  className="mf-card overflow-hidden rounded-2xl border border-emerald-100 bg-white"
                >
                  <Photo
                    src={segmentPhotos[s.photo]}
                    alt=""
                    overlay="soft"
                    className="h-40 w-full"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-leaf" />
                      <h3 className="font-bold">{s.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-ink/70">{s.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
          </Reveal>
        </div>
      </section>

      <section id="beneficios" className="bg-forest py-20 text-white">
        <div className="site-container grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-lime">
              {benefits.kicker}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Benefícios
              <span className="block">para o</span>
              <span className="text-lime">usuário</span>
            </h2>
            <Photo
              src={visual.consume}
              alt="Comida que chegou à mesa, em vez de ir para o lixo"
              overlay="soft"
              className="mt-8 h-56 rounded-3xl"
            />
          </Reveal>
          <Reveal delay={80}>
            <ul className="mf-stagger relative space-y-8 border-l-2 border-lime/40 pl-8">
              {benefits.items.map((item) => (
                <li key={item} className="relative text-lg font-medium leading-snug">
                  <span className="absolute -left-[39px] top-2 h-3 w-3 rounded-full bg-lime" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="modelo" className="bg-cream py-20">
        <div className="site-container">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-leaf">
              {business.kicker}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">{business.title}</h2>
            <p className="mt-4 max-w-2xl text-ink/70">{business.lead}</p>
          </Reveal>
          <Reveal>
          <div className="mf-stagger mt-10 grid gap-4 md:grid-cols-3">
            {business.streams.map((s, i) => {
              const Icon = streamIcons[i];
              return (
                <article key={s.n} className="mf-card rounded-2xl bg-forest p-6 text-white">
                  <p className="text-4xl font-extrabold text-lime">{s.n}</p>
                  <Icon className="mt-3 h-6 w-6 text-lime" />
                  <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{s.text}</p>
                </article>
              );
            })}
          </div>
          </Reveal>
          <Reveal>
            <div className="mt-10 max-w-xl">
              <LossVsProfit />
            </div>
          </Reveal>
          <Link
            to="/precos"
            className="mf-btn mt-6 inline-flex font-bold text-leaf hover:underline"
          >
            Ver planos a partir de R$ 197
          </Link>
        </div>
      </section>

      <section id="depoimento" className="bg-forest py-20 text-white">
        <div className="site-container grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-lime">
              Depoimento
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Depoimento <span className="text-lime">real</span>
            </h2>
            <p className="mt-4 max-w-md text-white/75">
              O vídeo toca aqui mesmo. No palco, use Zoom para preencher a tela
              e ouvir com som.
            </p>
          </Reveal>
          <Reveal delay={80} className="flex justify-center">
            <TestimonialVideo />
          </Reveal>
        </div>
      </section>

      <section id="qr" className="bg-ink py-20 text-white">
        <div className="site-container grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-lime">No palco</p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Aponte a câmera</h2>
              <p className="mt-4 text-white/70">
                Abra a câmera do celular, leia o QR e entre no site. Depois toque em
                “Acessar o protótipo” e escolha um estabelecimento.
              </p>
              <p className="mt-4 break-all font-mono text-sm text-lime">{SITE_URL}</p>
              <figure className="mt-8 max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img
                  src="/onepager-maxfood.png"
                  alt="One-pager MaxFood: resumo visual da proposta"
                  className="w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-xs text-white/55">
                  One-pager para a banca — a mesma história, numa folha.
                </figcaption>
              </figure>
            </div>
          </Reveal>
          <div className="flex justify-center">
            <figure className="mf-qr-stage rounded-3xl bg-white p-6 text-ink">
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
        <Reveal>
        <div className="site-container overflow-hidden rounded-3xl">
          <div className="relative">
            <Photo
              src={visual.tomatoes}
              alt="Mãos trocando tomates frescos — o alimento chega a quem consome"
              overlay="forest"
              className="h-full min-h-[28rem] md:min-h-[32rem]"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 py-12 text-white md:px-12">
          <p className="text-xs font-bold uppercase tracking-widest text-lime">
            {nextSteps.kicker}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold md:text-4xl">
            {nextSteps.headline}
          </h2>
          <ul className="mf-stagger mt-8 max-w-xl space-y-4 text-white/80">
            {nextSteps.items.map((item) => (
              <li key={item} className="border-t border-white/10 pt-4">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/app"
              className="mf-btn rounded-xl bg-lime px-5 py-3 text-sm font-bold text-forest"
            >
              Abrir o protótipo
            </Link>
            <Link
              to="/sobre"
              className="mf-btn rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white"
            >
              Conhecer o time
            </Link>
          </div>
            </div>
          </div>
        </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
