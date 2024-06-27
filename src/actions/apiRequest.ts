"use server";

import { cookies } from "next/headers";

const defaultContentType = "application/x-www-form-urlencoded";

export async function postData(
  url = "",
  data = {},
  method = "POST",
  contentType: string | undefined = defaultContentType
) {
  const response = await fetch(`${process.env.BE_API_URL}${url}`, {
    method: method,
    headers: {
      "Content-Type": contentType,
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
    body:
      contentType === "application/json"
        ? JSON.stringify(data)
        : new URLSearchParams(data),
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function postDataUpload(
  url = "",
  data: FormData,
  method = "POST"
) {
  const response = await fetch(`${process.env.BE_API_URL}${url}`, {
    method: method,
    headers: {
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
    body: data,
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function getData(url = "", data = {}) {
  const response = await fetch(
    `${process.env.BE_API_URL}${url}?${new URLSearchParams(data)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${cookies().get("access_token")?.value}`,
      },
    }
  );
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function deleteData(url = "") {
  const response = await fetch(`${process.env.BE_API_URL}${url}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${cookies().get("access_token")?.value}`,
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
