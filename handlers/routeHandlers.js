import { getData } from "../utils/getData.js";

export const handleGet = async () => {
  const movies = await getData();

  console.log(movies);
};
