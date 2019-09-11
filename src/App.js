import React from "react";
import ReactDOM from "react-dom";
import Card from "./ClassComponents/Card";
import Headers from "./ClassComponents/Header";
import request from "./FunctionalComponents/request";
import audio from "./FunctionalComponents/audio";
import data from "../data";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHight: window.innerHeight,
      data: []
    };
  }

  changeSize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHight: window.innerHeight
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.changeSize.bind(this));
    let rows = 0;
    data.forEach(cateogry => {
      if (cateogry.questions.length > rows) {
        rows = cateogry.questions.length;
      }
    });
    this.setState({ data: data, rows: rows, cols: data.length });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.changeSize);
  }

  render() {
    return <div></div>;
  }
}

export default App;
