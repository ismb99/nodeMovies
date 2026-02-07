export const checkContentType = (ext) => {
  switch (ext) {
    case ".css":
      return "text/css";
    case ".json":
      return "application/json";
    case ".js":
      return "text/javascript";
    default:
      return "text/html";
  }
};
