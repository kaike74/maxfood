import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export function PrivacidadePage() {
  return (
    <div>
      <SiteHeader solid />
      <div className="site-container py-16">
        <h1 className="text-3xl font-extrabold">Privacidade</h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          Este site é um protótipo acadêmico. O acesso demo não cria conta real, não
          envia senha e não grava dados pessoais em servidor. A escolha do
          estabelecimento fica só no navegador (armazenamento local).
        </p>
        <p className="mt-4 max-w-2xl text-ink/70">
          Não coletamos pagamentos. Os estabelecimentos, nomes e números do painel
          são fictícios, para a banca.
        </p>
      </div>
      <SiteFooter />
    </div>
  );
}
