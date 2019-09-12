import React from "react";
import * as audio from "../FunctionalComponents/audio";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { interface: "scores", done: false, switching: false };
  }

  setAudio(e) {
    if (this.state.interface === "scores") {
      audio.play("flip");
      setTimeout(() => {
        if (this.state.interface === "question") {
          audio.play("countdown");
        }
      }, 1600);
      this.setState({ interface: "question", switching: true });
    } else if (this.state.interface === "question") {
      audio.stop("countdown");
      this.setState({ interface: "answer" });
    } else {
      audio.play("flipBack");
      this.setState({ interface: "scores", done: true, switching: true });
    }
  }
  getLabelBack() {
    return {
      __html:
        this.state.interface === "question"
          ? this.props.question.question
          : this.props.question.answer
    };
  }

  transitonEnd(event) {
    if (event.propertyName === "width") {
      this.setState({ switching: false });
    }
  }

  render() {
    let style = {
        width: this.props.width + "px",
        height: this.props.height + "px",
        transform:
          "translate3d(" + this.props.left + "px," + this.props.top + "px,0)",
        WebkitTransform:
          "translate3d(" + this.props.left + "px," + this.props.top + "px,0)"
      },
      front = this.state.done ? (
        <img
          alt='react img'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb-fKJMA2hvqzBq2zzo8uyuEMt8AjEMmF5bOIGCc8fpU5JgK-f'
        />
      ) : (
        <span className='scores'>{this.props.question.scores}</span>
      ),
      className = "flipper";

    if (this.state.interface !== "scores") {
      className = className + " flipped";
    }
    if (this.state.switching) {
      className = className + " switching";
    }
    return (
      <div
        style={style}
        className={className}
        onClick={this.setAudio.bind(this)}
        onTransitionEnd={this.transitonEnd.bind(this)}
      >
        <div className='card'>
          <div className='front'>{front}</div>
          <div className='back'>
            <span dangerouslySetInnerHTML={this.getLabelBack()} />

            <img
              alt='react img'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb-fKJMA2hvqzBq2zzo8uyuEMt8AjEMmF5bOIGCc8fpU5JgK-f'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
