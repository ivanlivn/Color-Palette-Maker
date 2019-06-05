import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  DraggableColorBox: {
    height: "25%",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px"
  }
};

function DraggableColorBox(props) {
  return (
    <div
      className={props.classes.DraggableColorBox}
      style={{ backgroundColor: props.color }}
    >
      {props.name}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
