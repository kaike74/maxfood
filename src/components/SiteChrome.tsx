import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { SITE_URL, SLOGAN } from "../config";
import { PageTransition } from "./motion/PageTransition";

const nav = [
  { href: "/#problema", label: "Problema" },
  { href: "/#solucao", label: "Solução" },
  { href: "/#mercado", label: "Mercado" },
  { href: "/#modelo", label: "Modelo" },
  { href: "/#depoimento", label: "Depoimento" },
  { href: "/precos", label: "Preços" },
];

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  return (
    <header
      className={`sticky top-0 z-40 border-b ${
        solid
          ? "border-emerald-100 bg-white/95 backdrop-blur"
          : "border-white/10 bg-forest/90 backdrop-blur"
      }`}
    >
      <div className="site-container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="mf-brand flex items-center gap-2">
          <img
            src="/logo-maxfood.jpg"
            alt="MaxFood"
            className="h-10 w-10 rounded-lg object-cover bg-white"
          />
          <span
            className={`text-lg font-extrabold tracking-tight ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            Max<span className="text-lime">Food</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {nav.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                to={item.href}
                className={`mf-nav-link text-sm font-medium ${
                  solid ? "text-ink/70 hover:text-ink" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={`mf-nav-link text-sm font-medium ${
                  solid ? "text-ink/70 hover:text-ink" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/app"
            className={`mf-btn hidden rounded-lg px-3 py-2 text-sm font-semibold sm:inline-flex ${
              solid ? "text-forest hover:bg-mint" : "text-white/90 hover:bg-white/10"
            }`}
          >
            Acessar o protótipo
          </Link>
          <a
            href="#contato"
            className="mf-btn inline-flex rounded-lg bg-lime px-3 py-2 text-sm font-bold text-forest hover:brightness-110"
          >
            Agendar demonstração
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteLayout({
  solid = true,
  className,
  children,
}: {
  solid?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <SiteHeader solid={solid} />
      <PageTransition>{children}</PageTransition>
      <SiteFooter />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-emerald-900/20 bg-ink text-white">
      <div className="site-container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold">
            Max<span className="text-lime">Food</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-white/60">{SLOGAN}</p>
        </div>
        <div className="text-sm text-white/70">
          <p className="font-semibold text-white">Navegação</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link className="transition-colors hover:text-white" to="/sobre">
              Sobre
            </Link>
            <Link className="transition-colors hover:text-white" to="/precos">
              Preços
            </Link>
            <Link className="transition-colors hover:text-white" to="/app">
              Protótipo
            </Link>
            <Link className="transition-colors hover:text-white" to="/privacidade">
              Privacidade
            </Link>
          </div>
        </div>
        <div className="text-sm text-white/50">
          <p>
            Projeto acadêmico fictício para apresentação em banca (estilo Shark Tank).
            Dados de mercado e marcas de estabelecimentos são ilustrativos.
          </p>
          <p className="mt-3">© {new Date().getFullYear()} MaxFood</p>
          <p className="mt-1 break-all text-xs">{SITE_URL}</p>
        </div>
      </div>
    </footer>
  );
}
