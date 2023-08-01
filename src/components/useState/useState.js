import { Button, ToggleButton } from "@mui/material";
import { useState } from "react";
import { SketchPicker } from "react-color";

const UseState = (props) => {
  // Counter
  const [count, setCount] = useState(0);
  // Color Change Button
  const [color, setColor] = useState(false);
  const [colorpicker, setcolorPicker] = useState(false);

  function colorpick() {
    setcolorPicker(!colorpicker); // Toggle the color picker visibility
  }

  function Add() {
    setCount(count + 1);
  }

  function Less() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const Blue = () => {
    setColor(!color);
  };

  return (
    <>
      <h1>Example of useState</h1>
      <div className="counter-example container">
        <h6>{props.name}</h6>
        <Button variant="contained" color="success" onClick={Add}>
          Add
        </Button>
        <span>{count}</span>
        <Button variant="contained" color="secondary" onClick={Less}>
          Less
        </Button>
      </div>
      <div className="color-change container">
        <h6>Color Change:</h6>
        <div className={`color-toggle ${color ? "blue" : "red"}`}></div>
        <ToggleButton onClick={Blue}>Color Change</ToggleButton>
        <div className="color-picker">
          {/* Conditionally render the color picker */}
          {colorpicker && (
            <SketchPicker
              color={colorpicker}
              onChange={(updatedColor) => {
                setcolorPicker(updatedColor.hex);
              }}
            />
          )}
          {``}
          <ToggleButton onClick={colorpick}>
            {colorpicker ? "Close Picker" : "Open Picker"}
          </ToggleButton>
        </div>
      </div>
    </>
  );
};

export default UseState;

