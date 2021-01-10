import React, {Component} from "react";
import {Typography} from "@material-ui/core";

class NavbarTime extends Component {
  constructor(props) {
    super(props);
    this.state = {data: {}};
  }

  render() {
    return (
      <>
        <Typography edge="end" variant="h6" className={this.props.className}>
          {new Date().toLocaleString()}
        </Typography>
      </>
    );
  }
}

export default NavbarTime;