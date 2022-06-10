import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

var element = (
  <div>
    <button class="btn btn-primary">Hello World, You good</button>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

console.log(element);
