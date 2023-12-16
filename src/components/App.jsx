import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],

    filter: '',
  };
  //LS
  componentDidMount() {
    const contacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        'contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }
  //LS
  addNewContact = contactProps => {
    this.setState(prev => ({
      contacts: [...prev.contacts, { id: nanoid(), ...contactProps }],
    }));
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  checkName = name => {
    return this.state.contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  contactFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactsForm
            addNewContact={this.addNewContact}
            checkName={this.checkName}
          />
        </Section>
        <Section title="Contacts">
          <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
          <ContactsList
            id={this.state.id}
            name={this.state.name}
            number={this.state.number}
            contactFilter={this.contactFilter}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;