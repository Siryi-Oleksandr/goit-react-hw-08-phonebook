import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import AuthNav from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import React from 'react';

function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      position="static"
      sx={{
        mb: '1rem',
      }}
    >
      <Toolbar>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Button color="inherit">Register</Button>
        <Button color="inherit">Login</Button> */}

        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
