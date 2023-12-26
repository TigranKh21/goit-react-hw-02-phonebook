import css from './Contact.module.css';
import React, { Component } from 'react';

export class ContactList extends Component {
  render() {
    return (
      <ul className={css.contactsList}>
        {this.props.state.map(contact => (
          <li key={contact.id} className={css.contact}>
            {contact.name}: {contact.number}
            <button
              className={css.deleteContactBtn}
              onClick={() => this.props.handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
