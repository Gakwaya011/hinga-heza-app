import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactDetails = () => {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: "#f4f4f4", textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Our Contact Details
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <EmailIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
          <Typography variant="h6">Email</Typography>
          <Typography>info@hingaheza.com</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <PhoneIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
          <Typography variant="h6">Phone</Typography>
          <Typography>+250 123 456 789</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <LocationOnIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
          <Typography variant="h6">Address</Typography>
          <Typography>Kigali, Rwanda</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactDetails;
