import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";

const ManageLandsPage = () => {
  const [lands, setLands] = useState([]);
  const [error, setError] = useState("");

  // Fetch all lands
  const fetchLands = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/lands");
      if (!response.ok) throw new Error("Failed to fetch lands.");
      const data = await response.json();
      setLands(data);
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  // Delete a land
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/lands/${id}`, {
        method: "DELETE",
      });
      if (response.status === 204) {
        setLands((prevLands) => prevLands.filter((land) => land.id !== id));
      } else {
        throw new Error("Failed to delete land.");
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLands();
  }, []);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Manage Lands
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => console.log("Redirect to Add New Land Form")}
      >
        Add New Land
      </Button>
      {error && (
        <Typography variant="body1" color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lands.map((land) => (
              <TableRow key={land.id}>
                <TableCell>{land.id}</TableCell>
                <TableCell>{land.title}</TableCell>
                <TableCell>{land.location}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mr: 1 }}
                    onClick={() => console.log("Redirect to Edit Form", land.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(land.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageLandsPage;
