import { Wishlist } from "@/types";
import { userMock } from "./users";
import { productsJson } from "./products";

export const wishlistMock: Wishlist[] = [
  {
    id: "5e87adf2-b868-4a22-bd6f-49b60749fdd9",
    productId: 3,
    product: productsJson[0],
    userId: 2,
    user: userMock,
    createdAt: new Date("2025-03-14T19:36:02.468Z"),
    updatedAt: new Date("2025-03-14T19:36:02.468Z"),
  },
  {
    id: "5e87adf2-b868-4a22-bd6f-49b60749fdd9",
    productId: 3,
    product: productsJson[2],
    userId: 2,
    user: userMock,
    createdAt: new Date("2025-03-14T19:36:02.468Z"),
    updatedAt: new Date("2025-03-14T19:36:02.468Z"),
  },
];
