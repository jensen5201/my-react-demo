import * as React from "react";
import "./App.css";

class HelloMessage extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
    this.state = { isHot: true };
  }

  getState = () => {
    const { isHot } = this.state;
    this.setState({ isHot: !isHot });
  };

  render() {
    const { isHot } = this.state;
    return (
      <div onClick={this.getState}>the weather is {isHot ? "hot" : "cool"}</div>
    );
  }
}

export default HelloMessage;
