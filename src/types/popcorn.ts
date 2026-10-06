export type PopcornType = 'salgada' | 'doce';

export interface PopcornSize {
  id: string;
  name: string;
  category: 'saquinho' | 'caixinha';
  price: number;
  highlight?: boolean;
  tag?: string;
  badgeDescription?: string;
  servings?: string;
  image?: string;
}

export const SIZES: PopcornSize[] = [
  {
    id: 'saquinho-pequeno',
    name: 'Saquinho Pequeno',
    category: 'saquinho',
    price: 5.0,
    tag: 'Individual',
    servings: '1 pessoa',
  },
  {
    id: 'caixinha-pequena',
    name: 'Caixinha Pequena',
    category: 'caixinha',
    price: 7.0,
    tag: 'Prática',
    servings: '1 pessoa',
  },
  {
    id: 'saquinho-medio',
    name: 'Saquinho Médio',
    category: 'saquinho',
    price: 8.0,
    tag: 'Favorito',
    servings: '1 a 2 pessoas',
  },
  {
    id: 'caixinha-media',
    name: 'Caixinha Média',
    category: 'caixinha',
    price: 9.0,
    tag: 'Cinema em Casa',
    servings: '1 a 2 pessoas',
  },
  {
    id: 'saquinho-grande',
    name: 'Saquinho Grande',
    category: 'saquinho',
    price: 10.0,
    tag: 'Super Sabor',
    servings: '2 pessoas',
  },
  {
    id: 'caixinha-grande',
    name: 'Caixinha Grande',
    category: 'caixinha',
    price: 12.0,
    tag: 'Para Dividir',
    servings: '2 a 3 pessoas',
  },
  {
    id: 'saquinho-gg',
    name: 'Saquinho GG',
    category: 'saquinho',
    price: 17.0,
    tag: 'Mega Porção',
    servings: '3 a 4 pessoas',
  },
  {
    id: 'saquinho-xg',
    name: 'Saquinho XG',
    category: 'saquinho',
    price: 20.0,
    highlight: true,
    tag: 'O GIGANTE POPCORN 🔥',
    badgeDescription: 'Embalagem gigante para a turma toda!',
    servings: 'Galera / Família',
  },
];

export const SALGADA_INGREDIENTS = [
  { id: 'manteiga', name: 'Manteiga especial', defaultIncluded: true },
  { id: 'bacon', name: 'Bacon crocante', defaultIncluded: true },
  { id: 'calabresa', name: 'Calabresa fatiadinha', defaultIncluded: true },
  { id: 'queijo-ralado', name: 'Queijo ralado', defaultIncluded: true },
];

export const DOCE_TOPPINGS = [
  { id: 'fini-dentadura', name: 'Fini Dentadura 🦷', category: 'fini' },
  { id: 'fini-banana', name: 'Fini Banana 🍌', category: 'fini' },
  { id: 'fini-beijinho', name: 'Fini Beijinho 💋', category: 'fini' },
  { id: 'leite-condensado', name: 'Leite condensado 🥛', category: 'calda' },
  { id: 'chocolate', name: 'Chocolate 🍫', category: 'calda' },
  { id: 'chocolate-branco', name: 'Chocolate branco 🍦', category: 'calda' },
  { id: 'caramelo', name: 'Caramelo especial 🍯', category: 'calda' },
];

export const CONDIMENTS = [
  { id: 'leite-em-po', name: 'Leite em pó', icon: '🥛' },
  { id: 'coco-ralado', name: 'Coco ralado', icon: '🥥' },
  { id: 'amendoim', name: 'Amendoim crocante', icon: '🥜' },
  { id: 'granulado-chocolate', name: 'Granulado de chocolate', icon: '🍫' },
  { id: 'granulado-colorido', name: 'Granulado colorido', icon: '🌈' },
];

export interface OrderItem {
  id: string;
  type: PopcornType;
  sizeId: string;
  sizeName: string;
  unitPrice: number;
  quantity: number;
  salgadaIngredients?: string[];
  doceToppings?: string[];
  condiments?: string[];
  notes?: string;
}

export const WHATSAPP_PHONE = '5521965802404';
export const WHATSAPP_DISPLAY = '21 96580-2404';
export const INSTAGRAM_HANDLE = '@popcorn_conceicao';
export const INSTAGRAM_URL = 'https://www.instagram.com/popcorn_conceicao?stkn=MW10ZGlwNWU5aHdmMg==';
export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Popcorn+Concei%C3%A7%C3%A3o+de+Jacare%C3%AD';

export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function buildWhatsAppLink(order: OrderItem): string {
  const flavorName = order.type === 'salgada' ? 'Pipoca Salgada na Manteiga' : 'Pipoca Doce Caramelizada';

  let toppingsAndCondiments = '';
  if (order.type === 'salgada') {
    const ingr = order.salgadaIngredients && order.salgadaIngredients.length > 0
      ? order.salgadaIngredients.join(', ')
      : 'Bacon, Calabresa, Queijo ralado e Manteiga';
    toppingsAndCondiments = ingr;
  } else {
    const toppingsList = order.doceToppings && order.doceToppings.length > 0
      ? order.doceToppings.join(', ')
      : 'Nenhuma cobertura';
    const condList = order.condiments && order.condiments.length > 0
      ? order.condiments.join(', ')
      : 'Nenhum condimento';
    toppingsAndCondiments = `Coberturas: ${toppingsList}\nCondimentos: ${condList}`;
  }

  const total = order.unitPrice * order.quantity;

  const message = `Olá! Quero fazer um pedido na Popcorn 🍿

Meu pedido:
${flavorName}

Tamanho:
${order.sizeName}

Cobertura/condimentos:
${toppingsAndCondiments}

Quantidade:
${order.quantity}

Valor total:
${formatCurrency(total)}

Gostaria de confirmar meu pedido.`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function buildQuickWhatsAppLink(customText?: string): string {
  const text = customText || 'Olá! Vim pelo site da Popcorn e gostaria de ver o cardápio e fazer um pedido 🍿';
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
