import React, {Component} from "react";
import {Typography} from "@material-ui/core";

class NavbarTime extends Component {
  constructor(props) {
    super(props);
    this.state = {data: {}};
  }

  componentDidMount() {
    fetch(`/api/time`)
      .then(res => res.json())
      .then(json => this.setState({data: json}));
  }

  render() {
    return (
      <>
        <Typography edge="end" variant="h6" className={this.props.className}>
          {this.state.data.day}
        </Typography>
      </>
    );
  }
}

export default NavbarTime;