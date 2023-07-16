import ContactsForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import overlayBackground from '../images/overlayBackground.jpg'

const ContactsPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        height: '100vh',
        backgroundImage: `url(${overlayBackground})`,
        backgroundSize: 'cover',
        resizeMode: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <section>
        <ContactsForm />
      </section>
      <section>
        <Filter />
      </section>
      <section>
        <ContactList />
      </section>
    </div>
  );
};

export default ContactsPage;
