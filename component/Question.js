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
    console.log('question console called')
    this.onRadioChange = this.onRadioChange.bind(this);

  }

  onRadioChange(event) {
    if (this.props.handleChange) {
      event.answer = event.target.value;
      this.props.handleChange(event);
    }
  }

  handleFormChange(event) {
    // console.log('Form change. Value: ', event.target.value);
  }


  render() {
    const items = [];
    return (
      <form onChange={(event) => { this.handleFormChange(event) }}>
        <div className="question">
          <div>{this.props.question}</div>
          <Options
            value={this.props.answer}
            onChange={this.onRadioChange}
            options={this.props.options}
          />
        </div>
      </form>
    )
  }

}

export default Question;