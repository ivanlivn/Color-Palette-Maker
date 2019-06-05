import React, { Component } from "react";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/ColorBox.css";

class ColorBox extends Component {
  state = {
    isCopied: false
  };
  // Show overlay for 1.5s after color is copied to clipboard
  changeCopyState = () => {
    this.setState({ isCopied: true }, () => {
      setTimeout(() => this.setState({ isCopied: false }), 1500);
    });
  };
  render() {
    const { name, background, paletteId, id, showMoreLink } = this.props;
    const { isCopied } = this.state;
    // Grab luminosity of color to dynamically change color of text for readability
    const isDark = chroma(background).luminance() <= 0.08;
    const isLight = chroma(background).luminance() >= 0.7;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            // Only show overlay when copied is true
            className={`copy-overlay ${isCopied && "show"}`}
          />
          <div className={`copy-msg ${isCopied && "show"}`}>
            <h1>Copied!</h1>
            <p className={isLight && "dark-text"}>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDark && "light-text"}>{name}</span>
            </div>
            <button className={`copy-button ${isLight && "dark-text"}`}>
              Copy
            </button>
          </div>
          {/* Only show the "MORE" button on regular palette component */}
          {showMoreLink && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={event => event.stopPropagation()}
            >
              <span className={`see-more ${isLight && "dark-text"}`}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
