import React from "react";
import "./style/master.scss";
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy";

export default class App extends React.Component {
   // class based component
   // constructor
   constructor() {
      super();
      console.log(uiData);
      this.state = {
         isFavoritesChecked: false,
         allFuncs: uiData,
         displayFuncs: uiData,
      };
   }

   toggleFavorites(e) {
      // whatever isfavorites is checked we are going to flip it
      this.setState({ isFavoritesChecked: !this.state.isFavoritesChecked });
      // grabbing the user input what is the id of what the user just did
      const isFavoritesChecked = document.getElementById("viewMode-favorites")
         .checked;
      console.log(isFavoritesChecked);
      // copy of all the functions
      const allFuncs = [...this.state.allFuncs];
      // if the user input is viewMode favorites
      if (isFavoritesChecked) {
         // run a filter on this copy and return things where isFavorite
         const filteredFuncs = allFuncs.filter((func) => {
            // return when is true
            return func.isFavorite;
         });
         console.log(filteredFuncs);

         // setting the state - displayed funcs to our filtered funcs
         this.setState({ displayFuncs: filteredFuncs });
      } else {
         this.setState({ displayFuncs: allFuncs });
      }
   }

   render() {
      const getFunctionsNum = () => {
         return uiData.length;
      };

      // anything returned from the render will display as html
      return (
         // wrap in parentheses when multiple html elements
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                  <h1 className="d-flex justify-content-center">
                     JavaScript Utility Library
                  </h1>
                  <p className="text-center lead mb-4">
                     {getFunctionsNum()}&nbsp;functions documented
                  </p>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewMode-all"
                        name="viewMode"
                        className="custom-control-input"
                        // access the state variable
                        checked={!this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.toggleFavorites(e);
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-all"
                     >
                        Show all
                     </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewMode-favorites"
                        name="viewMode"
                        className="custom-control-input"
                        checked={this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.toggleFavorites(e);
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-favorites"
                     >
                        Favorites
                     </label>
                  </div>

                  <div className="row mt-3">
                     <div className="col-6">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Search all functions"
                           aria-label="Search all functions"
                           aria-describedby="search-input"
                           id="search-input"
                        />
                     </div>
                     <div className="col-6">
                        <select className="form-control">
                           <option>Most recent</option>
                           <option>Oldest</option>
                           <option>A - Z</option>
                           <option>Z - A</option>
                        </select>
                     </div>
                  </div>
               </div>
               {this.state.displayFuncs.map((functionUI) => {
                  const { name, desc, inputs } = functionUI;

                  return (
                     // when you render the key it is correct to place it here - inside the component we are rendering
                     <FunctionUI
                        key={name}
                        name={name}
                        desc={desc}
                        inputs={inputs}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
