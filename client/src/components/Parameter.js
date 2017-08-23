import React, { Component } from 'react';
import TimeSpan from './TimeSpan';

class Parameter extends Component {
  render() {
    return (
      <div className="parameter">
          <TimeSpan duration={0.25} />
      </div>
    );
  }
}

export default Parameter;
