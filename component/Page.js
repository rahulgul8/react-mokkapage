import React, { Component } from 'react';
import Question from './Question';
import './pagestyle.css';
export default class Page extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
    };
  }

  count = 20;

  render() {
    let label = [];

    for (let i = 1; i <= this.count; i++) {
      label.push(<label className={i === this.state.currentQuestion ? 'highNumberLabel' : 'numberLabel'} key={i} >{i}</label>);
    }
    let currentQ = this.getQuestion();
    let questionHTML;
    if (currentQ) {
      console.log('answer for' + this.state.currentQuestion + currentQ.answer);
      questionHTML = <Question answer={currentQ.answer} question={currentQ.question} options={currentQ.options} handleChange={(event) => this.handleChange(event)}></Question>;
    }
    return (
      <div className="div">
        {label}
        <br />
        <button type="button" className="btn btn-primary" onClick={() => { this.incrementQuestion() }}>Skip this question </button>
        {questionHTML}
      </div>);
  }

  getQuestion() {
    return this.props.questions[this.state.currentQuestion - 1];
  }

  handleChange(event) {
    console.log('inside page' + event.answer)
    this.updateSelectedQuestion(event);
    this.incrementQuestion();
  }

  updateSelectedQuestion(event) {
    let currentQ = this.getQuestion();
    currentQ.answer = event.answer;
    this.props.selectedQuestions.push(currentQ);
  }

  incrementQuestion() {
    if (this.count > this.state.currentQuestion)
      this.setState({ currentQuestion: ++this.state.currentQuestion });
    else {
      this.setState({ currentQuestion: 1 });
    }
  }
}

