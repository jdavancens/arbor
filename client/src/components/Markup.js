import React, { Component } from 'react';

class Markup extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: props.content,
      position: props.position
    }
  }
  render() {
    const classes = `markup ${this.state.position}`;
    return (
      <div className={classes}>
          {this.state.content}
      </div>
    );
  }
}

export default Markup;
