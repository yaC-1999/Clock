import React from "react";
import ReactDOM from "react-dom";
import Clock from './Clock';

class ClockLive extends React.Component {
  state = { time: new Date().toLocaleTimeString() };
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  render() {
    return (
      <Clock time={this.state.time} />

    );
  }
}

ReactDOM.render(<ClockLive />, document.querySelector("#root"));