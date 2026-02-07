import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";
import { checkContentType } from "./checkContentType.js";

export const serveStatic = async (req, res, dirname) => {
  const publicDir = path.join(dirname, "public");
  console.log(publicDir);

  const filePath = path.join(
    publicDir,
    req.url === "/" ? "index.html" : req.url,
  );

  const ext = path.extname(filePath);
  const contentType = checkContentType(ext);

  const data = await fs.readFile(filePath, "utf8");

  sendResponse(res, 200, contentType, data);
};
