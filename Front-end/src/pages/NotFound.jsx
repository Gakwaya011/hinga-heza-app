import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{
          backgroundColor: "#4caf50",
          color: "#fff",
          ":hover": { backgroundColor: "#45a049" },
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFound;
