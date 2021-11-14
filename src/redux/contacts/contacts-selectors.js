import { getFilterValue } from "redux/filter/filter-selectors";

export const getContacts = (state) => state.contacts.items; //простые селекторы

export const getvisibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilterValue(state);

  return contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ||
      number.includes(filter)
  );
};
// сложные или составные/композитные селекторы

// ---------------------------------
// селекторы это функции которые знают о том, как выглядит состояние, о внешнем виде
