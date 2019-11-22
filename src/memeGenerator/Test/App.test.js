import React from "react";
import ReactDOM from "react-dom";
import App from "../Containers/app/App";

test("renders withou crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
