import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const LandListingCard = ({ image, title, description, price, location }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LandListingCard;
