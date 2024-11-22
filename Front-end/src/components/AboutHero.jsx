import React from "react";
import { Box, Typography } from "@mui/material";

const AboutHero = () => {
  return (
    <Box
      sx={{
        height: { xs: "50vh", md: "70vh" },
        backgroundImage: `url("https://media.istockphoto.com/id/511677074/photo/tea-fields.jpg?s=612x612&w=0&k=20&c=ef7aUduVZDOVvtwQGwJC6nZUIFF96jx2s5q_lt9Sp3U=")`,
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
          About Hinga Heza
        </Typography>
        <Typography variant="h6">
          Connecting buyers and sellers to revolutionize agriculture in Rwanda.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutHero;
