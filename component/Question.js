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
    this.onRadioChange = this.onRadioChange.bind(this);
    if (this.props.answer) {
      this.state.selectedRadio = this.props.answer;
    }
  }

  onRadioChange(event) {
    this.setState({ selectedRadio: event.target.value });
  }

  handleFormChange(event) {
    console.log('Form change. Value: ', event.target.value);
  }


  render() {

    const items = [];
    return (
      <form onChange={this.handleFormChange}>
        <div className="question">
          <div>{this.props.question}</div>
          <Options
            value={this.state.selectedRadio}
            onChange={this.onRadioChange}
            options={this.props.options}
          />
        </div>
      </form>
    )
  }

}

export default Question;