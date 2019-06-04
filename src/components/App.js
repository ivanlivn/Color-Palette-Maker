import React from "react";
import Palette from "./Palette";
import starterPalettes from "../starterPalettes";
import { generatePalette } from "../colorHelpers";

function App() {
  return (
    <div>
      <Palette palette={generatePalette(starterPalettes[4])} />
    </div>
  );
}

export default App;
