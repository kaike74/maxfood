function addDays(n: number) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

export type StoreId = "supermercado-central" | "restaurante-villa";
export type RiskLevel = "critico" | "alto" | "medio" | "ok";

export type Store = {
  id: StoreId;
  name: string;
  type: string;
  city: string;
  manager: string;
  role: string;
  plan: string;
};

export type Product = {
  id: string;
  storeId: StoreId;
  name: string;
  category: string;
  qty: number;
  unit: string;
  cost: number;
  price: number;
  expiresAt: string;
  location: string;
};

export type AlertItem = {
  id: string;
  storeId: StoreId;
  tone: "critico" | "alerta" | "ok";
  title: string;
  message: string;
  time: string;
};

export type Offer = {
  id: string;
  storeId: StoreId;
  productId: string;
  discountPct: number;
  status: "sugerida" | "ativa" | "reservada";
  interested: number;
  consumer?: string;
};

export const stores: Store[] = [
  {
    id: "supermercado-central",
    name: "Supermercado Central",
    type: "Supermercado",
    city: "Joinville, SC",
    manager: "Carla Mendes",
    role: "Gerente de perecíveis",
    plan: "Profissional",
  },
  {
    id: "restaurante-villa",
    name: "Restaurante Villa",
    type: "Restaurante",
    city: "Joinville, SC",
    manager: "Rafael Costa",
    role: "Chefe de cozinha",
    plan: "Essencial",
  },
];

export const products: Product[] = [
  {
    id: "sc-01",
    storeId: "supermercado-central",
    name: "Alface crespa orgânica",
    category: "Hortifruti",
    qty: 42,
    unit: "un",
    cost: 2.1,
    price: 4.99,
    expiresAt: addDays(0),
    location: "Gôndola A1",
  },
  {
    id: "sc-02",
    storeId: "supermercado-central",
    name: "Tomate italiano",
    category: "Hortifruti",
    qty: 28,
    unit: "kg",
    cost: 5.4,
    price: 9.9,
    expiresAt: addDays(1),
    location: "Gôndola A2",
  },
  {
    id: "sc-03",
    storeId: "supermercado-central",
    name: "Iogurte natural 170g",
    category: "Laticínios",
    qty: 64,
    unit: "un",
    cost: 2.35,
    price: 4.49,
    expiresAt: addDays(2),
    location: "Geladeira 3",
  },
  {
    id: "sc-04",
    storeId: "supermercado-central",
    name: "Leite integral 1L",
    category: "Laticínios",
    qty: 90,
    unit: "un",
    cost: 3.8,
    price: 6.29,
    expiresAt: addDays(3),
    location: "Geladeira 1",
  },
  {
    id: "sc-05",
    storeId: "supermercado-central",
    name: "Queijo minas padrão",
    category: "Laticínios",
    qty: 16,
    unit: "kg",
    cost: 28.0,
    price: 49.9,
    expiresAt: addDays(4),
    location: "Balcão frios",
  },
  {
    id: "sc-06",
    storeId: "supermercado-central",
    name: "Banana prata",
    category: "Hortifruti",
    qty: 38,
    unit: "kg",
    cost: 3.2,
    price: 6.49,
    expiresAt: addDays(2),
    location: "Gôndola B1",
  },
  {
    id: "sc-07",
    storeId: "supermercado-central",
    name: "Peito de frango resfriado",
    category: "Açougue",
    qty: 22,
    unit: "kg",
    cost: 14.5,
    price: 22.9,
    expiresAt: addDays(1),
    location: "Câmara 2",
  },
  {
    id: "sc-08",
    storeId: "supermercado-central",
    name: "Pão francês do dia",
    category: "Padaria",
    qty: 80,
    unit: "un",
    cost: 0.45,
    price: 1.2,
    expiresAt: addDays(0),
    location: "Padaria",
  },
  {
    id: "sc-09",
    storeId: "supermercado-central",
    name: "Cenoura baby",
    category: "Hortifruti",
    qty: 18,
    unit: "kg",
    cost: 4.1,
    price: 7.99,
    expiresAt: addDays(5),
    location: "Gôndola A3",
  },
  {
    id: "sc-10",
    storeId: "supermercado-central",
    name: "Manteiga extra 200g",
    category: "Laticínios",
    qty: 40,
    unit: "un",
    cost: 7.2,
    price: 12.9,
    expiresAt: addDays(12),
    location: "Geladeira 2",
  },
  {
    id: "sc-11",
    storeId: "supermercado-central",
    name: "Maçã gala",
    category: "Hortifruti",
    qty: 50,
    unit: "kg",
    cost: 6.0,
    price: 11.9,
    expiresAt: addDays(8),
    location: "Gôndola B2",
  },
  {
    id: "sc-12",
    storeId: "supermercado-central",
    name: "Iogurte grego 100g",
    category: "Laticínios",
    qty: 36,
    unit: "un",
    cost: 2.9,
    price: 5.79,
    expiresAt: addDays(6),
    location: "Geladeira 3",
  },
  {
    id: "rv-01",
    storeId: "restaurante-villa",
    name: "Filé de tilápia",
    category: "Proteínas",
    qty: 8,
    unit: "kg",
    cost: 28.0,
    price: 0,
    expiresAt: addDays(0),
    location: "Câmara fria",
  },
  {
    id: "rv-02",
    storeId: "restaurante-villa",
    name: "Mussarela fatiada",
    category: "Laticínios",
    qty: 4.5,
    unit: "kg",
    cost: 32.0,
    price: 0,
    expiresAt: addDays(1),
    location: "Geladeira cozinha",
  },
  {
    id: "rv-03",
    storeId: "restaurante-villa",
    name: "Rúcula hidropônica",
    category: "Hortifruti",
    qty: 12,
    unit: "un",
    cost: 3.5,
    price: 0,
    expiresAt: addDays(1),
    location: "Câmara legumes",
  },
  {
    id: "rv-04",
    storeId: "restaurante-villa",
    name: "Creme de leite fresco",
    category: "Laticínios",
    qty: 10,
    unit: "L",
    cost: 9.8,
    price: 0,
    expiresAt: addDays(2),
    location: "Geladeira cozinha",
  },
  {
    id: "rv-05",
    storeId: "restaurante-villa",
    name: "Peito de frango",
    category: "Proteínas",
    qty: 14,
    unit: "kg",
    cost: 13.9,
    price: 0,
    expiresAt: addDays(3),
    location: "Câmara fria",
  },
  {
    id: "rv-06",
    storeId: "restaurante-villa",
    name: "Tomate cereja",
    category: "Hortifruti",
    qty: 6,
    unit: "kg",
    cost: 11.0,
    price: 0,
    expiresAt: addDays(2),
    location: "Câmara legumes",
  },
  {
    id: "rv-07",
    storeId: "restaurante-villa",
    name: "Pão ciabatta",
    category: "Padaria",
    qty: 24,
    unit: "un",
    cost: 1.8,
    price: 0,
    expiresAt: addDays(0),
    location: "Pass-through",
  },
  {
    id: "rv-08",
    storeId: "restaurante-villa",
    name: "Molho pesto 500g",
    category: "Insumos",
    qty: 3,
    unit: "pote",
    cost: 18.0,
    price: 0,
    expiresAt: addDays(4),
    location: "Geladeira mise",
  },
  {
    id: "rv-09",
    storeId: "restaurante-villa",
    name: "Batata asterix",
    category: "Hortifruti",
    qty: 20,
    unit: "kg",
    cost: 3.4,
    price: 0,
    expiresAt: addDays(7),
    location: "Despensa",
  },
  {
    id: "rv-10",
    storeId: "restaurante-villa",
    name: "Azeite extra virgem 500ml",
    category: "Secos",
    qty: 8,
    unit: "un",
    cost: 22.0,
    price: 0,
    expiresAt: addDays(40),
    location: "Despensa",
  },
];

