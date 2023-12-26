import React, { Component } from 'react';
import { ContactForm } from './Contacts/ContactForm.jsx';
import { ContactList } from './Contacts/ContactList.jsx';
import { Filter } from './Contacts/Filter.jsx';
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
    filter: '',
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
  };

  handleDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  handleFindChange = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  render() {
    const filteredContactList = this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(this.state.filter) ||
        contact.name.toUpperCase().includes(this.state.filter) ||
        contact.name.includes(this.state.filter)
    );
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter state={this.state} handleFindChange={this.handleFindChange} />
        <ContactList
          state={filteredContactList}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
