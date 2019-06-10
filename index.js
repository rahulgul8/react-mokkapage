import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Square from './component/test';
import './style.css';
import EnterShare from './component/EnterShare';
import Question from './component/Question';
import 'bootstrap/dist/css/bootstrap.css';

import Page from './component/Page'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      elements: []
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

  render() {
    return (
      <div>
        <Page></Page>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
