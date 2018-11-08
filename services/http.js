import api from "./api";

const url = "https://medium.com/@saidhayani";

export const getPosts = async () => {
  const result = await api.get(url);
  return result;
};
