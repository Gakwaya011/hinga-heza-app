import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 3,
        py: 2,
        textAlign: "center",
        bgcolor: "#f5f5f5",
        borderTop: "1px solid #ddd",
      }}
    >
      <Typography variant="body2">© 2024 Hinga Heza - Admin Dashboard</Typography>
    </Box>
  );
};

export default Footer;
