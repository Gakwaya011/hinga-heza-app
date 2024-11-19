import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, CardMedia } from '@mui/material';

const BlogSection = () => {
  return (
    <Box sx={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#333' }}>
        Latest Blog Posts
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {[
          {
            title: 'Maximizing Land Value for Agriculture',
            description: 'Learn how to improve the soil and make your land more productive for agriculture...',
            image: 'https://www.undp.org/sites/g/files/zskgke326/files/2023-06/dsc06160_jpg.jpg',
          },
          {
            title: "Best Crops for Rwanda's Climate",
            description: 'Explore which crops thrive in Rwanda\'s diverse climate and grow your farming business...',
            image: 'https://i0.wp.com/alafarika.org/wp-content/uploads/2024/07/Employees-work-in-a-green-house-multiplying-seeds-in-Musanze-District.jpg',
          },
          {
            title: 'Sustainable Farming Practices',
            description: 'Discover sustainable farming techniques that increase yields while preserving the environment...',
            image: 'https://files.worldwildlife.org/wwfcmsprod/images/Sustainable_Agriculture/hero_small/7ym5ecakzi_sustainable_agriculture_overview_XL_240144.jpg',
          },
          {
            title: 'The Future of Agricultural Land in Rwanda',
            description: 'Insights on the future of agricultural land investments and trends in Rwanda...',
            image: 'https://i0.wp.com/www.topafricanews.com/wp-content/uploads/2024/01/AGRIC-1.jpg?resize=640%2C371&ssl=1',
          },
        ].map((blog, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                  transform: 'scale(1.05)',
                },
                transition: 'transform 0.3s, box-shadow 0.3s',
                height: '100%',
              }}
            >
              <CardMedia component="img" height="200" image={blog.image} alt={blog.title} />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  {blog.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: '#555' }}>
                  {blog.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  href="/blog"
                  sx={{ alignSelf: 'start', mt: 'auto' }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSection;
