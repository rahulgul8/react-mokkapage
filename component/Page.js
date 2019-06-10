import React, { Component } from 'react';
import Question from './Question';
import './pagestyle.css';
export default class Page extends React.Component {

  componentDidMount() {
    fetch('https://5cfdeb3aca949b00148d3992.mockapi.io/mokka/quiz/questions')
      .then(res => res.json())
      .then((data) => {
        this.setState({ questions: data })
      })
      .catch(console.log)
  }

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
      questions: []
    };
  }

  count = 10;

  render() {
    let label = [];

    for (let i = 1; i <= this.count; i++) {
      label.push(<label className={i === this.state.currentQuestion ? 'highNumberLabel' : 'numberLabel'} key={i} >{i}</label>);
    }
    let questions = this.getQuestion();
    let q;
    if (questions && questions.question) {
      console.log('yes');
      console.log(questions.options);
      q = <Question question={questions.question} options={questions.options} handleChange={(event) => this.handleChange(event)}></Question>;
    }
    console.log(questions);
    return (
      <div className="div">
        {label}
        <br />
        <button type="button" className="btn btn-primary" onClick={() => { this.incrementQuestion() }}>Skip this question </button>
        {q}
      </div>);
  }

  getQuestion() {
    return this.state.questions[this.state.currentQuestion - 1];
  }

  handleChange(event) {
    console.log('inside page' + event)
    this.incrementQuestion();
  }

  incrementQuestion() {
    if (this.count > this.state.currentQuestion)
      this.setState({ currentQuestion: ++this.state.currentQuestion });
    else {
      this.setState({ currentQuestion: 1 });
    }
  }
}

