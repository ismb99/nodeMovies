export const checkContentType = (ext) => {
  switch (ext) {
    case ext === "css":
      return "text/css";

    case ext === "json":
      return "application/json";

    default:
      return "text/html";
  }
};
