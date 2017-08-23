import React, { Component } from 'react';
import Parameter from './Parameter';

class Staff extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '#FFFFFF',
      height: 120
    }
  }
  render() {
    const divStyle = {
      backgroundColor: this.state.backgroundColor,
      height: this.state.height
    };

    return (
      <div className="staff" style={divStyle}>
        <Parameter />
      </div>
    );
  }
}

export default Staff;
