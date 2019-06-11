import React, { Component } from 'react';
import Page from './Page'

export default class CreatorPage extends Component {

  componentDidMount() {
    fetch('https://5cfdeb3aca949b00148d3992.mockapi.io/mokka/quiz/questions')
      .then(res => res.json())
      .then((data) => {
        this.setState({ questions: data });
        this.loadImages(data);
      })
      .catch(console.log)
  }

  loadImages(questions) {
    questions.map((q) => {
      return q.options.map(o => o.url);
    }).reduce((a, b) => a.concat(b), []).forEach((q) => {
      console.log(q)
      new Image().src = q;
    }
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      selectedQuestions: []
    };
  }

  render() {
    return <Page questions={this.state.questions} selectedQuestions={this.state.selectedQuestions}></Page>;
  }
}