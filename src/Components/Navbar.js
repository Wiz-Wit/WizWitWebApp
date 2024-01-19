import { React, useState } from "react";
// import * as React from 'react';
import logo from "../Assets/WizWit-logos_transparent.png";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material';

import NavTheme from "../Stylesheets/TabsTheme";

import "../Stylesheets/Navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="header">
      <nav className="nav">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <MenuOpenIcon size={30} style={{ color: "#ffffff" }} />
          ) : (
            <MenuIcon size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ThemeProvider theme={NavTheme}>
        <Box sx={{ width: "100%",  p: NavTheme.spacing(5), }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="wrapped label tabs example"
          >
            <Tab style={{ /*CSS*/color: "#FFB060" }} value="one" label="Games" />
            <Tab style={{ color: "#FFB060" }} value="two" label="Esports" />
            <Tab style={{ color: "#FFB060" }} value="three" label="About Us" />
          </Tabs>
        </Box>
        </ThemeProvider>
        {/* <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <a href='/' onClick={closeMenu}>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#about' onClick={closeMenu}>About</a>
          </li>
          <li className='nav-item'>
            <a href='#projects' onClick={closeMenu}>Projects</a>
          </li>
          <li className='nav-item'>
            <a href='#contact' onClick={closeMenu}>Contact</a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Navbar;
