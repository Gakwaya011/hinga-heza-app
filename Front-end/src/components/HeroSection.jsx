import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: { xs: "60vh", md: "80vh" }, // Adjust height for smaller screens
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url('https://rapidtransition.org/wp-content/uploads/2022/11/rowan-simpson-Bo7aDZlq270-unsplash-scaled.jpg')`, // Replace with actual image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white",
        textAlign: "center",
        px: 2, // Add padding for smaller screens
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></Box>

      {/* Content */}
      <Box sx={{ zIndex: 2 }}>
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.8rem", md: "3rem" }, // Responsive font sizes
            }}
          >
            Find the Perfect Agricultural Land in Rwanda
          </Typography>
        </motion.div>

        {/* Subtitle Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              fontSize: { xs: "0.9rem", md: "1.25rem" }, // Responsive font sizes
            }}
          >
            Discover the best agricultural opportunities with verified listings
            and expert guidance.
          </Typography>
        </motion.div>

        {/* Button Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button
            variant="contained"
            size="large"
            component={Link} // Use Link as the Button component
            to="/available-land" // Target route for the Available Land page
            sx={{
              backgroundColor: "#4caf50",
              color: "#fff",
              ":hover": { backgroundColor: "#45a049" },
            }}
          >
            Browse Land Listings
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;
