// Home.js

import React from "react";
import "./Home.css"; // Import the CSS file

export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <h2>Welcome to my recipe app!</h2>
        <p>
          Generate a random recipe for cooking inspiration! It comes with a link
          to the original article, a list of ingredients, and a step-by-step
          guide on how to prepare the food! You can also translate the content
          using the translate dropdown at the bottom of the page.
        </p>
      </div>
      <div className="image-container">
        <img src="./Assets/spatula.png" alt="Spatula" className="image" />
      </div>
    </div>
  );
}
