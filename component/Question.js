import React, { Component } from 'react';

import Options from './Options';

const RadioGroup = ({ onChange, value, options }) => (
  <div>
    {options.map(option => (
      <Options {...option} checked={option.value === value} onChange={onChange} />
    ))}
  </div>
);

class Question extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRadio: null,
    };
    console.log('question console called');
  }

  handleChange = (event) => {
    if (this.props.type == "user") {
      this.handleUserChange(event);
    }
    if (this.props.type == "creator") {
      this.handleCreatorChange(event);
    }
  }

  highLightCorrectAnswer() {

  }

  handleUserChange(event) {

  }

  handleCreatorChange(event) {
    event.answer = event.target.value;
    this.props.handleChange(event);
  }


  render() {
    const items = [];
    return (
      <form>
        <div>
          <div>{this.props.question}</div>
          <Options
            value={this.props.answer}
            onChange={this.handleChange}
            options={this.props.options}
          />
        </div>
      </form>
    )
  }

}

export default Question;