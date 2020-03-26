import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Things to do in Life</h1>
        <h2>(a.k.a. Bucket List)</h2>
        <Todo />
      </div>
    );
  }
}

export default App;
