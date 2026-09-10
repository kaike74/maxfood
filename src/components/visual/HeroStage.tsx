import { Photo } from "./Photo";
import { PhoneMock } from "./PhoneMock";
import { visual } from "./photos";

export function HeroStage() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40 ring-1 ring-white/10">
        <Photo
          src={visual.hortifruti}
          alt="Banca de hortifruti com frutas e verduras à venda"
          overlay="forest"
          className="h-[380px] md:h-[440px]"
        />
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-2xl bg-white/95 p-1.5 pr-3 shadow-lg">
          <img
            src="/logo-maxfood.jpg"
            alt=""
            className="h-12 w-12 rounded-xl object-cover"
          />
          <div>
            <p className="text-xs font-extrabold leading-none text-ink">
              Max<span className="text-leaf">Food</span>
            </p>
            <p className="text-[10px] text-ink/55">validade → oferta</p>
          </div>
        </div>
        <p className="absolute bottom-5 left-5 max-w-[11rem] text-xs font-semibold leading-snug text-white/90">
          O lote que ia vencer vira desconto na gôndola.
        </p>
      </div>
      <div className="absolute -bottom-10 right-2 sm:-right-2 md:-right-6">
        <PhoneMock compact />
      </div>
    </div>
  );
}
