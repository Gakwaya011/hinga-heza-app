import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const MissionSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Our Mission
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: "auto" }}>
        At Hinga Heza, our mission is to empower agricultural enthusiasts by connecting them with 
        premium agricultural land in Rwanda. We strive to make land acquisition simple, transparent, 
        and accessible for everyone while supporting sustainable agricultural development.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Accessibility
          </Typography>
          <Typography variant="body2">
            We provide a user-friendly platform to browse verified listings easily.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Sustainability
          </Typography>
          <Typography variant="body2">
            Supporting environmentally friendly agricultural practices.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Expertise
          </Typography>
          <Typography variant="body2">
            Partnering with experts to offer guidance and insights.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MissionSection;
