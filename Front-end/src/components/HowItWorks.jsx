import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DoneIcon from "@mui/icons-material/Done";

const HowItWorks = () => {
  const steps = [
    {
      icon: <SearchIcon fontSize="large" color="primary" />,
      title: "Search for Land",
      description: "Browse our listings and find agricultural land that suits your needs.",
    },
    {
      icon: <ContactMailIcon fontSize="large" color="primary" />,
      title: "Contact the Owner",
      description: "Reach out to landowners or agents directly through the platform.",
    },
    {
      icon: <DoneIcon fontSize="large" color="primary" />,
      title: "Seal the Deal",
      description: "Complete the purchase with full legal guidance and support.",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        How It Works
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: 4,
              }}
            >
              {step.icon}
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2">{step.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
