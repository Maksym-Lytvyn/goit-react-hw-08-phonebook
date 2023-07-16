import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import ContactItem from 'components/ContactItem/ContactItem';
import {
  selectContacts,
  selectStatusFilter,
  selectIsLoading,
} from '../../redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) {
    return <div>Go</div>;
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px',
        margin: '0 auto',
        justifyContent: 'center',
        color: '#010101',
      }}
    >
      <h5 style={{color: 'white', fontSize: 16}}>Додані контакти:</h5>
      <ul>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
      {isLoading && (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
        >
          <p style={{ marginLeft: 10 }}>Оновлюємо...</p>
        </div>
      )}
    </div>
  );
};

export default ContactList;
