export const shops = ["migros", "bim", "a101"] as const;
export const categories = [
  "elektronik",
  "şarküteri",
  "oyuncak",
  "fırın",
] as const;

export interface Product {
  id: string;
  name: string;
  shop: (typeof shops)[number];
  category: (typeof categories)[number];
  isBought?: boolean;
}

export interface AddProductFormProps {
  onAdd: (product: Product) => void;
}

export interface ProductTableProps {
  products: Product[];
  onDelete: (id: string) => void;
  onToggleBought: (id: string) => void;
}
