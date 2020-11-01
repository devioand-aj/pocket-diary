import axios from "axios";

import getHttpError from "../utils/getHttpError";
import { getTokenFromLocalStorage } from "./auth";

const apiEndPoint = "https://contact-keeper-sql.herokuapp.com/api/contacts";

export async function getContactsServices() {
  const token = getTokenFromLocalStorage();

  try {
    const { data } = await axios.get(apiEndPoint, {
      headers: {
        "x-auth-token": token,
      },
    });

    return { contacts: data.contacts };
  } catch (err) {
    console.log(err.response);
    //  console.log(err.request);
    return { error: getHttpError(err) };
  }
}

export async function addContactServices(body) {
  const token = getTokenFromLocalStorage();

  try {
    const { data } = await axios.post(apiEndPoint, body, {
      headers: {
        "x-auth-token": token,
      },
    });

    return { contact: data.contact };
  } catch (err) {
    return { error: getHttpError(err) };
  }
}

export async function deleteContactServices(id) {
  const token = getTokenFromLocalStorage();

  try {
    const { data } = await axios.delete(`${apiEndPoint}/${id}`, {
      headers: { "x-auth-token": token },
    });

    return { contact: data.contact };
  } catch (err) {
    return { error: getHttpError(err) };
  }
}

export async function updateContactServices(id, body) {
  const token = getTokenFromLocalStorage();

  try {
    const { data } = await axios.put(`${apiEndPoint}/${id}`, body, {
      headers: {
        "x-auth-token": token,
      },
    });

    // console.log(contact);
    return { contact: data.contact };
  } catch (err) {
    // console.log(err.response);

    return { error: getHttpError(err) };
  }
}
