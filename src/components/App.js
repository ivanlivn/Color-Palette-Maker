import React from "react";
import Palette from "./Palette";
import starterPalettes from "../starterPalettes";

function App() {
  return (
    <div>
      <Palette {...starterPalettes[4]} />
    </div>
  );
}

export default App;
