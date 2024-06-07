import { link } from "fs";
import { deleteData, getData, postData, postDataUpload } from "./apiRequest";

export const storeLinks = [
  { name: "My stores", link: "/user/store" },
  { name: "Products", link: "/user/product" },
  { name: "Orders", link: "#" },
];

export const getShops = async () => {
  const request = await getData("/shop");
  if (request.statusCode === 200) {
    return request.data;
  }
  return request;
};

export const getShop = async (id: number) => {
  const request = await getData(`/shop/${id}`);
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