export const alerts: AlertItem[] = [
  {
    id: "a1",
    storeId: "supermercado-central",
    tone: "critico",
    title: "Validade hoje",
    message: "Alface crespa e pão francês vencem hoje. Sugestão: promoção relâmpago na ponta de gôndola.",
    time: "há 8 min",
  },
  {
    id: "a2",
    storeId: "supermercado-central",
    tone: "alerta",
    title: "Risco em 24h",
    message: "Tomate italiano e peito de frango entram em zona vermelha amanhã. 28 kg + 22 kg em risco.",
    time: "há 22 min",
  },
  {
    id: "a3",
    storeId: "supermercado-central",
    tone: "ok",
    title: "Oferta publicada",
    message: "3 consumidores do bairro América visualizaram o lote de iogurte com 30% off.",
    time: "há 1 h",
  },
  {
    id: "a4",
    storeId: "restaurante-villa",
    tone: "critico",
    title: "Insumo crítico",
    message: "Filé de tilápia e ciabatta vencem hoje. Ajuste o cardápio do almoço ou abra oferta no app.",
    time: "há 5 min",
  },
  {
    id: "a5",
    storeId: "restaurante-villa",
    tone: "alerta",
    title: "Pré-alerta 48h",
    message: "Mussarela e rúcula vencem amanhã. Produza especial da casa ou publique no marketplace.",
    time: "há 40 min",
  },
];

export const offers: Offer[] = [
  {
    id: "o1",
    storeId: "supermercado-central",
    productId: "sc-01",
    discountPct: 40,
    status: "ativa",
    interested: 11,
  },
  {
    id: "o2",
    storeId: "supermercado-central",
    productId: "sc-08",
    discountPct: 50,
    status: "reservada",
    interested: 6,
    consumer: "Marina S.",
  },
  {
    id: "o3",
    storeId: "supermercado-central",
    productId: "sc-03",
    discountPct: 30,
    status: "sugerida",
    interested: 0,
  },
  {
    id: "o4",
    storeId: "restaurante-villa",
    productId: "rv-01",
    discountPct: 35,
    status: "ativa",
    interested: 4,
  },
  {
    id: "o5",
    storeId: "restaurante-villa",
    productId: "rv-07",
    discountPct: 45,
    status: "sugerida",
    interested: 0,
  },
];

export function riskOf(expiresAt: string): RiskLevel {
  const days = (() => {
    const target = new Date(`${expiresAt}T12:00:00`);
    const start = new Date();
    start.setHours(12, 0, 0, 0);
    return Math.round((target.getTime() - start.getTime()) / 86_400_000);
  })();
  if (days <= 0) return "critico";
  if (days <= 2) return "alto";
  if (days <= 5) return "medio";
  return "ok";
}

export function atRiskValue(product: Product) {
  const risk = riskOf(product.expiresAt);
  if (risk === "ok") return 0;
  return product.qty * (product.price > 0 ? product.price : product.cost);
}

export function storeById(id: StoreId) {
  return stores.find((s) => s.id === id)!;
}

export function productsByStore(id: StoreId) {
  return products.filter((p) => p.storeId === id);
}

export function productById(id: string) {
  return products.find((p) => p.id === id);
}
