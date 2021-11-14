import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchContacts } from "./redux/contacts/contacts-operations";

import Title from "./components/Title/Title";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

import "./App.scss";

export default function App() {
  const isLoading = useSelector((state) => state.contacts.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="visually_hidden">Phonebook</h1>

      {isLoading && <h1>Loading...</h1>}
      <Title title="Phonebook" />
      <ContactForm />

      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </div>
  );
}
// ---------------------------------------------------
// action.meta && action.meta.ga === action?.meta?.ga - необязатльный

// RTK redux toolkit query - для управления серверным состоянием из приложения

// query - get
