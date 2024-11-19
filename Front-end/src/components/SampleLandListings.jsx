import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

const LandCard = ({ image, title, description }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "12px",
      transition: "transform 0.3s, box-shadow 0.3s",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
      },
    }}
  >
    <CardMedia
      component="img"
      height="140"
      image={image}
      alt={title}
      sx={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
    />
    <CardContent>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#555", mb: 2 }}>
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        variant="contained"
        size="small"
        sx={{
          backgroundColor: "#4caf50",
          color: "#fff",
          ":hover": { backgroundColor: "#45a049" },
          width: "100%",
        }}
        onClick={() => alert(`Viewing details for ${title}`)} // Temporary action
      >
        View Details
      </Button>
    </CardActions>
  </Card>
);

const SampleLandListings = () => {
  const sampleLands = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZl8fzMv2cV-klQxBSdQ5V6gt3XBpnK66JUg&s",
      title: "Fertile Land in Musanze",
      description: "2 hectares of fertile soil with great irrigation.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7vjjnjB2Uzw5aje_elxdI502sOM0Zv4Jag&s",
      title: "Hilly Land in Gisenyi",
      description: "3 hectares ideal for tea plantations.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gbQa4yJ409czVVPZyk0lZN11PKZm907DxQ&s",
      title: "Flat Farmland in Kigali",
      description: "5 hectares close to the main highway.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-E-nt0hnwv6bvYz5yo2DXIlFp295YZNVxA&s",
      title: "Rich Soil Land in Nyamata",
      description: "4 hectares perfect for maize farming.",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        textAlign: "center",
        background: "linear-gradient(to bottom, #f0f8ff, #e6e6e6)",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Explore Sample Agricultural Land Listings
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {sampleLands.map((land, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <LandCard
              image={land.image}
              title={land.title}
              description={land.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SampleLandListings;
