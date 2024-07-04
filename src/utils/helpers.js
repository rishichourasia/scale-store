export function getUserToken() {
  const token = localStorage.getItem("store-token");
  return token ? token : null;
}

export function getUser() {
  const user = localStorage.getItem("store-user");
  return user ? JSON.parse(user) : null;
}
