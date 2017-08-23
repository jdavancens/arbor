import React, { Component } from 'react';
import Staff from './Staff';

class StaffGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
      label: props.label
    }
  }
  render() {
    return (
      <div className="staff-group">
        <div className="label">{this.state.label}</div>
        <Staff />
      </div>
    );
  }
}

export default StaffGroup;
