import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperation';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { toast } from 'react-hot-toast';
import { nanoid } from '@reduxjs/toolkit';
import { Form } from 'components/ContactForm/ContactForm.styled';
import { Button, TextField } from '@mui/material';

const nameRegExp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const phoneRegExp =
  '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isNotUnique = contacts.some(contact => contact.name === name);
    if (isNotUnique) {
      return toast.success(`"${name}" is already in contacts.`);
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="standard-basic"
        type="text"
        name="name"
        label="Name"
        variant="outlined"
        required
        inputProps={{
          inputMode: 'text',
          pattern: nameRegExp,
        }}
        fullWidth
        sx={{
          mb: '1rem',
        }}
      />
      <TextField
        id="standard-basic"
        type="tel"
        name="number"
        label="Number"
        variant="outlined"
        required
        inputProps={{
          inputMode: 'text',
          pattern: phoneRegExp,
        }}
        fullWidth
        sx={{
          mb: '1rem',
        }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: '20px',
        }}
      >
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
