import React from 'react';
import { Component } from 'react';
import s from './ContactsForm.module.css';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.number) {
      if (this.props.checkName(this.state.name)) {
        alert(`${this.state.name} is already in contacts`);
      } else {
        this.props.addNewContact(this.state);
        this.reset();
      }
    }
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          <input
            className={s.input}
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Name"
            maxLength="16"
            required
          />
        </label>
        <label htmlFor="number">
          <input
            className={s.input}
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            placeholder="Phone number"
            required
            maxLength="10"
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}
