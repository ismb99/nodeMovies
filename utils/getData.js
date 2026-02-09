import path from "node:path";
import fs from "node:fs/promises";

export const getData = async () => {
  try {
    const pathJSON = path.join("data", "movies.json");
    const data = await fs.readFile(pathJSON, "utf8");
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (err) {
    console.log(err.error);
    return [];
  }
};
