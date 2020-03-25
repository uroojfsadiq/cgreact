import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import routing from "./routes";

ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
