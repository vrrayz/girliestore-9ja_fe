import { deleteData, getData, postData, postDataUpload } from "./apiRequest";

export const getProducts = async (data: {}) => {
  const request = await getData("/product", data);
  if (request.statusCode === 200) {
    return request.data;
  }
  return request;
};

export const getDiscountedProducts = async () => {
  const request = await getData("/product/discount");
  if (request.statusCode === 200) {
    return request.data;
  }
  return request;
};

export const getProduct = async (id: number) => {
  const request = await getData(`/product/${id}`);
  if (request.statusCode === 200) {
    return request.data;
  }
  return request;
};

export const addProduct = async (data: FormData) => {
  const request = await postDataUpload("/product/create", data, "POST");
  return {
    statusCode: request.statusCode,
    message: request.message,
    data: request.data,
  };
};

export const getTrendingProducts = async () => {
  const request = await getData("/product/trending");
  if (request.statusCode === 200) {
    return request.data;
  }
  return request;
};

export const recordProductView = async (data: FormData) => {
  const request = await postData("/product-view/create", data);
  if (request.statusCode === 200) {
    return request.data;
  }
  return request;
};

export const recordCartPoints = async (data: FormData) => {
  const request = await postData("/product-engagement/cart-points", data);
  if (request.statusCode === 200) {
    return request.data;
  }
  return request;
};

// export const deleteShop = async (data = {}, productId: number) => {
//   const request = await deleteData("/product/delete/" + productId);
//   return {
//     statusCode: request.statusCode,
//     message: request.message,
//     data: request.data,
//   };
// };

// export const editClasses = async (data = {}, classId: number) => {
//   const request = await postData(
//     "/classes/edit/" + classId,
//     data,
//     "PATCH",
//     "application/json"
//   );
//   return {
//     statusCode: request.statusCode,
//     message: request.message,
//   };
// };
