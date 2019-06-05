import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "../styles/Palette.css";

class Palette extends Component {
  state = {
    level: 400,
    format: "hex"
  };
  changeLevel = level => {
    this.setState({ level });
  };
  changeFormat = value => {
    this.setState({ format: value });
  };
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        showMoreLink={true}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
