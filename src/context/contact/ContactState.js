import React, { useReducer } from "react";

import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  getContactsServices,
  addContactServices,
  deleteContactServices,
  updateContactServices,
} from "../../services/contacts";
import {
  SET_TOAST,
  REMOVE_TOAST,
  SET_LOADING,
  SET_CONTACTS,
  ADD_CONTACT,
  SET_UPDATE,
  SET_INITIAL_CONTACT_FORM_VALUES,
} from "../types";

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [],
    toast: "",
    isToast: false,
    loading: false,
    isUpdate: false,
    initialContactFormValues: {},
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Set dispatch and interact with useReducer
  const setDispatch = (type, payload) => dispatch({ type, payload });

  /********  Helper function to interact with useReducer   ******/
  const setUpdateDispatch = () => setDispatch(SET_UPDATE, true);
  // eslint-disable-next-line
  const removeUpdateDispatch = () => setDispatch(SET_UPDATE, false);
  const setLoadingDispatch = () => setDispatch(SET_LOADING, true);
  const removeLoadingDispatch = () => setDispatch(SET_LOADING, false);
  const setToastDispatch = (toast) => setDispatch(SET_TOAST, toast);
  const removeToastDispatch = () => setDispatch(REMOVE_TOAST, "");
  const setContactsDispatch = (contacts) => setDispatch(SET_CONTACTS, contacts);
  const removeContactsDispatch = () => setDispatch(SET_CONTACTS, []);
  const setAddContactDispatch = (contact) => setDispatch(ADD_CONTACT, contact);
  const setInitialContactFormValuesDispatch = (values) =>
    setDispatch(SET_INITIAL_CONTACT_FORM_VALUES, values);

  /**********  Pilot functions that help in components  ***********/
  const handleToastClose = () => {
    removeToastDispatch();
  };

  const handleGetContacts = async () => {
    removeToastDispatch();
    setLoadingDispatch();

    const { contacts, error } = await getContactsServices();

    removeLoadingDispatch();

    if (error) {
      setToastDispatch(error);
      return null;
    }

    if (contacts.length === 0)
      setToastDispatch(`Nothing to show! Kindly add contact!`);

    setContactsDispatch(contacts);

    return contacts;
  };

  const handleSetInitialContactFormValues = (values) => {
    setInitialContactFormValuesDispatch(values);
  };

  const handleClearContactState = () => {
    removeLoadingDispatch();
    removeToastDispatch();
    removeContactsDispatch();
  };

  const handleAddContact = async (body) => {
    removeToastDispatch();
    setLoadingDispatch();

    const { contact, error } = await addContactServices(body);

    removeLoadingDispatch();

    if (error) {
      setToastDispatch(error);
      return null;
    }

    setAddContactDispatch(contact);

    return contact;
  };

  const handleDeleteContact = async (id) => {
    removeToastDispatch();
    setLoadingDispatch();

    const prevContacts = [...state.contacts];

    const newContacts = prevContacts.filter((c) => c.contact_id !== id);
    setContactsDispatch(newContacts);

    const { error } = await deleteContactServices(id);

    removeLoadingDispatch();

    if (error) {
      setToastDispatch(error);

      setTimeout(() => {
        setContactsDispatch(prevContacts);
        // removeToastDispatch();
      }, 1000);
    }

    return;
  };

  const handleEditContact = (contactValues) => {
    setInitialContactFormValuesDispatch(contactValues);
    setUpdateDispatch();
  };

  const handleUpdateContact = async (body) => {
    const { contact_id: contactId } = body;

    const prevContacts = [...state.contacts];

    const newContacts = [...state.contacts];
    const index = prevContacts.findIndex((c) => c.contact_id === contactId);
    newContacts[index] = body;

    setContactsDispatch(newContacts);

    const { error } = await updateContactServices(contactId, body);

    removeUpdateDispatch();

    if (error) {
      setToastDispatch(error);
      setContactsDispatch(prevContacts);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        loading: state.loading,
        toast: state.toast,
        isToast: state.isToast,
        contacts: state.contacts,
        isUpdate: state.isUpdate,
        initialContactFormValues: state.initialContactFormValues,
        onToastClose: handleToastClose,
        onGetContacts: handleGetContacts,
        onAddContact: handleAddContact,
        onDeleteContact: handleDeleteContact,
        onEditContact: handleEditContact,
        onUpdateContact: handleUpdateContact,
        onSetInitialContactFormValues: handleSetInitialContactFormValues,
        onClearContactState: handleClearContactState,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
