import React, {Component} from "react";
import styles from "../styles/Home.module.css";

class displayTime extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.main}>
        <h2>Timezone: {new Intl.DateTimeFormat().resolvedOptions().timeZone}</h2>
        <h2>Date: {new Date().toLocaleString()}</h2>
      </div>
    );
  }
}

export default displayTime;
