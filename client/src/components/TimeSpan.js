import React, { Component } from 'react';
import Curve from './Curve';
import Markup from './Markup';

class TimeSpan extends Component {
  constructor(props){
    super(props);
    this.state = {
      duration: props.duration
    }
  }
  render() {
    const style = {
      flexBasis: this.state.duration * 100 + "%"
    }
    return (
      <div className="time-span" style={style}>
        <Curve />
        <Markup content="foo" position="above"/>
      </div>
    );
  }
}

export default TimeSpan;
