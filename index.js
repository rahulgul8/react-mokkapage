import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Square from './component/test';
import './style.css';
import EnterShare from './component/EnterShare'
import Question from './component/Question'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


  render() {
    const elements = [{ url: 'https://picsum.photos/200', text: 'text1' }, { url: 'https://picsum.photos/200', text: 'text2' }, { url: 'https://picsum.photos/200', text: 'text3' }, { url: 'https://picsum.photos/200', text: 'text4' }];
    return (
      <div>
        <EnterShare domain="http://oorga.co/fancywish?name="></EnterShare>
        <Question question="Which of this text looks good to you?" options={elements}></Question>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
