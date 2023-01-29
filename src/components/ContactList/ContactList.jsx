import React from 'react';

const ContactList = ({ contacts, onDeleteContacts }) => (
    <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="ClasList__item">
        <p className="ClasList__name">
          {name}: <span>{number}</span>
        </p>
        <button onClick={() => onDeleteContacts(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
