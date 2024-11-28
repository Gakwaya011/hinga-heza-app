import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  Pagination,
  Card,
  CardContent,
  CardMedia,
  Dialog,
} from "@mui/material";
import { motion } from "framer-motion";

const AvailableLands = () => {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLand, setSelectedLand] = useState(null);

  const lands = [
    {
      id: 1,
      title: "Land in Kicukiro",
      description:
        "Fertile land with high soil quality, pH 6.5, good water availability.",
      price: 1000000,
      location: "Kigali",
      hectares: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjY_RIgbAmcV1IqkO1A0sR1k3M040PorAOjsMoofevi7UPeps4ZrBor5kuD_nQfOSCWZs&usqp=CAU",
      soilFertility: "High",
      soilPH: "6.5",
      waterAvailability: "Abundant",
      cropHistory: "Beans, maize, potatoes grown here.",
      phoneNumber: "+250-788-123-456",
    },
   
    {
      id: 2,
      title: "Land in Gisenyi",
      description: "Land near the lake, ideal for agriculture.",
      price: 2000000,
      location: "Gisenyi",
      hectares: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzabqLe0EQcDqX72r6W07CPYIUntH8IO0hnA&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-788-123-456",
    },
    {
      id: 3,
      title: "Land in Muhanga",
      description: "Land near the lake, ideal for agriculture.",
      price: 2200000,
      location: "Muhanga",
      hectares: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPwV3J4RnI3M0mhsAinCnzAzjt9bu9o59Vg&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-788-123-400",
    },
    {
      id: 4,
      title: "Land in Nyaruguru",
      description: "Expansive savanna, perfect for cattle ranching..",
      price: 1100000,
      location: "Nyaruguru",
      hectares: 3,
      image: "https://plutproperties.com/wp-content/uploads/2024/01/land-for-sale-in-Kicukiro-3.jpg",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-788-003-456",
    },
    {
      id: 6,
      title: "Land in Ngororero",
      description: "Sandy soil near the coast, ideal for pineapple cultivation.",
      price: 1000000,
      location: "Ngororero",
      hectares: 6,
      image: "https://www.houseinrwanda.com/sites/default/files/styles/large/public/2021-11/niws.jpg?itok=8Qd12wDA",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-780-123-006",
    },
    {
      id: 7,
      title: "Land in Ruhango",
      description: "Land near the swamps, ideal for agriculture.",
      price: 2200000,
      location: "Ruhango",
      hectares: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMUsd770u7EMh9DfjyBA_yGJQRHw8MvWkMA&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "rice, bananas, and avocados grown here.",
      phoneNumber: "+250-788-123-886",
    },
    {
      id: 8,
      title: "Land in Nyagatare",
      description: "Fertile plains with rich soil, perfect for growing crops.",
      price: 2200000,
      location: "Nyagatare",
      hectares: 5,
      image: "https://5.imimg.com/data5/JR/VB/MK/SELLER-98421711/agricultural-land-for-sale-at-apte-village-taluka-panvel-dist-raigad-500x500.jpg",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and oranges grown here.",
      phoneNumber: "+250-788-663-456",
    },
    {
      id: 9,
      title: "Land in Gasabo",
      description: "Hilly terrain with scenic views, suitable for tea farming..",
      price: 2200000,
      location: "Gasabo",
      hectares: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61zsO8EHiyJ684iKZ5lZxrhyhaQwXD8PMfQ&s",
      soilFertility: "medium",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "potatoes, bananas, and avocados grown here.",
      phoneNumber: "+250-788-773-456",
    },
    {
      id: 10,
      title: "Land in Musanze",
      description: "Land near the lake, ideal for agriculture.",
      price: 1200000,
      location: "Musanze",
      hectares: 5,
      image: "https://www.fao.org/typo3temp/pics/63b574d328.jpg",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "irish potatoes, bananas, and coffee grown here.",
      phoneNumber: "+250-788-123-996",
    },
    {
      id: 11,
      title: "Land in Ngororero",
      description: "A spacious plot with a mix of open fields and forest, ideal for livestock grazing.",
      price: 2300000,
      location: "Ngororero",
      hectares: 5,
      image: "https://www.researchgate.net/publication/257805470/figure/fig1/AS:297495486844933@1447939859721/A-view-of-terraced-hills-in-Rwanda-The-adoption-of-sustainable-land-management-practices.png",
      soilFertility: "High",
      soilPH: "5.2",
      waterAvailability: "river",
      cropHistory: " bananas, and tomatoes grown here.",
    },
    {
      id: 12,
      title: "Land in Gisenyi",
      description: "Land near the lake, ideal for agriculture.",
      price: 2200000,
      location: "Gisenyi",
      hectares: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmyvxk5NogUjKZJiLIhxia4TJTB3Dl9xnww&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-788-123-000",
    },
    {
      id: 13,
      title: "Land in Musanze",
      description: "High-altitude land with cool temperatures, perfect for coffee plantations.",
      price: 2100000,
      location: "Musanze",
      hectares: 5,
      image: "https://rwandadispatch.com/wp-content/uploads/2024/09/Terracing.jpg",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-788-993-456",
    },
    {
      id: 14,
      title: "Land in Ruhango",
      description: "Sun-drenched fields with irrigation access, suitable for vegetable farming.",
      price: 2200000,
      location: "Ruhango",
      hectares: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXNkK5J4dQCrrp9QFlY6rls2dGyLD9WYIVQ&s",
      soilFertility: "medium",
      soilPH: "4.2",
      waterAvailability: "river and streams",
      cropHistory: "potatoes, bananas, and avocados grown here.",
      phoneNumber: "+250-788-003-456",
    },
    {
      id: 15,
      title: "kicukiro",
      description: "Sun-drenched fields with irrigation access, suitable for vegetable farming",
      price: 1700000,
      location: "Kicukiro",
      hectares: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jXB_1EiZHKEe_64HwxXFGPWR-UeMMt1OmQ&s",
      soilFertility: "low",
      soilPH: "6.2",
      waterAvailability: "  streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-788-123-455",
    },
    {
      id: 16,
      title: "Land in Nyagatare",
      description: "Land bordered by natural springs, ideal for organic farming..",
      price: 1600000,
      location: "Nyagatare",
      hectares: 7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIx2Q7oGxZUMvay7B06eTJGswz3cSwoMCPYg&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-788-777-456",
    },
    {
      id: 17,
      title: "Land in Nyaruguru",
      description: "Land near the lake, ideal for agriculture.",
      price: 2900000,
      location: "Nyaruguru",
      hectares: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbp_xh1PCLwRt_eJAsCz4BHyVw4IDDWPERA&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-788-444-456",
    },
    {
      id: 18,
      title: "Land in Gisenyi",
      description: "Land near the lake, ideal for agriculture.",
      price: 2200000,
      location: "Gisenyi",
      hectares: 7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSLcMAaUsb9YCiKzRDe3udNBQuzccagPKiA&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-788-123-444",
    },
    {
      id: 19,
      title: "Land in Muhanga",
      description: "Land near the lake, ideal for agriculture.",
      price: 2200000,
      location: "Muhanga",
      hectares: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSLcMAaUsb9YCiKzRDe3udNBQuzccagPKiA&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-788-123-006",
    },
    {
      id: 20,
      title: "Land in Nyagatare",
      description: "Land near the lake, ideal for agriculture.",
      price: 2100000,
      location: "Nyagatare",
      hectares: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSLcMAaUsb9YCiKzRDe3udNBQuzccagPKiA&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-780-123-456",
    },
    {
      id: 21,
      title: "Land in Gisenyi",
      description: "Land near the lake, ideal for agriculture.",
      price: 2000000,
      location: "Gisenyi",
      hectares: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wTckHhGAug5Md_JHCBidP-9Ix9_zBmQ0nA&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-780-000-456",
    },
    {
      id: 22,
      title: "Land in Nyaruguru",
      description: "Land near the lake, ideal for agriculture.",
      price: 2000000,
      location: "Nyaruguru",
      hectares: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmSCJYz3CqMFH_AJVBOaDgOGAGW49F1zelsQ&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-780-123-111",
    },
    {
      id: 23,
      title: "Land in Muhanga",
      description: "Land near the lake, ideal for agriculture.",
      price: 1200000,
      location: "Muhanga",
      hectares: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClW1BAk1iK1KnQ7lZay4U7wlLQe7xjU3jcQ&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-780-113-111",
    },
    {
      id: 24,
      title: "Land in Nyagatare",
      description: "Land near the lake, ideal for agriculture.",
      price: 3200000,
      location: "Nyagatare",
      hectares: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEc71ru4N_Gmg-Kh471S5g8E_nHzznQ17Vg&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-780-223-113",
    },
    {
      id: 25,
      title: "Land in Gisenyi",
      description: "Land near the lake, ideal for agriculture.",
      price: 6200000,
      location: "Gisenyi",
      hectares: 7,
      image: "https://plutproperties.com/wp-content/uploads/2022/08/Land-for-sale-in-Bugesera-1.jpg",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, bananas, and avocados grown here.",
      phoneNumber: "+250-780-223-113",
    },
    {
      id: 26,
      title: "Land in Gisenyi",
      description: "Land near the lake, ideal for agriculture.",
      price: 5200000,
      location: "Gisenyi",
      hectares: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXOpfDX_7k3H4h4lMezA2wH0MS20Ej0OPq0w&s",
      soilFertility: "High",
      soilPH: "6.2",
      waterAvailability: "Lake and streams",
      cropHistory: "Coffee, tea, and potatoes grown here.",
    },
  ];

  const displayedLands = lands.filter(
    (land) =>
      land.title.toLowerCase().includes(search.toLowerCase()) &&
      (locationFilter === "" || land.location === locationFilter)
  );

  const totalPages = Math.ceil(displayedLands.length / 6);
  const handlePageChange = (_, page) => setCurrentPage(page);

  return (
    <Box sx={{ p: 4, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
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
          <MenuItem value="Kicukiro">Kicukiro</MenuItem>
          <MenuItem value="Musanze">Musanze</MenuItem>
          <MenuItem value="Gisenyi">Gisenyi</MenuItem>
          <MenuItem value="Gasabo">Gasabo</MenuItem>
          <MenuItem value="Nyaruguru">Nyaruguru</MenuItem>
          <MenuItem value="Muhanga">Muhanga</MenuItem>
          <MenuItem value="Ngororero">Ngororero</MenuItem>
          <MenuItem value="Ruhango">Ruhango</MenuItem>
          <MenuItem value="Nyagatare">Nyagatare</MenuItem>
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

      <Grid container spacing={4}>
        {displayedLands.map((land) => (
          <Grid item xs={12} sm={6} md={4} key={land.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedLand(land)}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={land.image}
                  alt={land.title}
                  sx={{ objectFit: "cover" }}
                  style={{
                    height: "200px", // Fixed height
                    objectFit: "cover", // Crop and fit the image
                  }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {land.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      height: "50px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {land.description}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
                    RWF {land.price.toLocaleString()}
                  </Typography>
                  <Typography variant="body2">Phone: {land.phoneNumber}</Typography>
                  <Typography variant="body2">Area: {land.hectares} hectares</Typography> {/* Displaying hectares */}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>

      {selectedLand && (
        <Dialog
          open={Boolean(selectedLand)}
          onClose={() => setSelectedLand(null)}
          fullWidth
          maxWidth="sm"
        >
          <Box sx={{ p: 4, textAlign: "center" }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              {selectedLand.title}
            </Typography>
            <img
              src={selectedLand.image}
              alt={selectedLand.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <Typography variant="body1" sx={{ mt: 2 }}>
              {selectedLand.description}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              <strong>Soil Fertility:</strong> {selectedLand.soilFertility}
            </Typography>
            <Typography variant="body2">
              <strong>Soil pH:</strong> {selectedLand.soilPH}
            </Typography>
            <Typography variant="body2">
              <strong>Water Availability:</strong> {selectedLand.waterAvailability}
            </Typography>
            <Typography variant="body2">
              <strong>Crop History:</strong> {selectedLand.cropHistory}
            </Typography>
            <Typography variant="body2">
              <strong>Area:</strong> {selectedLand.hectares} hectares {/* Displaying hectares in the dialog */}
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 4 }}
              onClick={() => setSelectedLand(null)}
            >
              Close
            </Button>
          </Box>
        </Dialog>
      )}
    </Box>
  );
};

export default AvailableLands;
