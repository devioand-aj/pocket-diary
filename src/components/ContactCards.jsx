import React, { useContext, useEffect } from "react";
import FlipMove from "react-flip-move";

import "../styles/contactCards.css";
import ContactCard from "../components/ContactCard";
import ContactContext from "../context/contact/contactContext";
import Spinner from "./common/NewSpinner";
import Toast from "./common/Toast";

const ContactCards = () => {
  const {
    contacts,
    loading,
    toast,
    isToast,
    onToastClose,
    onGetContacts,
    onDeleteContact,
    onEditContact,
  } = useContext(ContactContext);

  useEffect(() => {
    onGetContacts();
    // eslint-disable-next-line
  }, []);

  const handleToastClose = () => {
    onToastClose();
  };

  const handleDeleteContact = (contactId) => {
    onDeleteContact(contactId);
  };

  const handleEditContact = (contact) => {
    onEditContact(contact);
  };

  return (
    <>
      <Toast message={toast} visible={isToast} onClick={handleToastClose} />
      <Spinner visible={loading} />
      <FlipMove>
        {contacts.map(({ contact_id: _id, name, phone, email, type, date }) => (
          <ContactCard
            key={_id}
            _id={_id}
            name={name}
            phone={phone}
            email={email}
            type={type}
            date={date}
            onDelete={handleDeleteContact}
            onEdit={handleEditContact}
          />
        ))}
      </FlipMove>
    </>
  );
};

export default ContactCards;
