import path from "node:path";
import fs from "node:fs/promises";

export const getData = async () => {
  const pathDataFile = path.join("data", "movies.json");
  const data = await fs.readFile(pathDataFile, "utf8");

  return JSON.parse(data);
};
