import { Button, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';

function LogInForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        type="email"
        name="email"
        id="standard-basic"
        label="Email"
        variant="standard"
        fullWidth
        sx={{
          mb: '1rem',
        }}
      />
      <TextField
        type="password"
        name="password"
        id="standard-basic"
        label="Password"
        variant="standard"
        fullWidth
        sx={{
          mb: '1rem',
        }}
      />

      <Button type="submit" variant="outlined">
        Log In
      </Button>
    </form>
  );
}

export default LogInForm;
