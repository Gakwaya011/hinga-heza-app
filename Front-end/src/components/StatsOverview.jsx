import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography, CircularProgress } from "@mui/material";

// Example API fetch function (to be replaced with actual service call)
const fetchStats = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { label: "Total Lands", value: 120 },
        { label: "Total Users", value: 58 },
        { label: "New Listings", value: 10 },
      ]);
    }, 1000); // Simulate a network delay
  });
};

const StatsOverview = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStats = async () => {
      try {
        const data = await fetchStats();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    getStats();
  }, []);

  return (
    <Box sx={{ my: 3 }}>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  textAlign: "center",
                  bgcolor: "#f5f5f5",
                  border: "1px solid #ddd",
                  "&:hover": { boxShadow: 6, transform: "scale(1.03)", transition: "0.3s" },
                }}
              >
                <Typography variant="h6" color="textSecondary">
                  {stat.label}
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", mt: 1, color: "#1976d2" }}>
                  {stat.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default StatsOverview;
