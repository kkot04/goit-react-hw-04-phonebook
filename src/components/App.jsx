import { useState, useEffect } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm.jsx';
import { ContactsList } from './ContactsList/ContactsList.jsx';
import { Filter } from './Filter/Filter.jsx';
import { Section } from './Section/Section.jsx';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const newContactState = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const getFilteredData = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Section title={'Phonebook'}>
        <ContactsForm contacts={contacts} newContactState={newContactState} />
      </Section>
      <Section title={'Contacts'}>
        <ContactsList
          contacts={contacts}
          getFilteredData={getFilteredData}
          deleteContact={deleteContact}
        >
          <Filter handleFilter={handleFilter} filter={filter} />
        </ContactsList>
      </Section>
    </div>
  );
};