import React, { Component } from 'react';
import './style.css';

export default class Options extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      test: 'hi'
    };
  }
  render() {
    let options = this.props.options;
    let div = options.map(option => (
      <label className="optionLabel" key={option.value}>
        <input type="radio" name="radio-button-group" {...option} onClick={this.props.onChange} checked={option.value === this.props.value} className={} />
        <img src={option.url} />
        <br />
        {option.value}
      </label>
    ));

    return (
      <div>{div}</div>)
  }

  getClassName() {

  }
}

