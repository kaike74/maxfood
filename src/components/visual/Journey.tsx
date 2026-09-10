import { Photo } from "./Photo";
import { visual } from "./photos";
import { IconArrow } from "./icons";

const steps = [
  {
    kicker: "Produz",
    src: visual.chef,
    alt: "Chef em cozinha profissional finalizando o prato",
    caption: "Lote, validade e custo entram no sistema.",
  },
  {
    kicker: "MaxFood",
    src: visual.produceWall,
    alt: "Gôndola de hortifruti no supermercado",
    caption: "Alerta de risco e oferta relâmpago.",
  },
  {
    kicker: "Consome",
    src: visual.consume,
    alt: "Prato composto com hortaliças frescas, comida que chegou à mesa",
    caption: "Desconto para quem compra. Zero mensalidade.",
  },
];

export function Journey() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((s, i) => (
        <article key={s.kicker} className="relative">
          <Photo src={s.src} alt={s.alt} overlay="forest" className="h-48 rounded-3xl" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-lime">
              0{i + 1} · {s.kicker}
            </p>
            <p className="mt-1 text-sm font-semibold text-white">{s.caption}</p>
          </div>
          {i < steps.length - 1 ? (
            <IconArrow className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-lime md:block" />
          ) : null}
        </article>
      ))}
    </div>
  );
}
