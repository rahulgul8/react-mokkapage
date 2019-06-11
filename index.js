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
      name: '',
      elements: [],
      page: "start"
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

  updateState = (e) => {
    console.log(e)
    let page = e.page;
    switch (page) {
      case 'quiz': break;
      case 'start': this.setState({ page: "quiz", name: e.name }); break;
      case 'end': break;
    }
  };

  getPage() {
    if (this.state.page == 'quiz') {
      return <CreatorPage name={this.state.name} updateState={this.updateState}></CreatorPage>
    }
    if (this.state.page == "start") {
      return <StartPage name={this.state.name} updateState={this.updateState}></StartPage>
    }
    if (this.state.page == "end") {
      return <EnterShare domain="http://oorga.co/fancywish?name=" name={this.state.name} updateState={this.updateState}></EnterShare>;
    }
  }

  render() {
    return this.getPage();
  }
}

render(<App />, document.getElementById('root'));
