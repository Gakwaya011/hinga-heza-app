import React from "react";
import { Box, Typography } from "@mui/material";

const UserManagement = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Manage Users
      </Typography>
      {/* Table or List of users will go here */}
    </Box>
  );
};

export default UserManagement;
