import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export function SobrePage() {
  return (
    <div>
      <SiteHeader solid />
      <div className="site-container py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-leaf">Sobre</p>
        <h1 className="mt-2 text-3xl font-extrabold">O alimento não precisa vencer na prateleira</h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          A MaxFood nasceu da observação simples: restaurantes, mercados e comércios
          descartam comida ainda boa, enquanto consumidores buscam preço. O software
          cuida da validade; o marketplace fecha o ciclo.
        </p>
        <p className="mt-4 max-w-2xl text-ink/70">
          Não é um controle de estoque genérico. É um aviso 15 dias — ou 15 horas —
          antes do prejuízo, com promoção relâmpago e um canal de saída para o lote
          que não girou.
        </p>
        <p className="mt-8 text-sm text-ink/50">
          Trabalho acadêmico de empreendedorismo, apresentado em formato Shark Tank.
          A operação e os estabelecimentos do protótipo são fictícios.
        </p>
      </div>
      <SiteFooter />
    </div>
  );
}
