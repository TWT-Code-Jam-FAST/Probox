import React, { Component } from "react";

class displayTime extends Component {
  state = { userTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone };
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.userTimeZone}</h1>
        <h1>{new Date().toLocaleString()}</h1>
      </React.Fragment>
    );
  }
}

export default displayTime;
