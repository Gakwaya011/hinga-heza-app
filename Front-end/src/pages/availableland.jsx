import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";
import LandListingCard from "../components/LandListingCard"; // Updated component name
import { motion } from "framer-motion"; // Add animations

const AvailableLands = () => {
  const [lands, setLands] = useState([]); // Holds all lands from API
  const [search, setSearch] = useState(""); // Search input value
  const [locationFilter, setLocationFilter] = useState(""); // Location filter value
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const itemsPerPage = 6; // Number of items to show per page

  // Fetch lands from the backend API
  useEffect(() => {
    const fetchLands = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/lands");
        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging API response
        setLands(Array.isArray(data) ? data : []); // Ensure it's an array
      } catch (error) {
        console.error("Error fetching lands:", error);
      }
    };
    fetchLands();
  }, []);

  // Filter logic: Applies search and location filters
  const filteredLands = lands
    .filter((land) => land.title && land.location) // Filter out incomplete items
    .filter(
      (land) =>
        land.title.toLowerCase().includes(search.toLowerCase()) &&
        (locationFilter ? land.location === locationFilter : true)
    );

  // Paginate filtered lands
  const totalPages = Math.ceil(filteredLands.length / itemsPerPage);
  const displayedLands = filteredLands.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  console.log("Filtered and Paginated Lands:", displayedLands); // Check if displayed lands have the expected structure

  return (
    <Box sx={{ p: 4, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}
        >
          Explore Available Lands
        </Typography>
      </motion.div>

      {/* Filters Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
          <TextField
            label="Search by title"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flexGrow: 1, minWidth: "250px" }}
          />
          <Select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            displayEmpty
            sx={{ flexGrow: 1, minWidth: "200px" }}
          >
            <MenuItem value="">All Locations</MenuItem>
            <MenuItem value="Kigali">Kigali</MenuItem>
            <MenuItem value="Musanze">Musanze</MenuItem>
            <MenuItem value="Gisenyi">Gisenyi</MenuItem>
          </Select>
          <Button
            variant="contained"
            onClick={() => {
              setSearch("");
              setLocationFilter("");
            }}
          >
            Reset Filters
          </Button>
        </Box>
      </motion.div>

      {/* Land Listings */}
      <Grid container spacing={4}>
        {displayedLands.length > 0 ? (
          displayedLands.map((land) => (
            <motion.div
              key={land.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Grid item xs={12} sm={6} md={4}>
                <LandListingCard
                  image={land.image || "default-image.jpg"} // Fallback for missing image
                  title={land.title}
                  description={land.description || "No description provided"}
                  price={land.price || 0}
                  location={land.location}
                />
              </Grid>
            </motion.div>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{ textAlign: "center", width: "100%", mt: 4 }}
          >
            No lands found. Try adjusting the filters.
          </Typography>
        )}
      </Grid>

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default AvailableLands;
