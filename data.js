var data = [
  {
    category: "React Beginner",
    questions: [
      {
        points: 100,
        question:
          "<p>What part of your application does React focus on?</p><ol><li>The Model</li><li>The View</li><li>The Controller</li><li>All of the above</li></ol>",
        answer: "B. The View"
      },
      {
        points: 100,
        question:
          "<p>_____ lets you create JavaScript objects using HTML syntax</p><ol><li>JSX</li><li>DOM</li><li>ajax</li><li>ECMA7</li></ol>",
        answer: "JSX"
      },
      {
        points: 100,
        question:
          "<p>What tool can you use to transpile JSX?</p><ol><li>npm</li><li>Eslint</li><li>Babel</li><li>Webpack</li></ol>",
        answer: "Babel"
      },
      {
        points: 100,
        question:
          "<p>React uses a _____________ to limit direct manipulation of the DOM and improve performance</p><ol><li>Virtual DOM</li><li>Real DOM</li><li>JSON file</li><li>SASS</li></ol>",
        answer: "Virtual DOM"
      }
    ]
  },
  {
    category: "React Medium",
    questions: [
      {
        points: 200,
        question:
          "<p>Where can you define a component's initial state when you use the ES6 Class syntax?</p><ol><li>getInitialState()</li><li>getInitialProps()</li><li>The component's constructor</li></ol>",
        answer: "C. The component's constructor"
      },
      {
        points: 200,
        question:
          "Using npm, which package should you require/import in addition to 'react' to render a React component in an existing DOM element of your HTML file?<ol><li>Redux</li><li>react-dom</li><li>Material UI</li></ol>",
        answer: "react-dom"
      },
      {
        points: 200,
        question:
          "<p>Which lifecycle function should you use to set default property values?</p><ol><li>getInitialState</li><li>getInitialProps</li><li>getDefaultProps</li></ol>",
        answer: "C. getDefaultProps"
      },
      {
        points: 200,
        question:
          "Which lifecycle method is invoked once, immediately after the initial rendering occurs?<ol><li>componentDidUpdate</li><li>componentDidMount</li><li>ComponentWillUnmount</li></ol>",
        answer: "componentDidMount"
      }
    ]
  },
  {
    category: "React Advanced",
    questions: [
      {
        points: 300,
        question:
          "<p>How can you access the state of a component from inside of a member function?</p><ol><li> this.getState()</li><li>this.prototype.stateValue </li><li>this.values</li></ol>",
        answer: "this.values"
      },
      {
        points: 300,
        question: "<p>Props are __ into other components</p><ol><li>Injected</li><li>Methods</li><li>Both A and B</li></ol>",
        answer:
          "Methods"
      },
      {
        points: 300,
        question:
          "<p>Which of the following API is a MUST for every ReactJS component?</p><ol><li>getInitialState</li><li>render</li><li>renderComponent</li></ol>",
        answer: " renderComponent"
      },
      {
        points: 300,
        question:
          "<p>At the highest level, React components have lifecycle events that fall into</p><ol><li>Initialization</li><li>State/Property Updates</li><li>Destruction</li><li>All of these</li></ol>",
        answer:
          "All of these"
      }
    ]
  },
  {
    category: "Feeling Lucky",
    questions: [
      {
        points: 400,
        question:
          "Using the proposed ECMAScript module syntax, how do you load the Mortgage.js module from the current directory and make all its members available in an object named mortgage?",
        answer: "<code>import * as mortgage from './Mortgage';</code>"
      },
      {
        points: 400,
        question: "What are the colors of the olympic rings?",
        answer: "<img src='assets/img/olympic_rings.png'/>"
      },
      {
        points: 400,
        question: "What's the date of the first React commit on GitHub?",
        answer: "May 26th, 2013"
      },
      {
        points: 400,
        question: "What's the hex color of the React logo?",
        answer: "#61DAFB"
      }
    ]
  }
];