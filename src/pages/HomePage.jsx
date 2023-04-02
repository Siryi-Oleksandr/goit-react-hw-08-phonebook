import { Box, Typography } from '@mui/material';
import backgroundImage from 'images/phonebook-3.jpg';

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
    </Box>
  );
}

export default HomePage;
