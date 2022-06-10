import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

var element = (
  <div>
    <h1>Hello World, You good</h1>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

console.log(element);
