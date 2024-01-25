import { React, useState } from 'react'
// mui items
import { AccountCircle } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
// Style items
import { ThemeProvider } from "@mui/material";
import NavTheme from "../../../Stylesheets/TabsTheme";

const MemberButtonMenu = () => {
    // react usestate for handling menu open / close
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleMemberMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // create menu id and menu
    const menuId = "primary-search-account-menu";

  return (
    <ThemeProvider theme={NavTheme}>
        <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={isMenuOpen ? {menuId} : undefined}
            aria-haspopup="true"
            aria-expanded={isMenuOpen ? 'true' : undefined}
            onClick={handleMemberMenuOpen}
        >
            <AccountCircle color="primary"/>
        </IconButton>
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            open={isMenuOpen}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            
        >
            <MenuItem>
                <Button href='/Settings' sx={{ bgcolor: "primary.background", color: "primary.textColor" }}>Settings</Button>
            </MenuItem>
            <MenuItem>
                <Button href='/Account' sx={{ bgcolor: "primary.background", color: "primary.textColor" }}>Account</Button>
            </MenuItem>
        </Menu>
    </ThemeProvider>
    
  )
}

export default MemberButtonMenu