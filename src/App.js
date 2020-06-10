import React, { Component } from "react";
import "./style/master.scss";
import { uiData } from "./data/ui";

export default class App extends Component {
   // react is giving us pre built classs we are giving it the name app it is extending their component class extending means adding stuff into this component - constructor as paged is being constructed render after data is rendered need to use the data inside of our app
   constructor() {
      super();
      console.log(uiData);
   }

   render() {
      const props = this.props;
      const renderInputs = (num) => {
         const inputs = [];
         // for every number we have we are going to go through a loop and as long as less than zero increment
         for (let i = 0; i < num; i++) {
            // render some JSX
            const id = `input-${props.name}-${i}`;
            inputs.push(
               <input
                  type="text"
                  className="form-control inline-action"
                  key={id}
                  id={id}
               />
            );
         }
         return inputs;
      };

      return (
         <div className="container">
            <div className="row">
               {uiData.map((component) => {
                  return (
                     // <FunctionComponent>
                     <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                        <p className="name">
                           <b>{component.name}</b>&nbsp;-&nbsp;{component.desc}
                        </p>
                        <pre style={{ display: "none" }}>
                           <code></code>
                        </pre>
                        <div className="actions float-right">
                           {renderInputs(component.inputs)}
                           <button className="btn btn-primary inline-action">
                              Run
                           </button>
                        </div>
                        <div className="clearfix mb-3"></div>
                        <div
                           className="alert alert-primary"
                           style={{ display: "none" }}
                        ></div>
                        <div
                           className="alert alert-danger"
                           style={{ display: "none" }}
                        ></div>
                     </div>
                  );
               })}
            </div>
         </div>
      );
   }
}
