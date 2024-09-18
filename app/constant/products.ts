export interface ProductCardProps {
  href: string;
  imgSrc: string;
  alt: string;
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
  rating?: number;
  reviews?: number;
  isExpress?: boolean;
  badgeText?: string;
}

export const productsData: ProductCardProps[] = [
  {
    href: "/",
    imgSrc: "/air_pump.jpg",
    alt: "air_pump",
    title: "Air Pump",
    price: "9,000",
    oldPrice: "10,500",
    discount: "500",
    rating: 3,
    reviews: 10,
  },
  {
    href: "/",
    imgSrc: "/bicycle_chain_cable_key_lock.jpg",
    alt: "air_pump",
    title: "Bicycle Chain Cable Key lock",
    price: "6,000",
    oldPrice: "8,500",
    discount: "200",
    rating: 4,
    reviews: 6,
  },
  {
    href: "/",
    imgSrc: "/wicker_Bicyle_basket.jpg",
    alt: "air_pump",
    title: "Wicker Bicycle Basket",
    price: "6,000",
    oldPrice: "8,500",
    discount: "200",
    rating: 2,
    reviews: 10,
  },
  {
    href: "/",
    imgSrc: "/eletrctric_bike.jpg",
    alt: "air_pump",
    title: "Electric Bike",
    price: "60,000",
    oldPrice: "80,500",
    discount: "2000",
    rating: 4,
    reviews: 10,
  },

  {
    href: "/",
    imgSrc: "/kid_children.jpg",
    alt: "kid_children.jpg",
    title: "Kid Bicycle",
    price: "80,000",
    oldPrice: "100,500",
    discount: "3000",
    rating: 5,
    reviews: 15,
  },
];
