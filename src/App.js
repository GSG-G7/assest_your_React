import React from "react";
import { Header } from "./FunctionalComponents/Header";
import data from "./data";
import Card from "./ClassComponents/Card";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      data: []
    };
  }

  setPageSize(event) {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.setPageSize.bind(this));
    let rows = 0;
    data.forEach(category => {
      if (category.questions.length > rows) {
        rows = category.questions.length;
      }
    });
    this.setState({ data: data, rows: rows, cols: data.length });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setPageSize);
  }

  render() {
    let headerHeight = this.state.windowWidth > 640 ? 60 : 32,
      cardWidth = this.state.windowWidth / this.state.cols,
      cardHeight = (this.state.windowHeight - headerHeight) / this.state.rows,
      cards = [];

    this.state.data.forEach((category, categoryIndex) => {
      let left = categoryIndex * cardWidth;
      category.questions.forEach((question, questionIndex) => {
        cards.push(
          <Card
            left={left}
            top={questionIndex * cardHeight + headerHeight}
            height={cardHeight}
            width={cardWidth}
            question={question}
            key={categoryIndex + "-" + questionIndex}
          />
        );
      });
    });
    return (
      <div>
        <Header data={this.state.data} headerWidth={cardWidth} />
        {cards}
      </div>
    );
  }
}

export default App;
