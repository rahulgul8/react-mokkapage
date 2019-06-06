import React, { Component } from 'react';
import './homestyle.css';

class EnterShare extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      domain: '',
      url: this.props.domain,
    };
  }

  handleChange(event, key) {
    let encoded = encodeURI(event.target.value);
    let url = this.props.domain + encoded;
    this.setState({ [key]: url });
  }


  render() {
    return <div class="container">
      <input class="input" type="text" placeholder="Enter your name" onChange={event => this.handleChange(event, 'url')}></input>
      <br />
      <div class="share" type="text" placeholder="Enter your name">{this.state.url}</div>
    </div>;
  }
}

export default EnterShare;