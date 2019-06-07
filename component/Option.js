import React, { Component } from 'react';
import './style.css';

class Option extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      test:'hi'
    };
  }
  render() {
    return (
      <label className="optionLabel" >
        <input type="radio" name={this.props.text} value={this.props.text} onChange={(event) => {
          console.log(event.target.checked)
          this.setState({ isSelected: event.target.checked })
        }} />
        <img src={this.props.url} />
        <br />
        {this.props.text}
        {""+this.state.isSelected}
      </label>)
  }
}

export default Option;