
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'pages/redux/contacts/operations';
import { selectVisibleContacts } from 'pages/redux/contacts/selectors';

import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Item } from './ContactsList.styled';



export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              <DeleteIcon/>
              delete
            </Button>
          }
        </Item>
      ))}
    </ul>
  );
};
