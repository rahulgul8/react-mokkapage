import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Square from './component/test';
import './style.css';
import EnterShare from './component/EnterShare'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <EnterShare domain="http://oorga.co/fancywish?name="></EnterShare>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
