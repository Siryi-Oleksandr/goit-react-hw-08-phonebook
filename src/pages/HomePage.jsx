import ContactForm from 'components/ContactForm/ContactForm';
import React from 'react';

function HomePage() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      {/* <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
    </div>
  );
}

export default HomePage;
