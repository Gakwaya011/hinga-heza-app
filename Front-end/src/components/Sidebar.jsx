import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, ManageAccounts, Landscape } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box sx={{ width: "240px", height: "100vh", bgcolor: "#1e1e2f", color: "white" }}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Dashboard style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ManageAccounts style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Manage Users" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Landscape style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Manage Lands" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
