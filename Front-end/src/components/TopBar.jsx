import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { Notifications, Logout } from "@mui/icons-material";

const TopBar = () => {
  return (
    <Box
      sx={{
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 3,
        bgcolor: "#fff",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Admin Dashboard
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar alt="Admin" src="/profile.jpg" />
        <IconButton>
          <Logout />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
