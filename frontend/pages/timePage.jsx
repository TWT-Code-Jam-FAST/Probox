import React, {Component} from "react";
import styles from "../styles/Home.module.css";

class displayTime extends Component {
  constructor(props) {
    super(props);
    this.state = {data: {}};
  }

  render() {
    if (typeof window !== "undefined") {
      fetch(window.location.origin + `/api/time`)
        .then(res => res.json())
        .then(json => this.setState({data: json}));
    }

    return (
      <div className={styles.main}>
        <h2>Timezone: {new Intl.DateTimeFormat().resolvedOptions().timeZone}</h2>
        <h2>Timezone api: {this.state.data.timezone}</h2>
        <h2>Date: {this.state.data.date}</h2>
      </div>
    );
  }
}

export default displayTime;
