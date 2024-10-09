export interface ProductCardProps {
  id: number;
  images: string[];
  name: string;
  description?: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating?: number;
  reviews?: number;
  badgeText?: string;
  stock?: boolean;
}

export interface CartItem {
  id: number;
  image: string;
  quantity: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating?: number;
  reviews?: number;
  badgeText?: string;
  stock?: boolean;
}
