import { CartItem, Product } from "@/types";

export const productsJson = [
  {
    id: 25,
    name: "Shoe One",
    photos: [
      // {
      //   url: "https://res.cloudinary.com/dnxhfgvtu/image/upload/v1718040402/ytwgfyksyh6gufqlvyhu.png",
      // },
      {
        url: "https://i.imgur.com/9rvNrFA.jpeg",
      },
      { url: "https://i.imgur.com/ZMfOt27.jpeg" },
      { url: "https://i.imgur.com/1zWhuYZ.jpeg" },
      { url: "https://i.imgur.com/7JVrYg7.jpeg" },
    ],
    description: "Lorem ipsum...",
    categoryId: 25,
    category: {
      id: 25,
      name: "Shoes",
    },
    shopId: 1,
    quantity: 3,
    price: 363,
    color: "red",
    unit: "packs",
    size: 25,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 26,
    name: "Shoe Two",
    photos: [
      {
        url: "https://res.cloudinary.com/dnxhfgvtu/image/upload/v1718040402/ytwgfyksyh6gufqlvyhu.png",
      },
    ],
    description: "Lorem ipsum...",
    categoryId: 25,
    category: {
      id: 25,
      name: "Shoes",
    },
    shopId: 1,
    quantity: 3,
    price: 363,
    color: "red",
    unit: "packs",
    size: 25,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 27,
    name: "Shoe Three",
    photos: [
      {
        url: "https://res.cloudinary.com/dnxhfgvtu/image/upload/v1718040402/ytwgfyksyh6gufqlvyhu.png",
      },
    ],
    description: "Lorem ipsum...",
    categoryId: 25,
    category: {
      id: 25,
      name: "Shoes",
    },
    shopId: 1,
    quantity: 3,
    price: 363,
    color: "red",
    unit: "packs",
    size: 25,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 28,
    name: "Shoe Four",
    photos: [
      {
        url: "https://res.cloudinary.com/dnxhfgvtu/image/upload/v1718040402/ytwgfyksyh6gufqlvyhu.png",
      },
    ],
    description: "Lorem ipsum...",
    categoryId: 25,
    category: {
      id: 25,
      name: "Shoes",
    },
    shopId: 1,
    quantity: 3,
    price: 363,
    color: "red",
    unit: "packs",
    size: 25,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 26,
    name: "Shoe Two",
    photos: [
      {
        url: "https://res.cloudinary.com/dnxhfgvtu/image/upload/v1718040402/ytwgfyksyh6gufqlvyhu.png",
      },
    ],
    description: "Lorem ipsum...",
    categoryId: 25,
    category: {
      id: 25,
      name: "Shoes",
    },
    shopId: 1,
    quantity: 3,
    price: 363,
    color: "red",
    unit: "packs",
    size: 25,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
export const productsMock: Product[] = productsJson;
