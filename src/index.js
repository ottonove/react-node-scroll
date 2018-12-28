import React, { Component } from "react";
import ReactDOM from "react-dom";
import throttle from "lodash.throttle";

class App extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  state = {
    scrollTop: 0
  };

  handleScroll = throttle(event => {
    this.setState({
      scrollTop: this.node["current"].scrollTop
    });
    console.log(this.node);
  }, 100);

  render() {
    return (
      <div>
        <div
          style={{
            overflowY: "scroll",
            height: "50px",
            backgroundColor: "#ccc"
          }}
          onScroll={this.handleScroll}
          ref={this.node}
        >
          <p style={{ fontSize: "50px" }}>Hello World</p>
        </div>

        <p>Scroll Top: {this.state.scrollTop}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
