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
         allFuncs: orderBy(uiData, "order", "desc"),
         displayedFuncs: orderBy(uiData, "order", "desc"),
         // set to Most Recent
         orderBy: '["order", "desc"]',
      };
   }

   filterFuncs(e) {
      // grabbing the user input what is the id of what the user just did
      const isFavoritesChecked = document.getElementById("viewMode-favorites")
         .checked;
      // variable to check the value of the search input and converting to lowerCase
      const searchInput = document
         .getElementById("search-input")
         .value.toLowerCase();
      // copy of all the functions
      const allFuncs = [...this.state.allFuncs];
      // if is favorites is checked
      if (isFavoritesChecked) {
         this.setState({ isFavoritesChecked: true });
         // run a filter on this copy and return things where isFavorite
         const favoriteFuncs = allFuncs.filter((func) => {
            // return when is true
            return func.isFavorite;
         });
         console.log(favoriteFuncs);
         // true goes to new array created by filter function
         const filteredFuncs = favoriteFuncs.filter((func) => {
            // if function name contains any part of the search input return true else return false
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         });
         const orderArr = JSON.parse(this.state.orderBy);
         console.log("orderArr:", ...orderArr);
         // order the filtered functions
         const orderedFuncs = orderBy(filteredFuncs, ...orderArr);
         // setting the state - displayed funcs to our filtered funcs
         this.setState({ displayedFuncs: orderedFuncs });
      } else {
         // whatever isfavorites is checked we are going to flip it
         this.setState({ isFavoritesChecked: false });
         const filteredFuncs = allFuncs.filter((func) => {
            // if function name contains any part of the search input return true else return false
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         });
         const orderArr = JSON.parse(this.state.orderBy);
         console.log("orderArr:", ...orderArr);
         const orderedFuncs = orderBy(filteredFuncs, ...orderArr);
         this.setState({ displayedFuncs: orderedFuncs });
      }
   }

   changeOrder(e) {
      this.setState({ orderBy: e.target.value }, () => {
         this.filterFuncs();
      });
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
                        // change that calls the function within
                        onChange={(e) => {
                           this.filterFuncs(e);
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
                           this.filterFuncs(e);
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
                           onChange={(e) => {
                              this.filterFuncs(e);
                           }}
                        />
                     </div>
                     <div className="col-6">
                        <select
                           className="form-control"
                           value={this.state.orderBy}
                           onChange={(e) => this.changeOrder(e)}
                        >
                           <option value='["order", "desc"]'>
                              Most recent
                           </option>
                           <option value='["order", "asc"]'>Oldest</option>
                           <option value='["name", "asc"]'>A - Z</option>
                           <option value='["name", "desc"]'>Z - A</option>
                        </select>
                     </div>
                  </div>
               </div>
               {this.state.displayedFuncs.map((functionUI) => {
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
