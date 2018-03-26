import React, { Component } from 'react';

class Clue extends Component {
  constructor() {
    super();
  
    this.state = { reveal: false }
  }

  render () {
    const { answer, question, value } = this.props.clue;

    return (
      <div onClick={()=> this.setState({ reveal: true })}>
        <h4>{ value || 'unkown' }</h4>
        <hr />
        <h5> { question }</h5>
        <hr />
        <h5 className={ this.state.reveal ? 'text-revealed' :  'text-hidden'}>
        { answer }
        </h5>
      </div>
    )
  }
}

export default Clue;