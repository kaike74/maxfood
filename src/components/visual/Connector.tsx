import { Photo } from "./Photo";
import { visual } from "./photos";

export function Connector() {
  return (
    <div className="mt-10 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
      <div className="relative overflow-hidden rounded-3xl">
        <Photo
          src={visual.supermarketAisle}
          alt="Corredor de supermercado, lado de quem vende"
          overlay="forest"
          className="h-48"
        />
        <p className="absolute bottom-4 left-4 text-sm font-extrabold text-white">
          Vendedor
        </p>
      </div>
      <div className="flex flex-col items-center justify-center py-2">
        <img
          src="/logo-maxfood.jpg"
          alt="MaxFood no meio da conexão"
          className="h-16 w-16 rounded-2xl bg-white object-cover shadow-lg ring-4 ring-lime/40"
        />
        <p className="mt-2 text-center text-xs font-bold uppercase tracking-widest text-lime">
          conecta
        </p>
      </div>
      <div className="relative overflow-hidden rounded-3xl">
        <Photo
          src={visual.cart}
          alt="Carrinho no supermercado, lado de quem consome"
          overlay="forest"
          className="h-48"
        />
        <p className="absolute bottom-4 left-4 text-sm font-extrabold text-white">
          Consumidor
        </p>
      </div>
    </div>
  );
}
