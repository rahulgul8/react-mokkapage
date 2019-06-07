import React, { Component } from 'react';

import Option from './Option';

class Question extends React.Component {

  render() {
    const items = []

    for (let value of this.props.options) {
      items.push(<Option url={value.url} text={value.text}></Option>)
    }

    return (
      <div className="question">
        <div>{this.props.question}</div>
        <div className="optionsDiv">
          {items}
        </div>
      </div>
    )
  }

}

export default Question;