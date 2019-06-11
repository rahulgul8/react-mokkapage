import React, { Component } from 'react';
import './startPage.css'

export default class StartPage extends Component {

  render() {
    return (<div className="jumbotron container start">
      <h6><strong>2019 Friendship Dare!!!</strong></h6>
      <br />
      Enter your name and share your quiz with your friends
      <input type="text" class="form-control text" placeholder="Enter your name" aria-label="Username" aria-describedby="basic-addon1" />
      <button className="btn btn-primary" onClick={this.props.onClick}>Create quick quiz-></button>
    </div>)
  }

}