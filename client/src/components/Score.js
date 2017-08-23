import React, { Component } from 'react';
import StaffGroup from './StaffGroup';

class Score extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '#e5e5e5',
      width: 1000
    }
  }

  render() {
    const divStyle = {
      width: this.state.width
    };

    return (
      <div className="score" style={divStyle}>
        <StaffGroup label="cello"/>
      </div>
    );
  }
}

export default Score;
