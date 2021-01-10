import React, {Component} from "react";
import {Typography} from "@material-ui/core";


class NavbarTime extends Component {
  constructor(props) {
    super(props);
    this.interval = undefined;
    this.state = {time: new Date().toLocaleString()};
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({time: new Date().toLocaleString()}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <Typography edge="end" variant="h6" className={this.props.className}>
          {this.state.time}
        </Typography>
      </>
    );
  }
}

export default NavbarTime;