export default function getHttpError(error) {
  if (!error.response) return "Server or internet problem!";
  if (error.response.status === 400) {
    return error.response.data.error;
  }
  if (error.response.status === 401)
    return "Access denied! Unauthorization Error...";
  if (error.response.status === 404) return error.response.data.error;
  if (error.response.status === 500)
    return "Server Error! Something went wrong...";
}
