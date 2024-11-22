import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const values = [
  { title: "Transparency", description: "We prioritize clear and honest transactions." },
  { title: "Sustainability", description: "Promoting sustainable agricultural practices." },
  { title: "Community", description: "Building connections within the agricultural sector." },
];

const ValuesSection = () => {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: "#f4f4f4" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
      >
        Our Core Values
      </Typography>
      <Grid container spacing={4}>
        {values.map((value, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box
              sx={{
                textAlign: "center",
                padding: 4,
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                {value.title}
              </Typography>
              <Typography>{value.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ValuesSection;
