import { deleteData, getData, postData, postDataUpload } from "./apiRequest";

export const getShops = async () => {
  const request = await getData("/shop/");
  if (request.statusCode === 200) {
    return request.data;
  }
  return request;
};

export const addShop = async (data: FormData) => {
  const request = await postDataUpload("/shop/create", data, "POST");
  return {
    statusCode: request.statusCode,
    message: request.message,
    data: request.data,
  };
};

// export const deleteShop = async (data = {}, shopId: number) => {
//   const request = await deleteData("/shop/delete/" + shopId);
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