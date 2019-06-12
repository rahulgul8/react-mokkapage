import React, { Component } from 'react';
import './startPage.css'

export default class StartPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  updateState = (e) => {
    e.name = this.state.name;
    e.page = 'start';
    this.props.updateState(e);
  }

  render() {
    return (<div className="jumbotron container start">
      <h6><strong>2019 Friendship Dare!!!</strong></h6>
      <br />
      Enter your name and share your quiz with your friends
      <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control text" placeholder="Enter your name" aria-label="Username" aria-describedby="basic-addon1" />
      <button className="btn btn-primary" onClick={this.updateState}>Create quick quiz-></button>
    </div>)
  }

}