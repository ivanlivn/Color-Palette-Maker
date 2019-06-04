import React, { Component } from "react";
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
    const { name, background } = this.props;
    const { isCopied } = this.state;
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
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
