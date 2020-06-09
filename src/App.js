import React, { Component } from "react";
import "./style/master.scss";
import { uiData } from "./data/ui";

export default class App extends Component {
   constructor() {}

   render() {
      return (
         <div className="App">
            <h1 className="text-info">Hello World</h1>
         </div>
      );
   }
}
