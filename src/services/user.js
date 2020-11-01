import axios from "axios";

import getHttpError from "../utils/getHttpError";

const apiEndPoint = "https://contact-keeper-sql.herokuapp.com/api/users";

export async function registerUser(body) {
  try {
    const {
      data: { token },
    } = await axios.post(apiEndPoint, body);
    return { token };
  } catch (err) {
    return { error: getHttpError(err) };
  }
}
