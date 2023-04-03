import { Box, Typography } from '@mui/material';
import backgroundImage from 'images/phonebook-title.jpg';
import { LinkStyled } from './HomePage.styled';

function HomePage() {
  const backgroundImageUrl = `url(${backgroundImage})`;
  return (
    <Box
      sx={{
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" style={{ paddingTop: '150px' }}>
        Phonebook
      </Typography>
      <Typography variant="h3" component="p" style={{ paddingTop: '50px' }}>
        Welcome to manager you own contacts.
      </Typography>
      <Typography variant="h4" component="p" style={{ paddingTop: '50px' }}>
        If you want to have more possibility to manage your contacts, please{' '}
        <LinkStyled to="/login">Log in</LinkStyled> to you cabinet or{' '}
        <LinkStyled to="/register">Register</LinkStyled>
      </Typography>
    </Box>
  );
}

export default HomePage;
