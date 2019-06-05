import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
import starterPalettes from "../starterPalettes";
import { generatePalette } from "../colorHelpers";

class App extends Component {
  // Returns the entire palette object matching passed id
  findPalette = id => {
    return starterPalettes.find(function(palette) {
      return palette.id === id;
    });
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={starterPalettes} {...routeProps} />
          )}
        />
        {/* Grab url param and route to specific palette */}
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        {/* Route for single color palette */}
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
