import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Square from './component/test';
import './style.css';
import EnterShare from './component/EnterShare';
import Question from './component/Question';
import 'bootstrap/dist/css/bootstrap.css';

import CreatorPage from './component/CreatorPage'
import StartPage from './component/StartPage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      elements: [],
      start: false
    };
  }

  componentDidMount() {
    fetch('https://5cfdeb3aca949b00148d3992.mockapi.io/mokka/quiz/quizdata')
      .then(res => res.json())
      .then((data) => {
        this.setState({ elements: data })
      })
      .catch(console.log)
  }

  //  <EnterShare domain="http://oorga.co/fancywish?name="></EnterShare>

  start = false;

  onClick() {
    this.setState({ start: true });
  }

  getPage() {
    if (this.state.start) {
      return <CreatorPage></CreatorPage>
    }
    return <StartPage onClick={() => this.setState({ start: true })}></StartPage>
  }

  render() {
    return this.getPage();
  }
}

render(<App />, document.getElementById('root'));
