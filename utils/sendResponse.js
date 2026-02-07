export const sendResponse = (res, statusCode, contentType, payload) => {
  res.statusCode = statusCode;
  res.setHeader("Conent-Type", contentType);
  res.end(payload);
};
