import React from "react";
import "../css/Recipe.css";

function Recipe({ bg, text, color }) {
  const styleBg = bg + " recipe";
  const styleText = color + " recipe-title";
  return (
    <div className={styleBg}>
      <p className={styleText}>{text}</p>
    </div>
  );
}

export default Recipe;
