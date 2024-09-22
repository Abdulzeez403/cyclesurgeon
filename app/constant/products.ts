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

// constant/products.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  stock: boolean;
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

  {
    href: "/",
    imgSrc: "/category/helmet.jpg",
    alt: "helmet.jpg",
    title: "Hemlet",
    price: "5,000",
    oldPrice: "6,500",
    discount: "1000",
    rating: 5,
    reviews: 15,
  },
];

// Example Product List (or a single product if it's not an array)
export const AProduct: Product[] = [
  {
    id: "1",
    name: "Product Name",
    price: 99.99,
    description:
      "This solution ensures that the image list is vertical on larger screens, horizontal and scrollable on mobile devices, and that users can click thumbnails to change the main image. Let me know if you need further adjustments!",
    images: [
      "/air_pump.jpg",
      "/eletrctric_bike.jpg",
      "/Polyester_Bike.jpg",
      "/Polyester_Bike.jpg",
    ],

    stock: true,
  },
  // Add more products if needed
];
