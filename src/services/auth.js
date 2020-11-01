import axios from "axios";
import jwtDecode from "jwt-decode";

import getHttpError from "../utils/getHttpError";

const apiEndPoint = `https://contact-keeper-sql.herokuapp.com/api/auth`;
const tokenKey = "token";

export function setTokenToLocalStorage(token) {
  localStorage.setItem(tokenKey, token);
}

export function getTokenFromLocalStorage() {
  return localStorage.getItem(tokenKey);
}

export function removeTokenFromLocalStorage() {
  localStorage.removeItem(tokenKey);
}

export function getJwtDecode(token) {
  return jwtDecode(token);
}

export async function getAuthToken(body) {
  try {
    const {
      data: { token },
    } = await axios.post(apiEndPoint, body);

    return { token };
  } catch (err) {
    return { error: getHttpError(err) };
  }
}

export async function getAuthUser(token) {
  try {
    const { data } = await axios.get(apiEndPoint, {
      headers: {
        "x-auth-token": token,
      },
    });
    return { user: data.user };
  } catch (err) {
    //  console.log(err.response, err.request);
    return { error: getHttpError(err) };
  }
}
