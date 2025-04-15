import { CartItem, Product, TrendingProduct } from "@/types";

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
    subCategory: {
      id: 1,
      name: "Demo1",
    },
    subCategoryId: 1,
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
    subCategory: {
      id: 1,
      name: "Demo1",
    },
    subCategoryId: 1,
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
    subCategory: {
      id: 1,
      name: "Demo1",
    },
    subCategoryId: 1,
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
    subCategory: {
      id: 1,
      name: "Demo1",
    },
    subCategoryId: 1,
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
    subCategory: {
      id: 1,
      name: "Demo1",
    },
    subCategoryId: 1,
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

export const trendingProductsJson = [
  {
    id: "19fdcdea-3f00-4aa0-a5ff-6d3b194ef490",
    productId: 1,
    score: "5",
    createdAt: new Date("2025-03-14T19:36:02.468Z"),
    updatedAt: new Date("2025-03-14T19:36:02.468Z"),
    product: {
      id: 1,
      name: "First Top",
      description: "This is a description for tops",
      imageLabels: null,
      categoryId: 1,
      subCategoryId: 1,
      subCategory: {
        id: 1,
        name: "Demo1",
      },
      category: {
        id: 1,
        name: "Shoes",
      },
      shopId: 1,
      price: 4066.25,
      quantity: 178,
      size: 40,
      unit: "cm",
      color: "red",
      createdAt: new Date("2025-02-04T07:33:06.957Z"),
      updatedAt: new Date("2025-02-04T07:33:06.957Z"),
      photos: [
        {
          url: "https://res.cloudinary.com/dnxhfgvtu/image/upload/v1718040402/ytwgfyksyh6gufqlvyhu.png",
        },
      ],
    },
  },
  {
    id: "d48c27a1-7954-4524-97ad-1937f0e471fb",
    productId: 2,
    score: "3",
    createdAt: new Date("2025-03-14T19:36:02.468Z"),
    updatedAt: new Date("2025-03-14T19:36:02.468Z"),
    product: {
      id: 2,
      name: "Second Top",
      description: "This is a description for tops",
      imageLabels: null,
      categoryId: 1,
      category: {
        id: 1,
        name: "Shoes",
      },
      subCategoryId: 1,
      subCategory: {
        id: 1,
        name: "Demo1",
      },
      shopId: 1,
      price: 3471.59,
      quantity: 111,
      size: 40,
      unit: "cm",
      color: "red",
      createdAt: new Date("2025-02-04T07:33:06.957Z"),
      updatedAt: new Date("2025-02-04T07:33:06.957Z"),
      photos: [
        {
          url: "https://res.cloudinary.com/dnxhfgvtu/image/upload/v1718040402/ytwgfyksyh6gufqlvyhu.png",
        },
      ],
    },
  },
  {
    id: "06aa8e1d-e967-4be0-9173-a2c49d96b512",
    productId: 3,
    score: "2",
    createdAt: new Date("2025-03-14T19:36:02.468Z"),
    updatedAt: new Date("2025-03-14T19:36:02.468Z"),
    product: {
      id: 3,
      name: "Third Top",
      description: "This is a description for tops",
      imageLabels: null,
      categoryId: 1,
      category: {
        id: 1,
        name: "Shoes",
      },
      subCategoryId: 1,
      subCategory: {
        id: 1,
        name: "Demo1",
      },
      shopId: 1,
      price: 1407.73,
      quantity: 152,
      size: 40,
      unit: "cm",
      color: "red",
      createdAt: new Date("2025-02-04T07:33:06.957Z"),
      updatedAt: new Date("2025-02-04T07:33:06.957Z"),
      photos: [
        {
          url: "https://res.cloudinary.com/dnxhfgvtu/image/upload/v1718040402/ytwgfyksyh6gufqlvyhu.png",
        },
      ],
    },
  },
];
export const productsMock: Product[] = productsJson;
export const trendingProductsMock: TrendingProduct[] = trendingProductsJson;
