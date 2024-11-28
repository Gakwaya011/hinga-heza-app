import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { createLand } from "../api/apiService"; // Import the createLand function

const LandForm = ({ onClose }) => {
  const [landData, setLandData] = useState({
    area: "",
    price: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLandData({ ...landData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createLand(landData); // Call the createLand function
      onClose(); // Close the form after submission
    } catch (error) {
      console.error("Error creating land:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Area"
        name="area"
        value={landData.area}
        onChange={handleChange}
        required
      />
      <TextField
        label="Price"
        name="price"
        value={landData.price}
        onChange={handleChange}
        required
      />
      <TextField
        label="Location"
        name="location"
        value={landData.location}
        onChange={handleChange}
        required
      />
      <TextField
        label="Description"
        name="description"
        value={landData.description}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Create Land
      </Button>
    </Box>
  );
};

export default LandForm;
