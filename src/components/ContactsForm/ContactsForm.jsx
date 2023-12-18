import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactsForm.module.css';

export const ContactsForm = ({ contacts, newContactState }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleValueChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const createContact = event => {
    event.preventDefault();

    const newContact = { name, number, id: nanoid() };

    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    newContactState(newContact);

    setName('');
    setNumber('');
  };

  return (
    <form className={s.formBox} autoComplete="off" onSubmit={createContact}>
      <input
        className={s.input}
        value={name}
        onChange={handleValueChange}
        type="text"
        name="name"
        placeholder="Contact name"
      />

      <input
        className={s.input}
        onChange={handleValueChange}
        value={number}
        type="tel"
        name="number"
        placeholder="Phone number"
        required
      />

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};