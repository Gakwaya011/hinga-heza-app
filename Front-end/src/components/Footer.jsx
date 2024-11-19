import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '3rem 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', marginBottom: '1rem' }}
            >
              About Hinga Heza
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: '#ccc' }}>
              Hinga Heza is a platform dedicated to connecting buyers and sellers of agricultural land in Rwanda. Our goal is to support sustainable farming practices and simplify land transactions.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', marginBottom: '1rem' }}
            >
              Quick Links
            </Typography>
            <Box>
              <Link
                href="/available-land"
                underline="hover"
                sx={{ display: 'block', color: '#ccc', marginBottom: '0.5rem' }}
              >
                Available Land
              </Link>
              <Link
                href="/about"
                underline="hover"
                sx={{ display: 'block', color: '#ccc', marginBottom: '0.5rem' }}
              >
                About Us
              </Link>
              <Link
                href="/blog"
                underline="hover"
                sx={{ display: 'block', color: '#ccc', marginBottom: '0.5rem' }}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                underline="hover"
                sx={{ display: 'block', color: '#ccc', marginBottom: '0.5rem' }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', marginBottom: '1rem' }}
            >
              Connect With Us
            </Typography>
            <Box>
              <IconButton href="#" sx={{ color: '#ccc', marginRight: '0.5rem' }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" sx={{ color: '#ccc', marginRight: '0.5rem' }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" sx={{ color: '#ccc', marginRight: '0.5rem' }}>
                <LinkedIn />
              </IconButton>
              <IconButton href="#" sx={{ color: '#ccc', marginRight: '0.5rem' }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          sx={{ textAlign: 'center', marginTop: '2rem', color: '#aaa' }}
        >
          © {new Date().getFullYear()} Hinga Heza. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
