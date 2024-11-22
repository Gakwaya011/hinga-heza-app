import React from "react";
import { Box, Typography } from "@mui/material";

const ContactHero = () => {
  return (
    <Box
      sx={{
        height: { xs: "50vh", md: "70vh" },
        backgroundImage: `url("https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        color: "white",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></Box>
      <Box sx={{ textAlign: "center", zIndex: 1 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="h6">
          We're here to help. Get in touch with us today.
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactHero;
