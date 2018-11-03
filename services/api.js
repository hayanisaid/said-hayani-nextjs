import axois from "axios";

const BASE_URL = process.env.BASE_URL;

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};
const api = axois.create({
  baseURL: BASE_URL,
  headers
});

export default api;
