import { useMemo, useState } from "react";
import {
  offers as seedOffers,
  productById,
  productsByStore,
  riskOf,
  type Offer,
  type StoreId,
} from "../data/mock";
import { brl } from "../lib/format";
import { getStoreId } from "../lib/session";
import { EmptyState, photoForCategory, ValidityBadge } from "../components/visual";

export function OfertasPage() {
  const storeId = getStoreId() as StoreId;
  const [items, setItems] = useState<Offer[]>(() =>
    seedOffers.filter((o) => o.storeId === storeId),
  );
  const catalog = useMemo(
    () => productsByStore(storeId).filter((p) => riskOf(p.expiresAt) !== "ok"),
    [storeId],
  );

  function publish(id: string) {
    setItems((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: "ativa" as const } : o)),
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-extrabold">Conexão vendedor ↔ consumidor</h1>
      <p className="mt-1 max-w-2xl text-sm text-ink/65">
        Marketplace interno. Quem está perto do vencimento vira oferta com desconto.
        O consumidor economiza; o estabelecimento recupera margem que iria para o lixo.
        Comissão de 15% só no checkout da oferta.
      </p>

      <h2 className="mt-8 text-lg font-bold">Ofertas</h2>
      <ul className="mf-stagger mt-3 grid gap-3 md:grid-cols-2">
        {items.map((o) => {
          const product = productById(o.productId);
          if (!product) return null;
          const unit = product.price > 0 ? product.price : product.cost;
          const promo = unit * (1 - o.discountPct / 100);
          return (
            <li key={o.id} className="mf-card overflow-hidden rounded-2xl border border-emerald-100 bg-white">
              <img
                src={photoForCategory(product.category)}
                alt=""
                className="h-32 w-full object-cover"
              />
              <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-leaf">{product.category}</p>
              <h3 className="mt-1 font-bold">{product.name}</h3>
              <p className="mt-2 text-sm">
                {o.discountPct}% off · de {brl(unit)} por {brl(promo)}
              </p>
              <p className="mt-1 text-xs text-ink/55">
                {product.qty} {product.unit} · {product.location}
              </p>
              <p className="mt-3">
                <ValidityBadge risk={riskOf(product.expiresAt)} />
              </p>
              <p className="mt-3 text-sm">
                Status:{" "}
                <strong>
                  {o.status === "ativa"
                    ? "Ativa no app"
                    : o.status === "reservada"
                      ? `Reservada por ${o.consumer}`
                      : "Sugerida pelo MaxFood"}
                </strong>
              </p>
              {o.interested > 0 ? (
                <p className="text-xs text-ink/55">{o.interested} pessoas interessadas</p>
              ) : null}
              {o.status === "sugerida" ? (
                <button
                  type="button"
                  className="mf-btn mt-4 rounded-lg bg-forest px-3 py-2 text-xs font-bold text-white"
                  onClick={() => publish(o.id)}
                >
                  Publicar oferta
                </button>
              ) : null}
              </div>
            </li>
          );
        })}
      </ul>

      <h2 className="mt-10 text-lg font-bold">Fila de validade (ainda sem oferta)</h2>
      {catalog.filter((p) => !items.some((o) => o.productId === p.id)).length === 0 ? (
        <div className="mt-3">
          <EmptyState
            title="Fila vazia"
            text="Todos os lotes em risco já têm oferta — o giro está no marketplace."
          />
        </div>
      ) : (
      <ul className="mt-3 divide-y divide-emerald-50 rounded-2xl border border-emerald-100 bg-white">
        {catalog
          .filter((p) => !items.some((o) => o.productId === p.id))
          .map((p) => (
            <li key={p.id} className="flex items-center gap-3 px-4 py-3 text-sm">
              <img
                src={photoForCategory(p.category)}
                alt=""
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="flex-1">
                {p.name} · {p.qty} {p.unit}
              </span>
              <ValidityBadge risk={riskOf(p.expiresAt)} />
              <span className="text-xs text-ink/50">candidato a promoção relâmpago</span>
            </li>
          ))}
      </ul>
      )}
    </div>
  );
}
