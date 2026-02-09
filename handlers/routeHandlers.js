import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";

export const handleGet = async (res) => {
  const data = await getData();
  sendResponse(res, 200, "application/json", JSON.stringify(data));
};

export const handlePost = () => {
  // ta emot input från user
  // ta data i body som kommer i chunks
  // spara data som ett objekt
  // pusha datan till movies.json
  // ska man push eller ska man välja fs.write?
  // Metod får att ta data i body
  //
};
