import type { Category, Product } from "@/types/menu";

export const BUSINESS = {
  name: "Doripinchos",
  tagline: "Comida rápida con sabor brutal, preparada para antojos serios.",
  whatsapp: "573132726775",
  whatsappDisplay: "313 272 6775",
  disposableNotice:
    "Ten en cuenta que cada desechable tiene un costo adicional de $500",
} as const;

export const CATEGORIES: Category[] = [
  { id: "hamburguesas", label: "Hamburguesas", emoji: "🍔" },
  { id: "perros", label: "Perros", emoji: "🌭" },
  { id: "salchipapas", label: "Salchipapas", emoji: "🍟" },
  { id: "doritos", label: "Doritos", emoji: "🌶️" },
  { id: "arepas", label: "Arepas", emoji: "🫓" },
  { id: "burrilocos", label: "Burrilocos", emoji: "🌯" },
  { id: "papas-locas", label: "Papas Locas", emoji: "🥔" },
  { id: "pinchos", label: "Pinchos", emoji: "🍢" },
  { id: "platos-especiales", label: "Platos Especiales", emoji: "🍽️" },
  { id: "adiciones", label: "Adiciones", emoji: "➕" },
  { id: "bebidas", label: "Bebidas", emoji: "🥤" },
];

export const PRODUCTS: Product[] = [
  // HAMBURGUESAS
  {
    id: "hb-sencilla",
    name: "Hamburguesa Sencilla",
    description: "Papa ripio, vegetales y carne artesanal.",
    price: 12000,
    category: "hamburguesas",
  },
  {
    id: "hb-pollo-loco",
    name: "Burger Pollo Loco",
    description: "Pollo, papa ripio, vegetales y salsas.",
    price: 17000,
    category: "hamburguesas",
    badges: ["Popular"],
  },
  {
    id: "hb-doble",
    name: "Hamburguesa Doble Carne",
    description: "Papa ripio, vegetales y dos carnes artesanales.",
    price: 18000,
    category: "hamburguesas",
  },
  {
    id: "hb-montanera",
    name: "Hamburguesa Montañera",
    description:
      "Papa ripio, carne artesanal, tocineta, vegetales, chicharrón, maduritos y queso gratinado.",
    price: 23000,
    category: "hamburguesas",
    badges: ["Recomendado", "Grande"],
  },

  // PERROS
  {
    id: "pe-sencillo",
    name: "Perro Sencillo",
    description: "Salchicha parrillera, queso y papa ripio.",
    price: 9000,
    category: "perros",
  },
  {
    id: "pe-tocineta",
    name: "Perro con Tocineta",
    description: "Salchicha parrillera, queso, papa ripio y tocineta.",
    price: 12000,
    category: "perros",
  },
  {
    id: "pe-chori",
    name: "Chori Perro",
    description: "Chorizo, queso gratinado, tocineta, papa ripio y salsas.",
    price: 14000,
    category: "perros",
  },
  {
    id: "pe-montanero",
    name: "Perro Montañero",
    description:
      "Tocineta, chicharrón, queso gratinado, salchicha parrillera y papa ripio.",
    price: 15000,
    category: "perros",
  },
  {
    id: "pe-loco",
    name: "Perro Loco",
    description:
      "Salchicha parrillera, maíz tierno, maduritos, tocineta, queso gratinado y papa ripio.",
    price: 17000,
    category: "perros",
    badges: ["Popular"],
  },

  // SALCHIPAPAS
  {
    id: "sa-sencilla",
    name: "Salchipapa Sencilla",
    description:
      "Salchicha parrillera, papa francesa, queso gratinado y huevo de codorniz.",
    price: 12000,
    category: "salchipapas",
  },
  {
    id: "sa-mixta",
    name: "Salchipapa Mixta",
    description:
      "Salchicha parrillera, papa francesa, huevo de codorniz, pollo, carne, maíz tierno, maduritos, queso gratinado y papa ripio.",
    price: 26000,
    category: "salchipapas",
  },
  {
    id: "sa-loca",
    name: "Salchipapa Loca",
    description:
      "Salchicha parrillera, papa francesa, huevo de codorniz, pollo, carne, maíz tierno, maduritos, queso gratinado, papa ripio, tocineta y chicharrón.",
    price: 29000,
    category: "salchipapas",
    badges: ["Recomendado"],
  },
  {
    id: "sa-montanera-familiar",
    name: "Salchipapa Montañera Familiar",
    description:
      "Salchicha parrillera, doritos, papa francesa, carne desmechada, pollo desmechado, maíz tierno, maduritos, queso gratinado, tocineta y chicharrón.",
    price: 60000,
    category: "salchipapas",
    badges: ["Grande"],
  },

  // DORITOS
  {
    id: "do-carne",
    name: "Dorito Carne",
    description:
      "Carne desmechada, maíz tierno, pico de gallo, queso, salchicha parrillera, maduritos y salsa de la casa.",
    price: 16000,
    category: "doritos",
  },
  {
    id: "do-pollo",
    name: "Dorito Pollo",
    description:
      "Pollo desmechado, maíz tierno, pico de gallo, salchicha parrillera, queso, maduritos y salsa de la casa.",
    price: 16000,
    category: "doritos",
  },
  {
    id: "do-mixto",
    name: "Dorito Mixto",
    description:
      "Carne desmechada, pollo desmechado, pico de gallo, salchicha parrillera, queso, maduritos, maíz tierno y salsa de la casa.",
    price: 19000,
    category: "doritos",
  },
  {
    id: "do-flamin",
    name: "Dorito Picante Flamin Hot",
    description:
      "Carne desmechada, pollo desmechado, maíz tierno, salchicha, pico de gallo picante, maduro, jalapeños, queso y salsas.",
    price: 19500,
    category: "doritos",
    badges: ["Picante"],
  },
  {
    id: "do-montanero",
    name: "Dorito Montañero",
    description:
      "Pollo desmechado, carne desmechada, pico de gallo, salchicha parrillera, maduritos, chicharrón, tocineta, maíz tierno y queso gratinado.",
    price: 22000,
    category: "doritos",
    badges: ["Recomendado"],
  },

  // AREPAS
  { id: "ar-queso", name: "Arepa de Queso", price: 8000, category: "arepas" },
  { id: "ar-carne", name: "Arepa de Carne", price: 10000, category: "arepas" },
  { id: "ar-pollo", name: "Arepa de Pollo", price: 10000, category: "arepas" },
  { id: "ar-mixta", name: "Arepa Mixta", price: 13000, category: "arepas" },
  {
    id: "ar-burger",
    name: "Arepa de Burger",
    description: "Carne artesanal, queso, maduritos, maíz tierno y salsas.",
    price: 16000,
    category: "arepas",
  },
  {
    id: "ar-casa",
    name: "Arepa de la Casa",
    description:
      "Carne desmechada, pollo desmechado, maíz tierno, pico de gallo, salchicha parrillera, queso, maduritos y salsa de la casa.",
    price: 15500,
    category: "arepas",
    badges: ["Popular"],
  },
  {
    id: "ar-montanera",
    name: "Arepa Montañera",
    description:
      "Carne desmechada, pollo desmechado, queso gratinado, maduritos, salchicha parrillera, tocineta, chicharrón, salsa de la casa y maíz tierno.",
    price: 20000,
    category: "arepas",
    badges: ["Grande"],
  },

  // BURRILOCOS
  {
    id: "bu-carne",
    name: "Burriloco de Carne",
    description:
      "Tortilla, carne desmechada, maíz tierno, maduritos, salchicha parrillera, pico de gallo, queso y salsa de la casa.",
    price: 15000,
    category: "burrilocos",
  },
  {
    id: "bu-pollo",
    name: "Burriloco de Pollo",
    description:
      "Tortilla, pollo desmechado, maíz tierno, maduritos, salchicha parrillera, pico de gallo, queso y salsa de la casa.",
    price: 15000,
    category: "burrilocos",
  },
  {
    id: "bu-mixto",
    name: "Burriloco Mixto",
    description:
      "Tortilla, carne desmechada, pollo desmechado, maíz tierno, maduritos, salchicha parrillera, pico de gallo, queso y salsa de la casa.",
    price: 18000,
    category: "burrilocos",
  },
  {
    id: "bu-montanero",
    name: "Burriloco Montañero",
    description:
      "Tortilla, carne desmechada, pollo desmechado, maíz tierno, maduritos, salchicha parrillera, pico de gallo, queso, chicharrón, tocineta y salsa de la casa.",
    price: 20000,
    category: "burrilocos",
  },
  {
    id: "bu-casa",
    name: "Burriloco de la Casa",
    description:
      "Tortilla, carne desmechada, pollo desmechado, maíz tierno, maduritos, salchicha parrillera, queso gratinado, pico de gallo, chicharrón, tocineta, huevo de codorniz y salsa de la casa.",
    price: 25000,
    category: "burrilocos",
    badges: ["Recomendado", "Grande"],
  },

  // PAPAS LOCAS
  {
    id: "pl-loquipapa",
    name: "Loquipapa",
    description:
      "Papa casco, carne desmechada, pollo desmechado, maíz tierno, maduritos, salchicha parrillera, queso, pico de gallo y salsa de la casa.",
    price: 17000,
    category: "papas-locas",
  },
  {
    id: "pl-loca",
    name: "Papa Loca",
    price: 20000,
    category: "papas-locas",
  },
  {
    id: "pl-montanera",
    name: "Papa Loca Montañera",
    description:
      "Papa casco, carne desmechada, pollo desmechado, maíz tierno, maduritos, salchicha parrillera, queso gratinado, tocineta, chicharrón, pico de gallo y salsa de la casa.",
    price: 26000,
    category: "papas-locas",
    badges: ["Grande"],
  },

  // PINCHOS
  { id: "pi-res", name: "Pincho de Res", price: 13000, category: "pinchos" },
  { id: "pi-pollo", name: "Pincho de Pollo", price: 13000, category: "pinchos" },
  { id: "pi-mixto", name: "Pincho Mixto", price: 14000, category: "pinchos" },
  {
    id: "pi-gratinado",
    name: "Pincho Gratinado",
    price: 16000,
    category: "pinchos",
    badges: ["Recomendado"],
  },

  // PLATOS ESPECIALES
  {
    id: "es-pechuga",
    name: "Pechuga Gratinada",
    description:
      "Pechuga de 250g, papas a la francesa y ensalada con vinagreta.",
    price: 20000,
    category: "platos-especiales",
  },
  {
    id: "es-churrasco",
    name: "Churrasco",
    description:
      "Churrasco de res 250g, papas a la francesa y ensalada con vinagreta.",
    price: 21000,
    category: "platos-especiales",
    badges: ["Recomendado"],
  },
  {
    id: "es-costillas",
    name: "Costillas BBQ",
    description: "Costillas BBQ, papas a la francesa y ensalada con vinagreta.",
    price: 22000,
    category: "platos-especiales",
  },

  // ADICIONES
  { id: "ad-papa", name: "Papa Francesa", price: 5000, category: "adiciones" },
  { id: "ad-codorniz", name: "Huevos de Codorniz", price: 4000, category: "adiciones" },
  { id: "ad-tocineta", name: "Tocineta", price: 5000, category: "adiciones" },
  { id: "ad-chicharron", name: "Chicharrón", price: 5000, category: "adiciones" },

  // BEBIDAS
  { id: "be-jugo-agua", name: "Jugo en Agua", price: 6000, category: "bebidas" },
  { id: "be-jugo-leche", name: "Jugo en Leche", price: 7000, category: "bebidas" },
  { id: "be-coca-500", name: "Coca Cola 500ml", price: 4000, category: "bebidas" },
  { id: "be-coca-1-5", name: "Coca Cola 1.5L", price: 9000, category: "bebidas" },
  { id: "be-agua-gas", name: "Agua con Gas", price: 3000, category: "bebidas" },
  { id: "be-agua", name: "Agua Natural", price: 3000, category: "bebidas" },
  { id: "be-hit", name: "Jugo Hit", price: 3500, category: "bebidas" },
  {
    id: "be-tamarindo",
    name: "Tamarindo Preparada",
    price: 5500,
    category: "bebidas",
  },
  { id: "be-quatro", name: "Quatro 1.5L", price: 8000, category: "bebidas" },
];
