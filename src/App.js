import React from "react";
import Header from "./ClassComponents/Header";
import data from "./data";
import "./App.css";


console.log(data)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      data: []
    };
  }

  changeSize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.changeSize.bind(this));
    let rows = 0;
    data.forEach(cateogry => {
      if (cateogry.questions.length > rows) {
         return rows = cateogry.questions.length;
      }
    });
    this.setState({ data: data, rows: rows, cols: data.length });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.changeSize);
  }

  render() {
    let headerHeight = this.state.windowWidth > 640 ? 60: 32 , 
        cardWidth = this.state.windowWidth / this.state.cols, 
        cardHeight = (this.state.windowHeight - headerHeight)/this.state.rows,
        cards= []; 
        
        this.state.data.forEach((category,categoryIndex) =>{
           let left = categoryIndex * cardWidth ; 
           category.questions.forEach((question ,questionIndex) =>{
           let top = questionIndex* cardHeight + headerHeight , 
               key = `${categoryIndex}-${questionIndex}`;

               cards.push(<card left={left} top={top} height={cardHeight} width={cardWidth} question={question} key={key}/>);
           });
        });

    return (
      <div>
          <Header data={this.state.data} headerWidth={cardWidth}/>
          {cards}
      </div>
    );
  }
}

export default App;
