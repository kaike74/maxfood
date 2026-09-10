import { visual } from "./photos";

const offers = [
  {
    img: visual.produceWall,
    name: "Alface crespa",
    off: "40%",
    when: "Vence hoje",
  },
  {
    img: visual.fruit,
    name: "Tomate italiano",
    off: "30%",
    when: "Amanhã",
  },
  {
    img: visual.dairy,
    name: "Iogurte natural",
    off: "25%",
    when: "2 dias",
  },
];

export function PhoneMock({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`phone-bezel ${compact ? "w-[200px]" : "w-[230px]"}`}
      aria-hidden="true"
    >
      <div className="phone-notch" />
      <div className="bg-cream px-3 pb-4 pt-6">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-extrabold tracking-tight text-forest">
            Max<span className="text-leaf">Food</span>
          </p>
          <span className="rounded-full bg-lime/30 px-1.5 py-0.5 text-[8px] font-bold text-forest">
            perto de você
          </span>
        </div>
        <p className="mt-2 text-[11px] font-bold leading-tight text-ink">
          Ofertas antes do lixo
        </p>
        <div className="mt-2 space-y-2">
          {offers.map((o) => (
            <div
              key={o.name}
              className="flex items-center gap-2 rounded-xl bg-white p-1.5 shadow-sm"
            >
              <img
                src={o.img}
                alt=""
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-bold">{o.name}</p>
                <p className="text-[8px] text-ink/55">{o.when}</p>
              </div>
              <span className="rounded-md bg-forest px-1.5 py-0.5 text-[9px] font-extrabold text-lime">
                -{o.off}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-lime py-1.5 text-center text-[9px] font-extrabold text-forest">
          Reservar lote
        </div>
      </div>
    </div>
  );
}
