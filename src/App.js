import React from "react";
import "./style/master.scss";
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy";

export default class App extends React.Component {
   // dot notation to access the component - reach inside of react and pull out the component
   // creating a class called App constructor executing
   constructor() {
      super();
      console.log(uiData);
   }

   render() {
      const orderedData = orderBy(uiData, "name", "asc");

      const getFunctionsNum = () => {
         return uiData.length;
      };

      // React will look out for this and needs to return JSK
      // creating new variable and use orderBy method pass the collection, sort by what and what order returned
      return (
         // wrap in parentheses when multiple html elements
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <h1 className="d-flex justify-content-center text-danger">
                     JavaScript Functions: Basic
                  </h1>
                  <p className="text-center lead mb-4">
                     {getFunctionsNum()}&nbsp;functions documented
                  </p>
                  {orderedData.map((functionUI) => {
                     return (
                        <FunctionUI
                           name={functionUI.name}
                           desc={functionUI.desc}
                           inputs={functionUI.inputs}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      );
   }
}
