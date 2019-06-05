import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/PaletteStyles";
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
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
