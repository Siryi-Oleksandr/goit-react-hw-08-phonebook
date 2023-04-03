import { Badge, Box, Typography } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import {
  selectIsLoading,
  selectContacts,
} from 'redux/contacts/contactsSelectors';
import PeopleIcon from '@mui/icons-material/People';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        pt: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 600,
          display: 'flex',
          gap: '15px',
          alignItems: 'center',
        }}
      >
        Contacts{' '}
        <Badge color="secondary" badgeContent={contacts.length}>
          <PeopleIcon />
        </Badge>
      </Typography>

      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </Box>
  );
}

export default ContactsPage;
