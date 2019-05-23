import React, { Component } from 'react';
import './homestyle.css';

class EnterShare extends React.Component {

  homeUrl = 'http://oorga.co/fancywish?name=';

  constructor(props) {
    super(props);
    this.state = {
      domain: '',
      url: this.homeUrl,
    };
  }

  handleChange(event, key) {
    let url = this.props.domain + encodeURI(event.target.value);
    this.setState({ [key]: url });
  }



  render() {
    return <div>
      <input class="input" type="text" placeholder="Enter your name" onChange={event => this.handleChange(event, 'url')}></input>
      <br />
      <input class="share" type="text" placeholder="Enter your name" value={this.state.url} ></input>
      <button>SHARE</button>
    </div>;
  }
}

export default EnterShare;