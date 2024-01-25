//import statements
import { React, useState } from "react";

// import * as React from 'react';
// Components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
// Icons
//import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
// Style items
import NavTheme from "../Stylesheets/TabsTheme";
import "../Stylesheets/Navbar.scss";
// Images
import logo from "../Assets/WizWit-logos_transparent.png";
// Page List
import { tabList } from "../Pages/TabList";
// registration and sign in
import NotLoggedInStackButtons from './NavComponents/GuestNav/NotLoggedInStackButtons'
// Member account icon / button 
import LoggedInStackbuttons from "./NavComponents/MemberNav/LoggedInStackButtons";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

// Tabs
  const [value, setValue] = useState("zero");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <ThemeProvider theme={NavTheme}>
        <AppBar position="static" sx={{ bgcolor: "primary.background" }}>
          <Toolbar>
            <Link href="/">
              <Box component="img" sx={{ height: 64 }} alt="logo" src={logo} />
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "inline" } }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="wrapped"
                aria-label="wrapped label tabs example"
              >
                {tabList.map((tab) => (
                  <Tab
                    label={tab.title}
                    icon={tab.icon}
                    onClick={closeMenu}
                    sx={{ color: "primary.textColor" }}
                  />
                ))}
              </Tabs>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "inline" } }} />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "inline" } }}>
              <NotLoggedInStackButtons display=""/>
              <LoggedInStackbuttons display=""/>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default Navbar;
