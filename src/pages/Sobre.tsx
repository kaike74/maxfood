import { SiteLayout } from "../components/SiteChrome";

export function SobrePage() {
  return (
    <SiteLayout>
      <div className="site-container py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-leaf">Sobre</p>
        <h1 className="mt-2 text-3xl font-extrabold">Transformar o desperdício em lucro</h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          A MaxFood é um aplicativo inteligente que conecta quem vende a quem
          consome. No Brasil, cerca de 36% do desperdício de alimentos é por
          validade. O software avisa no tempo certo; o marketplace dá saída ao
          produto que ainda pode ir para a mesa.
        </p>
        <p className="mt-4 max-w-2xl text-ink/70">
          Três pilares: conexão entre comerciante e consumidor, monitoramento de
          estoque e validade em tempo real, e alertas inteligentes. O mercado de
          gestão alimentar cresce cerca de 20% ao ano, segundo o relatório global
          da GVR — restaurantes, supermercados, hotéis e food service.
        </p>
        <p className="mt-8 text-sm text-ink/50">
          Trabalho acadêmico de empreendedorismo, apresentado em formato Shark Tank.
          A operação e os estabelecimentos do protótipo são fictícios.
        </p>
      </div>
    </SiteLayout>
  );
}
