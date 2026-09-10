import type { StoreId } from "../data/mock";

const KEY = "maxfood-demo-store";

export function getStoreId(): StoreId | null {
  const value = localStorage.getItem(KEY);
  if (value === "supermercado-central" || value === "restaurante-villa") {
    return value;
  }
  return null;
}

export function setStoreId(id: StoreId) {
  localStorage.setItem(KEY, id);
}

export function clearStoreId() {
  localStorage.removeItem(KEY);
}
