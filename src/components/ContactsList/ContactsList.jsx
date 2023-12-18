import React from 'react';
import { ContactsItem } from '../ContactsItem/ContactsItem.jsx';
import s from './ContactsList.module.css'

export const ContactsList = ({
  contacts,
  getFilteredData,
  children,
  deleteContact,
}) => {
  const filteredContacts = getFilteredData(contacts);

  return (
    <>
      {children}
      {filteredContacts.length === 0 ? (
        <p className={s.errorMessage}>No contacts match your search</p>
      ) : (
        <ul className={s.contactList}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      )}
    </>
  );
};
