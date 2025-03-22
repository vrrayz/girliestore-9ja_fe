"use server";
import { cookies } from "next/headers";
import { getData, postData } from ".";

export const authenticationRequest = async () => {
  const request = await getData("/user/profile");
  if (request.statusCode === 200) {
    return request.data;
  }
  return request;
};

export const login = async (data = {}) => {
  const loginRequest = await postData("/auth/login", data);
  if (loginRequest.access_token) {
    cookies().set("access_token", loginRequest.access_token, {
      httpOnly: true,
    });
    return {
      statusCode: loginRequest.statusCode,
      message: loginRequest.access_token,
    };
  }
  return {
    statusCode: loginRequest.statusCode,
    message: loginRequest.message,
  };
};

export const logout = async () => {
  cookies().delete("access_token");
};

export const registerUser = async (data = {}) => {
  const request = await postData("/auth/register", data);

  if (request.access_token) {
    cookies().set("access_token", request.access_token, {
      httpOnly: true,
    });
    return {
      statusCode: request.statusCode,
      message: request.access_token,
    };
  }
  return {
    statusCode: request.statusCode,
    message: request.message,
  };
};
