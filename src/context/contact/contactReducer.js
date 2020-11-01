import {
  SET_TOAST,
  SET_LOADING,
  REMOVE_TOAST,
  SET_CONTACTS,
  ADD_CONTACT,
  SET_UPDATE,
  SET_INITIAL_CONTACT_FORM_VALUES,
} from "../types";

export default (state, action) => {
  const { type, payload } = action;

  if (type === SET_LOADING) return { ...state, loading: payload };
  if (type === SET_TOAST) return { ...state, isToast: true, toast: payload };
  if (type === REMOVE_TOAST)
    return { ...state, isToast: false, toast: payload };
  if (type === SET_UPDATE) return { ...state, isUpdate: payload };

  if (type === SET_CONTACTS) return { ...state, contacts: payload };
  if (type === ADD_CONTACT)
    return { ...state, contacts: [payload, ...state.contacts] };
  if (type === SET_INITIAL_CONTACT_FORM_VALUES)
    return { ...state, initialContactFormValues: payload };
};
