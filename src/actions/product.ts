import { deleteData, getData, postData, postDataUpload } from "./apiRequest";

export const getProducts = async () => {
  const request = await getData("/product");
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
