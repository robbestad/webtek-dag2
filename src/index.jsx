import React from "react";
import ReactDOM from "react-dom";
import "src/style/reset.css";
import "src/style/layout.css";
import "src/style/style.css";
import App from "src/app";

const target = document.querySelector("#app");

ReactDOM.render(<App/>, target);
