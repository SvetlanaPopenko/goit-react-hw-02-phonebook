import { Component } from "react";
import { nanoid } from 'nanoid';

export class App extends Component {

  state = {
  contacts: [],
    name: '',
  number: ''
}


  render() {
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
          alignItems: 'center',
        flexDirection:'column',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <div>
          <h1>Phonebook</h1>
          <form>
            <label>Name
              <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
            /></label>
            
            <label>
Phone:
            <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
            </label>
          </form>
          
          <button type="submit">Add contact</button>
        </div>
     <h2>Contacts</h2>
    </div>
  );
  }
  };
