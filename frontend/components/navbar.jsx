import React from "react";
import {AppBar, Toolbar, IconButton, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import Time from "./time";

export default function Navbar(props) {
  return (
    <div className="navbar root">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className="navbar menuButton" color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className="navbar title">
            {props.title}
          </Typography>

          <Time className="navbar time"/>
        </Toolbar>
      </AppBar>
    </div>);
}