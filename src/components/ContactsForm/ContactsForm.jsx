import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'pages/redux/contacts/operations';
import { selectContacts } from 'pages/redux/contacts/selectors';


const nameInputId = nanoid();
const numberInputId = nanoid();

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${name} вже в контактах☝️`);

      return;
    }

    dispatch(addContacts({ name, number }));

    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Введіть ім'я"
            value={name}
            onChange={handleChange}
            pattern="^[^\d]+$"
            title="Ім'я має містити лише літери, апострофи, дефіси та відступи"
            required
          />
        </label>

        <label htmlFor={numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Введіть номер телефону"
            value={number}
            onChange={handleChange}
            pattern="\+\d{12}"
            minlength="13"
            maxlength="13"
            title="Номер телефону має починатися з +, а потім 12 цифр"
            required
          />
        </label>

        <button type="submit">
          Add contact{' '}
        </button>
      </form>
      <Filter />
    </>
  );
};
