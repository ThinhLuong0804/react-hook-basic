import React, { useState } from "react";
import "./styles.scss";
ColorBox.propTypes = {};

function randomColorBox() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomiNDEX = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomiNDEX];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "deeppink";
    return initColor;
  });

  function handleColorBox() {
    const newColor = randomColorBox();
    setColor(newColor);

    localStorage.setItem("box-color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={() => handleColorBox()}
    ></div>
  );
}

export default ColorBox;
