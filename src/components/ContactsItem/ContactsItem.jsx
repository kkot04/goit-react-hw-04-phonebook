import React from 'react';
import s from './ContactsItem.module.css';

export const ContactsItem = ({ name, number, id, deleteContact }) => {
  return (
    <li className={s.contactItem}>
      <div>
        <span>{name}: </span>
        <span>{number}</span>
      </div>

      <button
        className={s.deleteBtn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};