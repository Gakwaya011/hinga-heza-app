import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/available-land'); // Replace with your desired route
  };

  return (
    <Box
      sx={{
        backgroundColor: '#2a9d8f',
        color: '#ffffff',
        padding: '4rem 2rem',
        textAlign: 'center',
        borderRadius: '12px',
        margin: '4rem 0',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', marginBottom: '1.5rem' }}
        >
          Ready to Transform Your Agriculture Journey?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}
        >
          Whether you're looking to buy fertile land, sell your property, or
          receive expert legal guidance, Hinga Heza is here to help. Join our
          platform and take the first step today!
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ffffff',
            color: '#2a9d8f',
            padding: '0.8rem 2rem',
            fontWeight: 'bold',
            fontSize: '1rem',
            borderRadius: '25px',
            '&:hover': {
              backgroundColor: '#e8f7f2',
              color: '#2a9d8f',
            },
          }}
          onClick={handleClick}
        >
          Get Started Now
        </Button>
      </Container>
    </Box>
  );
};

export default CTASection;
