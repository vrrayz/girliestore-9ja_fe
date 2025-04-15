"use client";
import React, { useEffect, useState } from "react";
import { ErrorMessage, Input, Label, Select } from "../Form";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCategories } from "@/hooks/useCategories";
import { Category } from "@/types";
import CustomEditor from "../CustomTextEditor/CustomEditor";
import { Colorpicker } from "../Colorpicker";
import { UploadFile } from "../UploadFile";
import {
  imageFormatValidationMessage,
  isInCorrectFormat,
  paramsToId,
} from "@/helpers";
import { addProduct } from "@/actions/product";
import { Toast } from "../Toast";
import { useToast } from "@/hooks/useToast";
import { Loading } from "../Loading";
import { useStore } from "@/hooks/useStore";
import { redirect } from "next/navigation";

type ProductInput = {
  name: string;
  description: string;
  shopId: number;
  categoryId: number;
  subCategoryId: number;
  price: number;
  quantity: number;
  size?: number;
  unit?: string;
  color?: string;
  discountType?: string;
  discountPercentage?: number;
  quantityForDiscount?: number;
  file: FileList[];
};
export interface UploadPhotoPreview {
  image: string;
  inputFile: FileList;
}
interface Props {
  id: string;
}
export const AddProduct = ({ id }: Props) => {
  const { store } = useStore(paramsToId(id));

  const { categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [colorPickerValue, setColorPickerValue] = useState("");
  const [uploadPreviews, setUploadPreviews] = useState<UploadPhotoPreview[]>(
    []
  );
  const { toggleToast, closeToast, toast, showToast } = useToast();
  const MAX_UPLOADS_ALLOWED = 4;

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<ProductInput>({
    mode: "onChange",
    defaultValues: {
      shopId: 1,
    },
  });

  const addPhotoFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      "file",
      getValues("file").filter((item) => !isInCorrectFormat(item[0]))
    );
    if (event.target.files) {
      if (!isInCorrectFormat(event.target.files[0])) {
        setUploadPreviews([
          ...uploadPreviews,
          {
            image: URL.createObjectURL(event.target.files[0]),
            inputFile: event.target.files,
          },
        ]);
      }
    }
  };
  const removePreviewPhoto = (index: number) => {
    setUploadPreviews((previews) =>
      previews.filter((previews, i) => i != index)
    );
  };
  const onSubmit: SubmitHandler<ProductInput> = (data) => {
    setIsLoading(true);
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    if (store) {
      formData.append("shopId", store.id.toString());
    }
    formData.append("categoryId", data.categoryId.toString());
    formData.append("subCategoryId", data.subCategoryId.toString());
    formData.append("price", data.price.toString());
    formData.append("quantity", data.quantity.toString());
    if (data.size) {
      formData.append("size", data.size?.toString());
    }
    if (data.unit) {
      formData.append("unit", data.unit?.toString());
    }
    if (data.color) {
      formData.append("color", data.color?.toString());
    }
    if (data.discountType) {
      formData.append("discountType", data.discountType?.toString());
    }
    if (data.discountPercentage) {
      formData.append(
        "discountPercentage",
        data.discountPercentage?.toString()
      );
    }
    if (data.quantityForDiscount) {
      formData.append(
        "quantityForDiscount",
        data.quantityForDiscount?.toString()
      );
    }
    uploadPreviews.map(({ inputFile }) => {
      console.log("Files === ", inputFile[0]);
      formData.append("file", inputFile[0]);
    });

    addProduct(formData)
      .then(async (res) => {
        console.log("This is the response ", res);
        console.log("This is the formData == ", formData);
        if (res.statusCode === 200) {
          console.log("Response success");
          showToast({
            title: "Product Added !!",
            message: "You've added a product to the platform",
            type: "success",
          });
          setShouldRedirect(true);
        } else {
          // setShowErrorModal(true);
          showToast({
            title: "Error Uploading Product",
            message: res.message,
            type: "failure",
          });
        }
        setIsLoading(false);
      })
      .catch(() => {
        showToast({
          title: "Error Uploading Product",
          message: "There was an error uploading the product",
          type: "failure",
        });
        setIsLoading(false);
      });
  };
  useEffect(() => {
    console.log(getValues("file"));
  }, [getValues]);
  useEffect(() => {
    if (description) {
      setValue("description", description);
    }
  }, [description]);
  useEffect(() => {
    if (shouldRedirect) {
      redirect("/user/store/"+id);
    }
  }, [shouldRedirect]);
  return (
    <>
      {store && (
        <>
          <div className="rounded py-[40px] px-[16px] md:px-[24px] lg:px-[80px] shadow">
            <h4 className="text-olivedrab text-[20px] mb-[16px]">
              Add Product
            </h4>
            {isLoading && <Loading />}

            {showColorPicker && (
              <Colorpicker
                setColorPickerValue={setColorPickerValue}
                setShowColorPicker={setShowColorPicker}
              />
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* PRODUCT NAME, CATEGORY AND SUB CATEGORY */}
              <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-[24px]">
                {/* PRODUCT NAME */}
                <div>
                  <Label htmlFor="name">
                    Product Name<sup className="text-tomato">*</sup>
                  </Label>
                  <Input
                    type="text"
                    {...register("name", {
                      required: "Product Name is required",
                    })}
                    className={`${errors.name ? "mb-0" : "mb-4"}`}
                  />
                  {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                  )}
                </div>
                {/* CATEGORY AND SUB CATEGORY */}
                <div className="flex flex-col md:grid md:grid-cols-2 md:gap-[24px]">
                  <div>
                    <Label htmlFor="categoryId">
                      Category<sup className="text-tomato">*</sup>
                    </Label>
                    <Select
                      {...register("categoryId", {
                        required: "Category is required",
                      })}
                      onChange={(event) =>
                        setSelectedCategory(
                          categories.filter(
                            ({ id }) => id == Number(event.target.value)
                          )[0]
                        )
                      }
                      className={`${errors.categoryId ? "mb-0" : "mb-4"}`}
                    >
                      <option value=""></option>
                      {categories.map((category, i) => (
                        <option key={i} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </Select>
                    {errors.categoryId && (
                      <ErrorMessage>{errors.categoryId.message}</ErrorMessage>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="subCategoryId">
                      Sub Category<sup className="text-tomato">*</sup>
                    </Label>
                    <Select
                      {...register("subCategoryId", {
                        required: "Sub Category is required",
                      })}
                      className={`${errors.subCategoryId ? "mb-0" : "mb-4"}`}
                    >
                      <option value=""></option>
                      {selectedCategory?.subCategories?.map(
                        (subCategory, i) => (
                          <option key={i} value={subCategory.id}>
                            {subCategory.name}
                          </option>
                        )
                      )}
                    </Select>
                    {errors.subCategoryId && (
                      <ErrorMessage>
                        {errors.subCategoryId.message}
                      </ErrorMessage>
                    )}
                  </div>
                </div>
              </div>
              {/* UPLOAD PHOTOS */}
              <div>
                <Label>
                  Upload Photos<sup className="text-tomato">*</sup>
                </Label>
                <div className={`multi-upload-container mb-8`}>
                  {uploadPreviews.length < MAX_UPLOADS_ALLOWED && (
                    <UploadFile
                      type="file"
                      {...register(`file.${uploadPreviews.length}`, {
                        onChange: (event) => addPhotoFile(event),
                        validate: (value) => {
                          console.log(value);
                          if (
                            uploadPreviews.length == 0 &&
                            (value === undefined || !value[0])
                          )
                            return "Atleast one image upload is required";
                          if (
                            value === undefined ||
                            (value[0] && isInCorrectFormat(value[0]))
                          ) {
                            return imageFormatValidationMessage;
                          }
                        },
                      })}
                      infoText="Supported formats: JPEG, PNG, Max File Size: 4MB"
                      // previewFile={null}
                    />
                  )}
                  {uploadPreviews.map((uploadPreview, i) => (
                    <UploadFile
                      type="file"
                      infoText="Supported formats: JPEG, PNG, Max File Size: 4MB"
                      previewFile={uploadPreview.image}
                      key={i}
                      index={i}
                      closeAction={removePreviewPhoto}
                      shouldClose
                    />
                  ))}
                </div>
                {Array.isArray(errors.file) &&
                  errors.file.map((error, i) => (
                    <ErrorMessage key={i}>{error?.message}</ErrorMessage>
                  ))}
              </div>
              {/* DESCRIPTIONS */}
              <div className="mb-2">
                <Label htmlFor="description">
                  Description<sup className="text-tomato">*</sup>
                </Label>
                <CustomEditor data={description} setData={setDescription} />
                <input
                  type="hidden"
                  {...register("description", {
                    required: "Description is required",
                  })}
                />
                {errors.description && (
                  <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
              </div>
              {/* PRICE QUANTITY DISCOUNT_TYPE DISCOUNT_PERCENTAGE */}
              <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4">
                {/* PRICE */}
                <div>
                  <Label htmlFor="price">
                    Price<sup className="text-tomato">*</sup>
                  </Label>
                  <Input
                    type="number"
                    {...register("price", {
                      required: "Product Price is required",
                    })}
                    className={`${errors.price ? "mb-0" : "mb-4"}`}
                  />
                  {errors.price && (
                    <ErrorMessage>{errors.price.message}</ErrorMessage>
                  )}
                </div>
                {/*  QUANTITY */}
                <div>
                  <Label htmlFor="quantity">
                    Quantity<sup className="text-tomato">*</sup>
                  </Label>
                  <Input
                    type="number"
                    {...register("quantity", {
                      required: "Quantity is required",
                    })}
                    className={`${errors.quantity ? "mb-0" : "mb-4"}`}
                  />
                  {errors.quantity && (
                    <ErrorMessage>{errors.quantity.message}</ErrorMessage>
                  )}
                </div>
                {/* DISCOUNT_TYPE  */}
                <div>
                  <Label htmlFor="discountType">Discount Type</Label>
                  <Select
                    {...register("discountType")}
                    className={`${errors.discountType ? "mb-0" : "mb-4"}`}
                  >
                    <option value=""></option>
                    <option value="BULK">BULK</option>
                    <option value="SINGLE_ITEM">SINGLE ITEM</option>
                  </Select>
                  {errors.discountType && (
                    <ErrorMessage>{errors.discountType.message}</ErrorMessage>
                  )}
                </div>
                {/*  DISCOUNT_PERCENTAGE */}
                <div>
                  <Label htmlFor="discountPercentage">Discount(%)</Label>
                  <Input
                    type="number"
                    {...register("discountPercentage")}
                    className={`${errors.discountPercentage ? "mb-0" : "mb-4"}`}
                  />
                  {errors.discountPercentage && (
                    <ErrorMessage>
                      {errors.discountPercentage.message}
                    </ErrorMessage>
                  )}
                </div>
                {/*  QUANTITY_FOR_DISCOUNT(buLK) */}
                <div>
                  <Label htmlFor="quantityForDiscount">Discount Quantity</Label>
                  <Input
                    type="number"
                    {...register("quantityForDiscount")}
                    className={`${
                      errors.quantityForDiscount ? "mb-0" : "mb-4"
                    }`}
                  />
                  {errors.quantityForDiscount && (
                    <ErrorMessage>
                      {errors.quantityForDiscount.message}
                    </ErrorMessage>
                  )}
                </div>
              </div>
              {/* SIZE AND UNIT */}
              <div className="grid grid-cols-[1fr_1fr] gap-4">
                <div>
                  <Label htmlFor="size">Size</Label>
                  <Input
                    type="number"
                    {...register("size")}
                    className={`${errors.size ? "mb-0" : "mb-4"}`}
                  />
                  {errors.size && (
                    <ErrorMessage>{errors.size.message}</ErrorMessage>
                  )}
                </div>
                <div>
                  <Label htmlFor="unit">Unit</Label>
                  <Select
                    {...register("unit")}
                    className={`${errors.subCategoryId ? "mb-0" : "mb-4"}`}
                  >
                    <option value=""></option>
                    <option value="cm">cm</option>
                    <option value="ft">ft</option>
                    <option value="in">in</option>
                  </Select>
                  {errors.unit && (
                    <ErrorMessage>{errors.unit.message}</ErrorMessage>
                  )}
                </div>
              </div>
              {/* COLOR */}
              <div>
                <Label htmlFor="color">Color</Label>
                <div
                  className="rounded shadow flex p-4 w-[250px] items-center gap-4 pointer"
                  onClick={() => setShowColorPicker(true)}
                >
                  <div
                    className={`w-[80px] aspect-[1/1] rounded ${
                      colorPickerValue ? "bg-[" + colorPickerValue + "]" : ""
                    }`}
                    style={{ backgroundColor: colorPickerValue }}
                  ></div>
                  <span>{colorPickerValue || "No Color Selected"}</span>
                </div>
                {errors.color && (
                  <ErrorMessage>{errors.color.message}</ErrorMessage>
                )}
              </div>
              <Input
                type="submit"
                value="Create Product"
                className="btn-primary my-4 md:mt-[24px] max-w-[250px] block mx-auto"
              />
            </form>
          </div>
          {toggleToast && toast && (
            <Toast
              type={toast.type}
              closeToast={closeToast}
              title={toast.title}
              message={toast.message}
            />
          )}
        </>
      )}
    </>
  );
};
