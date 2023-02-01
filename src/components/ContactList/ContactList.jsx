import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="ClasList__item">
        <p className="ClasList__name">
          {name}: <span>{number}</span>
        </p>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}
export default ContactList;
