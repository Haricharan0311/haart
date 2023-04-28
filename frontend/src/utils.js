export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message //from backend req.send({message...})
    : error.message;
};
