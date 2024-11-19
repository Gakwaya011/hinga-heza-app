import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';

const testimonials = [
  {
    name: 'Cyubahiro Moise',
    role: 'Farmer in Kigali',
    avatar: 'https://oneacrefund.org/sites/default/files/styles/wysiwyg_large_desktop/public/2022-10/WhatsApp_Image_2021-12-02_at_12.52.59_AM_BEy3vI.original.jpg?itok=OMufM6Zj',
    feedback:
      'Hinga Heza helped me find the perfect agricultural land with fertile soil. Their platform made the process so smooth!',
  },
  {
    name: 'Ineza Clarisse',
    role: 'Landowner in Musanze',
    avatar: 'https://media.licdn.com/dms/image/v2/D4E22AQGTchtZOIwh8A/feedshare-shrink_800/feedshare-shrink_800/0/1714710199487?e=2147483647&v=beta&t=GSeo6zZfuIot0s4h6AT4H8YIxme9HdbiPW0i2SJNq_c',
    feedback:
      'I listed my land on Hinga Heza, and within weeks, I found a buyer! Highly recommend for anyone looking to buy or sell agricultural land.',
  },
  {
    name: 'Kamanzi Jane',
    role: 'Agri-Entrepreneur',
    avatar: 'https://oneacrefund.org/sites/default/files/styles/banner_large_desktop/public/2024-04/HET_9454%20%281%29.jpg?h=d1d55bff&itok=mbKEMqkX',
    feedback:
      'The legal guidance provided by Hinga Heza saved me so much time. This platform is a game-changer for Rwandan agriculture!',
  },
];

const TestimonialSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: '4rem 0' }}>
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
          What People Are Saying About Hinga Heza
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '2rem',
                    flex: 1,
                  }}
                >
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{
                      width: 100,
                      height: 100,
                      marginBottom: '1rem',
                      border: '3px solid #ddd',
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#777', marginBottom: '1rem', fontStyle: 'italic' }}
                  >
                    {testimonial.role}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#555',
                      lineHeight: 1.6,
                      textAlign: 'justify',
                      marginBottom: '1rem',
                    }}
                  >
                    "{testimonial.feedback}"
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

export default TestimonialSection;
