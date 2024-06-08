import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://digipionerapi.liara.run/v1/api",
});
apiCall.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    console.log("ssss")
    return Promise.reject(error);
  }
);
export function setToken(token?: string) {
  apiCall.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export function removeToken() {
  apiCall.defaults.headers.common.Authorization = undefined;
}

export default apiCall;
