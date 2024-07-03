export function getUserToken() {
  const token = localStorage.getItem("store-token");
  return token ? token : null;
}

export function getUser() {
  const user = JSON.parse(localStorage.getItem("store-user"));
  return user ? user : null;
}
