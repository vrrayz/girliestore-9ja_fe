import { sendLoginDetails } from "@/actions";
import React from "react";

export const Login = () => {
  return (
    <div>
      <form action={sendLoginDetails}>
        <input type="email" name="email" placeholder="email" />
        <br />
        <label htmlFor="password">Enter password</label>
        <input type="password" name="password" id="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
