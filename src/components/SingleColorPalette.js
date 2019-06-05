import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    // Gather the shades of the single color once per instance
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
  }
  // Return all shades of a given color
  gatherShades = (palette, desiredColor) => {
    let shades = [];
    let allColors = palette.colors;
    // Key is the luminosity level (e.g. [100], [200],...)
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === desiredColor)
      );
    }
    // Don't need first color - #fff, because that was only used to generate the scale
    return shades.slice(1);
  };
  changeFormat = value => {
    this.setState({ format: value });
  };
  render() {
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color[format]}
        showMoreLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
