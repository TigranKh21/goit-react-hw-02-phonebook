import React, { Component } from 'react';
import { ContactForm } from './Contacts/ContactForm.jsx';
import { ContactList } from './Contacts/ContactList.jsx';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  handleAddContact = formData => {
    const hasDuplicate = this.state.contacts.some(
      contact => contact.name === formData.name
    );
    if (hasDuplicate) {
      alert(`${formData.name} is already in contacts`);
      return;
    }

    const newContact = { ...formData, id: 'id-' + nanoid(2) };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    console.log('newContact: ', newContact);
  };

  handleDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <ContactList
          state={this.state}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
