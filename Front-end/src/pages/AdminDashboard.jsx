import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import StatsOverview from "../components/StatsOverview";
import LandManagement from "../components/LandManagement";
import UserManagement from "../components/UserManagement";
import Footer from "../components/FooterAdmin";

const AdminDashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        {/* TopBar */}
        <TopBar />

        {/* Dashboard Content */}
        <Box sx={{ p: 3 }}>
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
