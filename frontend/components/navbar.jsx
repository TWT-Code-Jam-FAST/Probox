import React from "react";
import {AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import Time from "./time";

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  return <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon/>
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        {props.title}
      </Typography>
      <Time/>
    </Toolbar>
  </AppBar>;
}