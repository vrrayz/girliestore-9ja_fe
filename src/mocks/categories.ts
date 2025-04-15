import { CartItem, Category } from "@/types";

export const categoriesJson = [
  {
    id: 25,
    name: "Shoes",
    subCategories: [
      {
        id: 1,
        name: "Demo1",
      },
    ],
  },
  {
    id: 27,
    name: "Bags",
    subCategories: [
      {
        id: 3,
        name: "Demo3",
      },
      {
        id: 10,
        name: "Demo10",
      },
    ],
  },
  {
    id: 18,
    name: "Jewelries",
    subCategories: [
      {
        id: 2,
        name: "Demo2",
      },
      {
        id: 7,
        name: "Demo7",
      },
      {
        id: 8,
        name: "Demo8",
      },
      {
        id: 9,
        name: "Demo9",
      },
    ],
  },
  {
    id: 50,
    name: "Toiletries",
    subCategories: [
      {
        id: 4,
        name: "Demo4",
      },
      {
        id: 5,
        name: "Demo5",
      },
      {
        id: 6,
        name: "Demo6",
      },
    ],
  },
];
export const categoryMock: Category[] = categoriesJson;
