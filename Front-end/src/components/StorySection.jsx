import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const StorySection = () => {
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
      >
        Our Story
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Hinga Heza was founded with a mission to bridge the gap between
            agricultural landowners and buyers in Rwanda. Recognizing the
            potential of Rwanda's fertile lands, we set out to create a platform
            that not only facilitates land transactions but also provides expert
            guidance, legal clarity, and community support. 
            <br />
            <br />
            Whether you're looking to invest, grow your farming business, or
            explore new opportunities, Hinga Heza is here to make the journey
            seamless and transparent.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://farmersreviewafrica.com/wp-content/uploads/2016/10/how-digital-is-solving-three-problems-in-agriculture-2.jpg"
            alt="Our Story"
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StorySection;
