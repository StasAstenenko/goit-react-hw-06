import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts.items);
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("contacts");
  //   return savedContacts
  //     ? JSON.parse(savedContacts)
  //     : [
  //         { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //         { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //         { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //         { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //       ];
  // });

  // const [filterValue, setFilterValue] = useState("");
  const filterValue = useSelector((state) => state.filter.filters.name);

  const contactsFilter = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  function onAddContact(newContact) {
    dispatch(addContact(newContact));
  }

  function onDeleteContact(contactId) {
    dispatch(deleteContact(contactId));
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={onAddContact} />
      <SearchBox />
      <ContactList contacts={contactsFilter} onDelete={onDeleteContact} />
    </div>
  );
}

export default App;
