import { deleteData, getData, postData } from "./apiRequest";

export const getWishlist = async () => {
  const request = await getData("/wishlist");
  if (request.statusCode === 200) {
    return request.data;
  }
  return request;
};

export const createWishlist = async (data: FormData) => {
  const request = await postData("/wishlist/create", data);
  if (request.statusCode === 200) {
    return request.data;
  }
  return request;
};

export const deleteWishlist = async (id: string) => {
  const request = await deleteData("/wishlist/" + id);
  if (request.statusCode === 200) {
    return request.data;
  }
  return request;
};
