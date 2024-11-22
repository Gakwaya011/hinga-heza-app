import React from "react";
import { Box, Button, Typography } from "@mui/material";

const LandManagement = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Manage Lands
      </Typography>
      <Button variant="contained" sx={{ mb: 2 }}>
        Add New Land
      </Button>
      {/* Table or Card list of lands will go here */}
    </Box>
  );
};

export default LandManagement;
