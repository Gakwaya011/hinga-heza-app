import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import StatsOverview from "../components/StatsOverview";
import LandManagement from "../components/LandManagement";
import UserManagement from "../components/UserManagement";
import Footer from "../components/FooterAdmin";

const AdminDashboard = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Reset CSS Baseline */}
      <CssBaseline />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* TopBar */}
        <TopBar />

        {/* Dashboard Content */}
        <Box sx={{ flexGrow: 1, p: 3, bgcolor: "#f4f5f7" }}>
          <StatsOverview />
          <LandManagement />
          <UserManagement />
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
