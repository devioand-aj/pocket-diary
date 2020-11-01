import {
  SET_USER,
  SET_TOAST,
  REMOVE_TOAST,
  SET_LOADING,
  SET_TOKEN,
} from "../types";

export default (state, action) => {
  const { type, payload } = action;

  if (type === SET_LOADING) return { ...state, loading: payload };
  if (type === SET_TOAST) return { ...state, toast: payload, isToast: true };
  if (type === REMOVE_TOAST)
    return { ...state, toast: payload, isToast: false };

  if (type === SET_USER) return { ...state, user: payload };
  if (type === SET_TOKEN) return { ...state, token: payload };
};
