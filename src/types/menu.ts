export type CategoryId =
  | "hamburguesas"
  | "perros"
  | "salchipapas"
  | "doritos"
  | "arepas"
  | "burrilocos"
  | "papas-locas"
  | "pinchos"
  | "platos-especiales"
  | "adiciones"
  | "bebidas";

export type ProductBadge = "Popular" | "Picante" | "Recomendado" | "Grande";

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: CategoryId;
  badges?: ProductBadge[];
}
