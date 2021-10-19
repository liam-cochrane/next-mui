import router from "next/router";
import { useState } from "react";

import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavigationList from "./navigation-list";

const PageLayout = ({ children }) => {
  const [navigationIsOpen, setNavigationIsOpen] = useState(false);
  const handleMenuIconClick = () => {
    setNavigationIsOpen(true);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuIconClick}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" onClick={() => router.push("login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        open={navigationIsOpen}
        anchor="left"
        onClose={() => setNavigationIsOpen(false)}
      >
        <NavigationList />
      </Drawer>
      {children}
    </>
  );
};

export default PageLayout;
