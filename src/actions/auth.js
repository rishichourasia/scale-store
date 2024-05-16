import axios from "axios";

const login = async (navigate, setAuth, payload) => {
  try {
    const response = await axios.post("/api/auth/login", payload);
    localStorage.setItem("token", JSON.stringify(response.data.encodedToken));
    setAuth(true);
    console.log(response.data.encodedToken ? "Logged in" : "Error");
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export { login };
