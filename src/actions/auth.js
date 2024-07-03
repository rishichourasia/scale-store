import axios from "axios";
import fetchApi from "../client-service/fetchApi";

export default async function login(navigate, setAuth, payload) {
  try {
    const result = await fetchApi("/api/auth/login", payload, "post");
    const response = await result.json();
    if (!response.errors) {
      localStorage.setItem(
        "store-token",
        JSON.stringify(response.encodedToken)
      );
      localStorage.setItem("store-user", JSON.stringify(response.foundUser));
      setAuth(true);
      console.log(response.encodedToken ? "Logged in" : "Login Error");
      navigate("/");
      return;
    }
    console.log(response.errors[0]);
  } catch (err) {
    console.log(err);
  }
}
