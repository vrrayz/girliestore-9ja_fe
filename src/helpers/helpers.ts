export const CURRENCY = "₦";

export const paramsToId = (paramId: string) => {
  const param = paramId.split("-");
  return Number(param[param.length - 1]);
};

export const paramsToName = (paramId: string) => {
  const param = paramId.split("-");
  param.pop();
  return param.join(" ");
};

export const isImageInCorrectFormat = (blob: Blob) =>
  !blob || (blob.type !== "image/jpeg" && blob.type !== "image/png");
