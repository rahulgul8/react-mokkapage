import React, { Component } from 'react';

import Option from './Option';

class Question extends React.Component {

  render() {
    const elements = [{ url: 'https://picsum.photos/200', text: 'text1' }, { url: 'https://picsum.photos/200', text: 'text2' }, { url: 'https://picsum.photos/200', text: 'text3' }, { url: 'https://picsum.photos/200', text: 'text3' }];

    const items = []

    for (let value of this.props.options) {
      items.push(<Option url={value.url} text={value.text}></Option>)
    }

    return (
      <div>
        <div>{this.props.question}</div>
        <div className="optionsDiv">
          {items}
        </div>
      </div>
    )
  }

}

export default Question;