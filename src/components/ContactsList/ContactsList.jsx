
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'pages/redux/contacts/operations';
import { selectVisibleContacts } from 'pages/redux/contacts/selectors';



export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};
