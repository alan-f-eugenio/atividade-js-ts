import axios from "axios";

const API = axios.create({
  baseURL: "https://api.trakt.tv/",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.response.use(
  (response) => {
    const { data } = response;

    return {
      results: data,
    };
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { API };
