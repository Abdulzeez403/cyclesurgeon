export interface ProductCardProps {
  id: string;
  images: string[];
  name: string;
  description?: string;
  price: string;
  oldPrice: string;
  discount: string;
  rating?: number;
  reviews?: number;
  badgeText?: string;
  stock?: boolean;
}

export const productsData: ProductCardProps[] = [
  {
    id: "1",
    images: ["/air_pump.jpg"],
    name: "Air Pump",
    price: "9,000",
    oldPrice: "10,500",
    discount: "500",
    rating: 3,
    reviews: 10,
    description: "new produc",
    stock: true,
  },
  {
    id: "2",
    images: ["/bicycle_chain_cable_key_lock.jpg"],
    name: "Bicycle Chain Cable Key lock",
    price: "6,000",
    oldPrice: "8,500",
    discount: "200",
    rating: 4,
    reviews: 6,
    description: "new produc",
    stock: true,
  },
  {
    id: "3",
    images: ["/wicker_Bicyle_basket.jpg"],
    name: "Wicker Bicycle Basket",
    price: "6,000",
    oldPrice: "8,500",
    discount: "200",
    rating: 2,
    reviews: 10,
    description: "new produc",
    stock: true,
  },
  {
    id: "4",
    images: ["/eletrctric_bike.jpg"],
    name: "Electric Bike",
    price: "60,000",
    oldPrice: "80,500",
    discount: "2000",
    rating: 4,
    reviews: 10,
    description: "new produc",
    stock: true,
  },

  {
    id: "5",
    images: ["/kid_children.jpg"],
    name: "Kid Bicycle",
    price: "80,000",
    oldPrice: "100,500",
    discount: "3000",
    rating: 5,
    reviews: 15,
    description: "new produc",
    stock: true,
  },

  {
    id: "6",
    images: ["/category/helmet.jpg"],
    name: "Hemlet",
    price: "5,000",
    oldPrice: "6,500",
    discount: "1000",
    rating: 5,
    reviews: 15,
    description: "new produc",
    stock: true,
  },
];

// Example Product List (or a single product if it's not an array)
export const AProduct: ProductCardProps[] = [
  {
    id: "1",
    name: "Product Name",
    price: "10.000",
    oldPrice: "9,000",
    discount: "1,000",
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
