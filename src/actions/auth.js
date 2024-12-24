import axios from "axios";
import fetchApi from "../client-service/fetchApi";

export default async function authHandler(
  navigate,
  setAuth,
  payload,
  requestType,
  toast
) {
  try {
    const result = await fetchApi(`/api/auth/${requestType}`, payload, "post");
    const response = await result.json();

    if (!response.error) {
      localStorage.setItem(
        "store-token",
        JSON.stringify(response?.encodedToken)
      );
      localStorage.setItem("store-user", JSON.stringify(response?.foundUser));
      setAuth(true);
      console.log(response?.encodedToken ? "Logged in" : "Login Error");
      toast.success("Successfully logged in!");
      navigate("/");
      return true;
    }
    toast.error(response.errors[0]);
  } catch (err) {
    toast.error(err);
    console.log(err);
    return false;
  }
}
