import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

const BlogPostPage = () => {
  const relatedPosts = [
    {
      title: 'Maximizing Land Value for Agriculture',
      image: 'https://www.undp.org/sites/g/files/zskgke326/files/2023-06/dsc06160_jpg.jpg',
    },
    {
      title: "Best Crops for Rwanda's Climate",
      image: 'https://i0.wp.com/alafarika.org/wp-content/uploads/2024/07/Employees-work-in-a-green-house-multiplying-seeds-in-Musanze-District.jpg',
    },
    {
      title: 'Sustainable Farming Practices',
      image: 'https://files.worldwildlife.org/wwfcmsprod/images/Sustainable_Agriculture/hero_small/7ym5ecakzi_sustainable_agriculture_overview_XL_240144.jpg',
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#f4f4f9', padding: '2rem 0' }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          height: '350px',
          backgroundImage: 'url(https://www.undp.org/sites/g/files/zskgke326/files/2023-06/dsc06160_jpg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            textShadow: '3px 3px 8px rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
            padding: '0 1rem',
          }}
        >
          Maximizing Land Value for Agriculture
        </Typography>
      </Box>

      {/* Blog Content */}
      <Container maxWidth="md" sx={{ padding: '3rem 0' }}>
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
          }}
        >
          Unlock the Potential of Your Land
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            lineHeight: 1.8,
            color: '#555',
            textAlign: 'justify',
          }}
        >
          Agriculture is the backbone of Rwanda's economy, and maximizing land value is a key
          component of sustainable development. In this blog, we'll explore strategies for
          improving soil quality, choosing the best crops, and adopting sustainable farming
          practices to enhance productivity and profitability. These practices not only benefit
          farmers but also contribute to the long-term health of our environment...
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            lineHeight: 1.8,
            color: '#555',
            textAlign: 'justify',
          }}
        >
          The first step in maximizing land value is to assess the soil quality. By conducting
          soil tests and understanding its composition, farmers can determine the right type
          of fertilizers and amendments needed. Additionally, proper water management and crop
          rotation techniques play a critical role in maintaining soil fertility over time...
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            display: 'block',
            margin: '2rem auto',
            padding: '0.8rem 2rem',
            fontWeight: 'bold',
          }}
        >
          Read Full Blog
        </Button>
      </Container>

      {/* Related Posts Section */}
      <Box sx={{ backgroundColor: '#fff', padding: '4rem 2rem', borderTop: '1px solid #ddd' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 'bold',
              color: '#333',
              textAlign: 'center',
            }}
          >
            Related Blog Posts
          </Typography>
          <Grid container spacing={4}>
            {relatedPosts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                      transform: 'scale(1.05)',
                    },
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      flex: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: '1rem',
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      href="/blog"
                      sx={{
                        alignSelf: 'flex-start',
                      }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default BlogPostPage;
