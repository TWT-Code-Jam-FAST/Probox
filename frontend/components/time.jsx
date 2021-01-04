import React, {Component} from "react";

class Time extends Component {
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
      <div>
        <h3>{this.state.data.time}</h3>
      </div>
    );
  }
}

export default Time;