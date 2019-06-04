import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../styles/Navbar.css";

class Navbar extends Component {
  state = {
    format: "hex"
  };
  handleChange = event => {
    this.setState({ format: event.target.value });
    this.props.handleChange(event.target.value);
  };
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <nav className="Navbar">
        <div className="logo">
          <a href="#">colorpalettemaker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="Slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
      </nav>
    );
  }
}

export default Navbar;
