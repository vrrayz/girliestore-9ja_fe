"use client";

import { Colors } from "@/styles";
import React, { useState } from "react";
import { FormContainer, ErrorMessage, Label, Input } from "../../Form";
import { SubmitHandler, useForm } from "react-hook-form";
import { addCategory, deleteCategory } from "@/actions/categories";
import { useCategories } from "@/hooks/useCategories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type CategoryInput = {
  name: string;
};

export const Categories = () => {
  const [shouldRedirect, setShouldRedirect] = useState<boolean>();
  const { categories, setCategories } = useCategories();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryInput>();
  const onSubmit: SubmitHandler<CategoryInput> = (data) => {
    addCategory(data).then(async (res) => {
      //   setExtraError(res.statusCode !== 200 ? "Incorrect Credentials" : "");
      if (res.statusCode === 200) {
        setCategories((prev) => [
          ...prev,
          { id: res.data.id, name: res.data.name },
        ]);
      }
    });
  };
  const removeCategory = (id: number) => {
    deleteCategory({}, id).then(async (res) => {
      if (res.statusCode === 200) {
        setCategories((prev) => prev.filter((category) => category.id !== id));
      }
    });
  };

  return (
    <div>
      <FormContainer>
        <div className="lg:w-1/2 px-6 py-16">
          {/* {extraError && (
            <ErrorMessage className="mt-4 text-center">
              {extraError}
            </ErrorMessage>
          )} */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="name">Category Name</Label>
            <Input
              type="name"
              {...register("name", { required: true })}
              className={`${errors.name ? "mb-0" : "mb-4"}`}
            />
            {errors.name && <ErrorMessage>Name is required</ErrorMessage>}

            <Input
              type="submit"
              value="Create Category"
              className="btn-primary mb-4"
            />
          </form>
        </div>
      </FormContainer>
      <div className="my-5">
        <h3>All Categories</h3>
        <ul>
          {categories &&
            categories.map(({ id, name }) => (
              <li key={id} className="py-2 flex justify-around">
                <span>{name}</span>
                <span className="" onClick={() => removeCategory(id)}>
                  <FontAwesomeIcon icon={faXmark} color="red" />
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
