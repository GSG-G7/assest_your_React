import React from 'react';
import * as audio from '../FunctionalComponents/audio';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {interface: 'scores', done: false};
    }

    getCardLabel() {
        return this.state.interface === 'question' ? this.props.question.question : this.props.question.answer ;
    }

    endTransition(e) {
        if (e.propertyName === 'width') {
            this.setState({switching: false});
        }
    }

    audioHandler(e) {
        if (this.state.interface === 'scores') {
            audio.play("flip");
            setTimeout(() => {
                if (this.state.interface === "question") {
                    audio.play("countdown");
                }
            }, 1500);
            this.setState({interface: 'question', switching: true});
        } else if (this.state.interface === 'question') {
            audio.stop("countdown");
            this.setState({interface: 'answer'});
        } else {
            audio.play("flipBack");
            this.setState({interface:'scores', done: true, switching: true});
        }
    }


    render() {
        let style = {
                width: this.props.width + 'px',
                height: this.props.height + 'px',
                transform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)',
                WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)'
            },
            front = this.state.done ? <img alt="reactImage" src='./images/react.svg'/> : <span className='points'>{this.props.question.scores}</span>,
            className = 'flipper';

        if (this.state.interface !== 'scores') {
            className = className + 'flipped';
        }
        if (this.state.switching) {
            className = className + 'flipping';
        }
        return (
            <div style={style} className={className} onClick={this.audioHandler.bind(this)} onTransitionEnd={this.endTransition.bind(this)}>
                <div className='card'>
                    <div className='front'>
                        {front}
                    </div>
                    <div className='back'>
                        <span>{this.getCardLabel()} </span>
                        <img alt="react" src='../../public/images/react.svg'/>
                    </div>
                </div>
            </div>
        );
    }

};

export default Card;