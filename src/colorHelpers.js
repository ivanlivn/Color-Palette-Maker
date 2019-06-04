import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

// Generate the different shades and color values
function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };

  // Build new EMPTY colors object with different shade levels
  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse();
    for (let i in scale) {
      // Add the color values corresponding to the level in color scale to new palette
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name
          .toLowerCase()
          .replace(/ /g, "-") /* Replace spaces with dash */,
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)") /* Add alpha layer */
      });
    }
  }

  return newPalette;
}

// Creates a 3 color array based on the given color: Dark -> color -> white
function getRange(hexColor) {
  const end = "#fff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
}

// Generates a number of colors of a color scale, e.g. scale from black to white
// For more details: https://vis4.net/chromajs/#color-scales
function generateScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
}

export { generatePalette };
