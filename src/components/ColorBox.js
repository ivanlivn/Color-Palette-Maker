import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/ColorBoxStyles";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
    const {
      name,
      background,
      paletteId,
      id,
      showingFullPalette,
      classes
    } = this.props;
    const { isCopied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            // Only show overlay when copied is true
            className={`${classes.copyOverlay} ${isCopied &&
              classes.showOverlay}`}
          />
          <div
            className={`${classes.copyMessage} ${isCopied &&
              classes.showMessage}`}
          >
            <h1>Copied!</h1>
            <p className={classes.copyText}>{this.props.background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {/* Only show the "MORE" button on regular palette component */}
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={event => event.stopPropagation()}
            >
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
