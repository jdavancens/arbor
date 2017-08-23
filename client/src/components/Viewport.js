import React, { Component } from 'react';
import Score from './Score';

class Viewport extends Component {


  render() {

    return (
      <div className="viewport">
        <Score />
      </div>
    );
  }
}

export default Viewport;
