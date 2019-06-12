import React, { Component } from 'react';
import Page from './Page'

export default class CreatorPage extends Component {



  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      selectedQuestions: []
    };
  }

  render() {
    return (
      <div>{this.props.name}
        <Page questions={this.props.questions} selectedQuestions={this.state.selectedQuestions}></Page>
      </div>);
  }
}