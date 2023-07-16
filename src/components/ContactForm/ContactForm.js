import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import Notiflix from 'notiflix';
import { selectContacts, selectError } from '../../redux/contacts/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  const handleInputChange = event => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() !== '' && number.trim() !== '') {
      const isExistingContact = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isExistingContact) {
        Notiflix.Notify.failure(`${name} вже додано до контактів.`);
        return;
      }

      if (error) {
        Notiflix.Notify.failure('Не вдалося отримати контакти. Спробуйте ще');
        return;
      }

      dispatch(addContact({ name, number }));
      Notiflix.Notify.success(`${name} Додано до переліку контактів.`);
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '400px',
          margin: '0 auto',
          justifyContent: 'center',
          color: '#010101',
          marginLeft: 850
        }}
      >
        {error && (
          <div>Не вдалося завантажити контакти. Спробуйте пізніше...</div>
        )}

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <input
            type="text"
            name="name"
            label="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleInputChange}
            required
          />

          <br />

          <input
            type="tel"
            name="number"
            label="Number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleInputChange}
            required
          />

          <br />
          <br />
          <button type="submit" style={{ backgroundColor: 'green', color: 'white', width: 150, height: 30, fontSize: 22}}>
            Додати
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
