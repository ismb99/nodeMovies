import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";
import { handleGet } from "./handlers/routeHandlers.js";

const PORT = 3000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (req.url === "/movies.html") {
    if (req.method === "GET") {
      await handleGet();
    }
  } else {
    serveStatic(req, res, __dirname);
  }
});

server.listen(PORT, () => {
  console.log(`Listning to port ${PORT}`);
});
