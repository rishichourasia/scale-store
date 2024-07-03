import { toLower } from "lodash";

const fetchApi = (endpoint, payload = {}, method = "get", headers = {}) => {
  const headerObject = {
    "Content-type": "application/json; charset=UTF-8",
    ...headers,
  };
  let request = {};
  if (toLower(method) === "post" || toLower(method) === "put") {
    request = {
      body: JSON.stringify(payload),
      headers: headerObject,
      method: toLower(method),
    };
  } else {
    request = {
      headers: headerObject,
      method: toLower(method),
    };
  }
  try {
    return fetch(endpoint, request);
  } catch (e) {
    const stringError = e?.toString?.();
    const type =
      stringError === "TypeError: Network request failed"
        ? "networkError"
        : "unknown";
    const error = {
      text: stringError,
      type,
    };
    throw error;
  }
};

export default fetchApi;
