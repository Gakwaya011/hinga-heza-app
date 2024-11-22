import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

const stats = [
  { label: "Total Lands", value: 120 },
  { label: "Total Users", value: 58 },
  { label: "New Listings", value: 10 },
];

const StatsOverview = () => {
  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6">{stat.label}</Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
              {stat.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsOverview;
