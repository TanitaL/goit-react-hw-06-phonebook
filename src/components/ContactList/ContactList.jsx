import { useSelector } from "react-redux";
import { getContacts, getFilterValue } from "redux/slice";
import ContactItem from "components/ContactItem/ContactItem";
import css from "./ContactList.module.css";


const ContactList = () => {
    const contacts = useSelector(getContacts)
    const filter = useSelector(getFilterValue);

    const filteredContacts = () => {
        const normalizeFilter = filter.toLowerCase();

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizeFilter)
        );
    };
    
    const visibleContacts = filteredContacts();

    return (
        <ul className={css.contactList}>
            {visibleContacts.length !== 0 ? (visibleContacts.map(({ id, name, number }) => {
                return (
                    <ContactItem
                        key={id}
                        name={name}
                        number={number}
                        id={id}
                    />
                )
            })
            ) : (
                    <li className={css.noContact}>No contacts</li>
                )
            } 
        </ul>
    )
};

export default ContactList;