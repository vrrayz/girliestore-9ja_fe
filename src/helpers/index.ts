export * from "./cart";
export * from "./helpers";

export const isInCorrectFormat = (blob: Blob) =>
  !blob ||
  (blob.type !== "image/jpeg" &&
    blob.type !== "image/png" &&
    blob.type !== "image/webp");

export const imageFormatValidationMessage =
  "Incorrect file format, must be either a .png or .jpg or .webp";
