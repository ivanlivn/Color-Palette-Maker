import React from "react";
import Palette from "./Palette";
import starterPalettes from "../starterPalettes";
import { generatePalette } from "../colorHelpers";

function App() {
  console.log(generatePalette(starterPalettes[0]));
  return (
    <div>
      <Palette {...starterPalettes[4]} />
    </div>
  );
}

export default App;
