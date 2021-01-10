import React from "react";
import router from "next/router";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavbarTime from "./navbarTime";

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar root">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className="navbar menuButton"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon/>
          </IconButton>
          <Menu
            id="navbar-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {
              // all menu items
              [
                ["Home", "/"],
                ["Time", "/time"],
                ["Compiler", "/compiler"],
              ].map(([i, f]) => (
                <MenuItem onClick={f ? () => router.push(f) : handleClose}>
                  {i}
                </MenuItem>
              ))
            }
          </Menu>

          <Typography variant="h6" className="navbar title">
            {props.title}
          </Typography>

          <NavbarTime className="navbar time"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
