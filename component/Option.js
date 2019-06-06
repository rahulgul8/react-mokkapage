import React, { Component } from 'react';
import './style.css';

class Option extends React.Component {
  render() {
    return <label className="optionLabel" ><input type="radio" name="test" value="small"></input><img src={this.props.url}></img><br />
      {this.props.text}
    </label>
  }
}

export default Option;