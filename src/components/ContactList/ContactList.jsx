import { deleteContact } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const filterValue = useSelector((state) => state.filter.filters.name);

  const contactsFilter = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  function onDeleteContact(contactId) {
    dispatch(deleteContact(contactId));
  }
  return (
    <ul className={css.list}>
      {contactsFilter.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
