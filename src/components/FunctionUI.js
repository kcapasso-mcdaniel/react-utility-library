import React from "react";
import utils from "../utils/utils";
import { convertDataType } from "../utils/helpers";

// FunctionUI Component

export default class FunctionUI extends React.Component {
   constructor() {
      super();
      this.state = {
         isResultDisplayed: false,
         isCodeDisplayed: false,
         result: "",
      };
   }

   // method to display the code when clicked on
   // alertnate code - set to the opposite using Bang Symbol (!)
   // this.setState(isCodeDisplayed: !this.state.isCodeDisplayed)
   toggleCodeDisplay() {
      if (this.state.isCodeDisplayed === false) {
         this.setState({ isCodeDisplayed: true });
      } else this.setState({ isCodeDisplayed: false });
   }

   // function for getting the input data
   getUserInput() {
      const props = this.props;
      console.log(props.name);
      const inputValues = [];
      for (let i = 0; i < props.inputs; i++) {
         const element = document.getElementById(`input-${props.name}-${i}`);
         const value = element.value;
         const convertedValue = convertDataType(value);
         inputValues.push(convertedValue);
      }
      console.log(inputValues);
      const result = utils[props.name](...inputValues);
      console.log(result);
      // stringify turns array into a "string"
      this.setState({
         result: JSON.stringify(result),
         isResultDisplayed: true,
      });
   }

   render() {
      const props = this.props;

      const renderInputs = (num) => {
         const inputs = [];
         // for every number we have we are going to go through a loop and as long as less than zero increment
         for (let i = 0; i < num; i++) {
            const id = `input-${props.name}-${i}`;
            inputs.push(
               <input
                  type="text"
                  className="form-control inline-action"
                  key={i}
                  id={id}
               />
            );
         }
         return inputs;
      };

      return (
         <div className="col-12 col-lg-8 offset-lg-2 mb-5">
            {/* on click event assigned to the name */}
            <p className="name" onClick={() => this.toggleCodeDisplay()}>
               <b>{props.name}</b>&nbsp;-&nbsp;{props.desc}
            </p>
            {this.state.isCodeDisplayed && (
               <pre>
                  <code>{String(utils[props.name])}</code>
               </pre>
            )}
            <div className="actions float-right">
               {renderInputs(props.inputs)}
               <button
                  className="btn btn-primary inline-action"
                  // passing an anonymous function
                  onClick={() => this.getUserInput()}
               >
                  Run
               </button>
            </div>
            <div className="clearfix mb-3"></div>
            {this.state.isResultDisplayed && (
               <div className="alert alert-primary">{this.state.result}</div>
            )}
         </div>
      );
   }
}
