/** Fotos locais em /public/visual — não hotlink. */

export const visual = {
  hortifruti: "/visual/hortifruti-banca.jpg",
  produceWall: "/visual/consumidor-hortifruti.jpg",
  supermarket: "/visual/supermercado-gondola.jpg",
  supermarketAisle: "/visual/supermercado-corredor.jpg",
  kitchen: "/visual/cozinha-profissional.jpg",
  chef: "/visual/cozinha-linha.jpg",
  restaurant: "/visual/restaurante-prato.jpg",
  bakery: "/visual/padaria.jpg",
  hotel: "/visual/hotel-buffet.jpg",
  fruit: "/visual/frutas.jpg",
  dairy: "/visual/laticinios.jpg",
  meat: "/visual/acougue.jpg",
  tomatoes: "/visual/tomates.jpg",
  consume: "/visual/mesa-consumo.jpg",
  salad: "/visual/hortifruti-folhas.jpg",
  cart: "/visual/consumidor-oferta.jpg",
} as const;

export function photoForCategory(category: string): string {
  const key = category.toLowerCase();
  if (key.includes("horti") || key.includes("fruta")) return visual.produceWall;
  if (key.includes("latic")) return visual.dairy;
  if (key.includes("pada")) return visual.bakery;
  if (key.includes("açoug") || key.includes("acoug") || key.includes("prote")) {
    return visual.meat;
  }
  if (key.includes("insumo") || key.includes("seco")) return visual.kitchen;
  return visual.hortifruti;
}

export function photoForStoreType(type: string): string {
  const key = type.toLowerCase();
  if (key.includes("super")) return visual.supermarketAisle;
  if (key.includes("restaura")) return visual.chef;
  if (key.includes("hotel")) return visual.hotel;
  if (key.includes("pada") || key.includes("cafe")) return visual.bakery;
  return visual.hortifruti;
}
