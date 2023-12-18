import {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () =>{
  const[contacts, setContacts] = useState ( 
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  ); 
  const [filter, setFilter] = useState('')

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])
  
  const deleteContact = id => {
      setContacts(prevState => prevState.filter(contact => contact.id !== id));
    };

  const addNewContact = contactProps => {
      setState(prev => ({
        contacts: [...prev.contacts, { id: nanoid(), ...contactProps }],
      }));
    };

  const  handleFilter = event => {
      setState({ filter: event.target.value });
    };

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




  checkName = name => {
    return this.state.contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
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