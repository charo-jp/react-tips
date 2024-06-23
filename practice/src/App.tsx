import { useState } from "react";
import Card from "./Card";

import IconButton from "./IconButton";

import "./App.css";

function App() {
  return (
    <>
      <IconButton
        icon={HeartIcon}
        onClick={() => {
          console.log("Button Clicked");
        }}
      >
        {null}
      </IconButton>
    </>
  );
}

function HeartIcon() {
  return <span>❤️</span>;
}

export default App;
