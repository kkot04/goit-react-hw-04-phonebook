import React from 'react';
import s from './ContactsList.module.css';

export const ContactsList = ({ contactFilter, deleteContact }) => {
  return (
    <ul className={s.contactsList}>
      {contactFilter().map(({ id, name, number }) => {
        return (
          <li className={s.contactItem} key={id}>
            <p className={s.contactText}>
              <b> {name} </b>: <i> {number}</i>
            </p>
            <button
              type="button"
              className={s.deleteBtn}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
