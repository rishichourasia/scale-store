import { isChrome, isIOS } from "react-device-detect";

export function getUserToken() {
  const token = localStorage.getItem("store-token");
  return token ? token : null;
}

export function getUser() {
  const user = localStorage.getItem("store-user");
  return user ? JSON.parse(user) : null;
}

export const isMobileDevice = () => {
  if (typeof window !== "undefined") {
    if (isIOS && isChrome) {
      return document.documentElement.clientWidth <= 529;
    }
    return window.innerWidth <= 529;
  }
  return false;
};
