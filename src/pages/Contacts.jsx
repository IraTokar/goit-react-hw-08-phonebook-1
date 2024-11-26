import { ContactForm } from "components/ContactsForm/ContactsForm";
import { ContactList } from "components/ContactsList/ContactsList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "pages/redux/contacts/operations";


export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <ContactForm />
      <ContactList />
    </>
  );
}