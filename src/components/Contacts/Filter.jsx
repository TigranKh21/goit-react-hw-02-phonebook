import React, { Component } from 'react';
import css from './Contact.module.css';

export class Filter extends Component {
  render() {
    return (
      <div className={css.contactForm}>
        <label className={css.contactNameLabel}>Find contact by name</label>
        <input
          className={css.inputField}
          type="text"
          placeholder="search..."
          name="filter"
          value={this.props.state.filter}
          onChange={this.props.handleFindChange}
        />
      </div>
    );
  }
}
