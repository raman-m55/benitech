import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://benitech.liara.run/api",
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
