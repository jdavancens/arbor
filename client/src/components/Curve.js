import React, { Component } from 'react';

class Curve extends Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: 1,
      valueStart: 0.25,
      valueEnd: 0.75,
      thicknessStart: 0.25,
      thicknessEnd: 1,
      thicknessMax: 0.25,
      colorStart: '#FF0000',
      colorEnd: '#00FF00',
      curvatureX: 1,
      curvatureY: 1,
    }
  }

  interpolate(x1, x2){
    return x1 + (x2 - x1) * 0.5
  }

  createPath() {
    const y1 = this.state.valueStart - this.state.thicknessStart * this.state.thicknessMax * 0.5;
    const x2 = this.state.duration;
    const y2 = this.state.valueEnd - this.state.thicknessEnd * this.state.thicknessMax * 0.5;
    const x3 = this.state.duration;
    const y3 = this.state.valueEnd + this.state.thicknessEnd * this.state.thicknessMax * 0.5;
    const y4 = this.state.valueStart + this.state.thicknessStart * this.state.thicknessMax * 0.5;
    const cx1 = this.state.duration * this.state.curvatureX;
    const cy1 = this.interpolate(y1, y2) - (y2 - y1) * this.state.curvatureY * 0.5;
    const cx2 = cx1;
    const cy2 = this.interpolate(y3, y4) + (y4 - y3) * this.state.curvatureY * 0.5;
    const path = `M 0 ${y1} S ${cx1} ${cy1} ${x2} ${y2} L ${x3} ${y3} S ${cx2} ${cy2} 0 ${y4} Z` ;
    return path;
  }

  createLine() {
    const y1 = this.state.valueStart;
    const x2 = this.state.duration;
    const y2 = this.state.valueEnd;
    return {x1: 0, y1: y1, x2: x2, y2: y2};
  }

  render() {
    if (this.state.duration > 0) {
      const svgStyle = {width:"100%", height:"100%", opacity: "0.5"}
      const lineStyle = {stroke:"#000",strokeWidth:0.01}
      const gradientStart = {stopColor: this.state.colorStart};
      const gradientEnd = {stopColor: this.state.colorEnd};
      const path = this.createPath();
      const line = this.createLine();
      return (
        <svg height="1" width="1" viewBox="0 0 1 1" style={svgStyle} preserveAspectRatio="none">
          <defs>
            <linearGradient id="myFill" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" style={gradientStart} />
              <stop offset="100%" style={gradientEnd} />
            </linearGradient>
          </defs>
          <path d={path} fill="url(#myFill)"></path>
          <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} style={lineStyle}></line>
        </svg>
      );
    }

  }
}

export default Curve;
