import { deleteData, getData, postData } from "./apiRequest";

export const menuCategories = [
  "All",
  "Arts &amp; Crafts",
  "Furniture",
  "Consumer Electronics",
  "Light Industry &amp; Daily Use",
];

export const getCategories = async () => {
  const request = await getData("/category/");
  if (request.statusCode === 200) {
    return request.data;
  }
  return request;
};

export const addCategory = async (data = {}) => {
  const request = await postData("/category/create", data);
  return {
    statusCode: request.statusCode,
    message: request.message,
    data: request.data,
  };
};

export const deleteCategory = async (data = {}, categoryId: number) => {
  const request = await deleteData("/category/delete/" + categoryId);
  return {
    statusCode: request.statusCode,
    message: request.message,
    data: request.data,
  };
};

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
