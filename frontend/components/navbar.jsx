import React from "react";
import router from "next/router";

import {
  //AppBar,
  //Toolbar,
  IconButton,
  //Typography,
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
    <nav
      className="navbar navbar-light navbar-expand-md navigation-clean"
      style={{
        background: "#82c6e2"
      }}>
      <div className="container">
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
              <MenuItem onClick={f ? () => {
                router.push(f).then();
                handleClose();
              } : handleClose}>
                {i}
              </MenuItem>
            ))
          }
        </Menu>

        <a className="navbar-brand" href="#">
          Probox
        </a>

        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                First Item
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Second Item
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Third Item
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                Dropdown{" "}
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  First Item
                </a>
                <a className="dropdown-item" href="#">
                  Second Item
                </a>
                <a className="dropdown-item" href="#">
                  Third Item
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <NavbarTime className="navbar-clean"/>
    </nav>
  );
}
