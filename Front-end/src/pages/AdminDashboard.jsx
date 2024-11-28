import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useMediaQuery,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { DataGrid } from "@mui/x-data-grid";
import Graph from "../components/Graph";
import LandForm from "../components/LandForm";
import EditIcon from "@mui/icons-material/Edit";
import { getLands, deleteLand, getUsers } from "../api/apiService"; // Ensure getUsers function is implemented

const AdminDashboard = () => {
  const [lands, setLands] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLandFormOpen, setIsLandFormOpen] = useState(false);
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    fetchLands(); // Initial lands fetch on mount
    fetchUsers(); // Fetch users on mount
  }, []);

  const fetchLands = async () => {
    setLoading(true);
    try {
      const data = await getLands();
      setLands(data.map((land) => ({ id: land.id, ...land })));
    } catch (error) {
      console.error("Error fetching lands:", error);
    }
    setLoading(false);
  };

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data.map((user) => ({ id: user.id, ...user })));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this land?")) {
      try {
        await deleteLand(id);
        fetchLands(); // Refresh the land list after deletion
      } catch (error) {
        console.error("Error deleting land:", error);
      }
    }
  };

  const handleEdit = (row) => {
    console.log("Edit land:", row);
    // Implement editing logic here
  };

  const handleLogout = () => {
    // Logic for logging out the admin (e.g., clearing auth tokens)
    console.log("Logging out...");
  };

  const handleManageUsers = () => {
    setIsUserManagementOpen(true);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant={isSmallScreen ? "temporary" : "persistent"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: isSmallScreen ? 200 : 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button onClick={() => console.log("Navigate to Dashboard")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => setIsLandFormOpen(true)}>
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Add Land" />
          </ListItem>
          <ListItem button onClick={handleManageUsers}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Users" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        {/* AppBar */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(!drawerOpen)}
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        {/* Dashboard Content */}
        <Toolbar />
        <Grid container spacing={3}>
          {/* Overview Cards */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Users</Typography>
                <Typography variant="h4">{users.length}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Lands</Typography>
                <Typography variant="h4">{lands.length}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Graph Section */}
        <Box sx={{ marginY: 4 }}>
          <Graph />
        </Box>

        {/* Manage Users Table */}
        {isUserManagementOpen && (
          <Box sx={{ marginY: 4 }}>
            <Typography variant="h5" gutterBottom>
              Manage Users
            </Typography>
            <Box sx={{ height: isSmallScreen ? 300 : 400 }}>
              <DataGrid
                rows={users}
                columns={[
                  { field: "id", headerName: "ID", width: 70 },
                  { field: "name", headerName: "Name", width: 200 },
                  { field: "email", headerName: "Email", width: 250 },
                  { field: "role", headerName: "Role", width: 150 },
                  {
                    field: "actions",
                    headerName: "Actions",
                    width: 180,
                    renderCell: (params) => (
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <EditIcon onClick={() => handleEdit(params.row)} style={{ cursor: "pointer" }} />
                      </Box>
                    ),
                  },
                ]}
                pageSize={5}
                loading={loading}
                rowsPerPageOptions={[5, 10]}
              />
            </Box>
          </Box>
        )}

        {/* Land Management Table */}
        <Typography variant="h5" gutterBottom>
          Manage Lands
        </Typography>
        <Box sx={{ height: isSmallScreen ? 300 : 400 }}>
          <DataGrid
            rows={lands}
            columns={[
              { field: "id", headerName: "ID", width: 70 },
              { field: "area", headerName: "Area (sq. meters)", width: 150 },
              { field: "price", headerName: "Price", width: 150 },
              { field: "location", headerName: "Location", width: 250 },
              {
                field: "actions",
                headerName: "Actions",
                width: 180,
                renderCell: (params) => (
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <EditIcon onClick={() => handleEdit(params.row)} style={{ cursor: "pointer" }} />
                    <Button onClick={() => handleDelete(params.row.id)} color="error">
                      Delete
                    </Button>
                  </Box>
                ),
              },
            ]}
            pageSize={5}
            loading={loading}
            rowsPerPageOptions={[5, 10]}
          />
        </Box>

        {/* Add Land Form */}
        {isLandFormOpen && <LandForm onClose={() => setIsLandFormOpen(false)} />}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
