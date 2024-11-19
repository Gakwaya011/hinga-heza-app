import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const LandCard = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: "0 auto" }}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Button variant="contained" size="small" sx={{ backgroundColor: "#4caf50", ":hover": { backgroundColor: "#45a049" } }}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default LandCard;
