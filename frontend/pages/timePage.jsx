import React, { Component } from "react";
import styles from "../styles/Home.module.css";

class displayTime extends Component {
  constructor(props) {
    super(props);
    this.state = {data: {}};
  }

  componentDidMount() {
    fetch(window.location.origin + `/api/time`)
      .then(res => res.json())
      .then(json => this.setState({data: json}));
  }

  render() {
    return (
      <div className={styles.main}>
        <h2>Timezone: {this.state.data.timezone}</h2>
        <h2>Date: {this.state.data.date}</h2>
      </div>
    );
  }
}

export default displayTime;