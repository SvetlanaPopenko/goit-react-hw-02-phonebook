import React from 'react';
import PropTypes from 'prop-types';
import { ContactsList, ContactItem, ContactListButton } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ContactsList>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <p className="ClasList__name">
          {name}: <span>{number}</span>
        </p>
        <ContactListButton onClick={() => onDeleteContact(id)}>Delete</ContactListButton>
      </ContactItem>
    ))}
  </ContactsList>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}
export default ContactList;
