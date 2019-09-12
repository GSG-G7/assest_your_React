let data = [
  {
    category: "React Beginner",
    questions: [
      {
        scores: 100,
        question: "<p>What part of your application does React focus on?</p>",
        choices:['The Model','The View','The Controller'],
        answer: "The View",
      },
      {
        scores: 100,
        question:"<p>_____ lets you create JavaScript objects using HTML syntax</p>",
        choices:['JSX','DOM','ajax','ECMA7'],
        answer: "JSX"
      },
      {
        scores: 100,
        question:"<p>What tool can you use to transpile JSX?</p>",
        choices:['npm','Eslint','Babel','Webpack'],
        answer: "Babel"
      },
      {
        scores: 100,
        question:"<p>React uses a _____________ to limit direct manipulation of the DOM and improve performance</p>",
        choices: ['Virtual DOM','Real DOM','JSON file','SASS'],
        answer: "Virtual DOM"
      }
    ]
  },
  {
    category: "React Medium",
    questions: [
      {
        scores: 200,
        question:"<p>Where can you define a component's initial state when you use the ES6 Class syntax?</p>",
        choices :['getInitialState()','getInitialProps()','The component\'s constructor'],
        answer: "The component's constructor"
      },
      {
        scores: 200,
        question:"<p>Using npm, which package should you require/import in addition to 'react' to render a React component in an existing DOM element of your HTML file?</p>",
        choices:['Redux','react-dom','Material UI'],
        answer: "react-dom"
      },
      {
        scores: 200,
        question:"<p>Which lifecycle function should you use to set default property values?</p>",
        choices:['getInitialState','getInitialProps','getDefaultProps'],
        answer: "getDefaultProps"
      },
      {
        scores: 200,
        question:
          "<p>Which lifecycle method is invoked once, immediately after the initial rendering occurs?</p>",
        choices:['componentDidUpdate','componentDidMount','ComponentWillUnmount'],
        answer: "componentDidMount"
      }
    ]
  },
  {
    category: "React Advanced",
    questions: [
      {
        scores: 300,
        question:"<p>How can you access the state of a component from inside of a member function?</p>",
        choices:['this.getState()','this.prototype.stateValue', 'this.values'],
        answer: "this.values"
      },
      {
        scores: 300,
        question:"<p>Props are __ into other components</p>",
          choices:['Injected','Methods','Both A and B'],
        answer: "Methods"
      },
      {
        scores: 300,
        question:"<p>Which of the following API is a MUST for every ReactJS component?</p>",
        choices:['getInitialState','render','renderComponent'],
        answer: " renderComponent"
      },
      {
        scores: 300,
        question:
          "<p>At the highest level, React components have lifecycle events that fall into</p>",
        choices:['Initialization','State/Property Updates','Destruction','All of these'],  
        answer: "All of these"
      }
    ]
  },
  {
    category: "Feeling Lucky",
    questions: [
      {
        scores: 400,
        question:
          "<p>What does the “webpack” command do?</p>",
        choices:['Transpiles all the Javascript down into one file','Runs react local development server','Both A and B','None of these'],  
        answer: "ranspiles all the Javascript down into one file"
      },
      {
        scores: 400,
        question:"<p>What is a react.js in MVC?</p>",
        choices:['Controller','Middleware','Model','Router'],
        answer: "Controller"
      },
      {
        scores: 400,
        question:
          "<p>What's the date of the first React commit on GitHub?</p>",
        choices:['May 10th,2014' ,'Sep 3rd,2013','May 26th, 2013','Nov 1st,2011'],  
        answer: "May 26th, 2013"
      },
      {
        scores: 400,
        question:
          "<p>What's the hex color of the React logo?</p>",
        choices:['#61DAFB','#572E31','#925883','#E4324e'],  
        answer: "#61DAFB"
      }
    ]
  }
];

export default data;
