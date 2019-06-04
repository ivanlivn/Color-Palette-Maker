import React, { Component } from "react";
import Slider from "rc-slider";
import ColorBox from "./ColorBox";
import "../styles/Palette.css";
import "rc-slider/assets/index.css";

class Palette extends Component {
  state = {
    level: 400
  };
  changeLevel = level => {
    this.setState({ level });
  };
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
