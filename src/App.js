import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Oscar",
      animal: "Dog",
      breed: "Maltese"
    }),
    React.createElement(Pet, {
      name: "Bellamie",
      animal: "Dog",
      breed: "Yorkie"
    }),
    React.createElement(Pet, {
      name: "Lucky",
      animal: "Dog",
      breed: "Shepard"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
