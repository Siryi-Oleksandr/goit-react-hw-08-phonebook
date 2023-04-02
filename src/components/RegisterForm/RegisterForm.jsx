import { Button, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';

function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="standard-basic"
        type="text"
        name="name"
        label="User name"
        variant="standard"
        fullWidth
        sx={{
          mb: '1rem',
        }}
      />
      <TextField
        id="standard-basic"
        type="email"
        name="email"
        label="Email"
        variant="standard"
        fullWidth
        sx={{
          mb: '1rem',
        }}
      />
      <TextField
        id="standard-basic"
        type="password"
        name="password"
        label="Password"
        variant="standard"
        fullWidth
        sx={{
          mb: '1rem',
        }}
      />
      <Button type="submit" variant="outlined">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
