import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GavelIcon from '@mui/icons-material/Gavel';

const services = [
  {
    title: 'Buy Agricultural Land',
    description:
      'Browse through our listings to find fertile agricultural land that meets your requirements.',
    icon: <AgricultureIcon sx={{ fontSize: 50, color: '#2a9d8f' }} />,
  },
  {
    title: 'Sell Your Land',
    description:
      'List your agricultural land on our platform and connect with interested buyers quickly.',
    icon: <MonetizationOnIcon sx={{ fontSize: 50, color: '#2a9d8f' }} />,
  },
  {
    title: 'Legal Guidance',
    description:
      'We offer assistance with legal documentation to make buying or selling land hassle-free.',
    icon: <GavelIcon sx={{ fontSize: 50, color: '#2a9d8f' }} />,
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffff', padding: '4rem 0' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '3rem',
            color: '#333',
          }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CardContent>
                  <Box sx={{ marginBottom: '1rem' }}>{service.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', marginBottom: '1rem', color: '#2a9d8f' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: '#555', lineHeight: 1.6 }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
