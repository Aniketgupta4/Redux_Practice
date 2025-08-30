// project -> example swiggy -> multiple elements ko add karte hai in cart -> so waise hi each item share one count variable (global) add to cart and increase their value -> and globally reflect value of count in any place in project


//           App
           //   //                                      /////////STORE///////
          //     //                                     //  count = 0      //
         //       //                                   //  add item(){}   //
//      copy     header (cart value show)             //  rmx item(){}   //
      // // //                                        /////////////////////
     //  //  // 
// elem1  e2  e3 .......


// elem access count and inc value and show value in header
// make count in redux store
// reducers have inc and dec function


import React from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import Header from "./Header.js";
import Card from "./Card.js";
import stores from "./Store.js";

function App(){

      return(
            
                 <Provider store={stores}>
                    <Header></Header>
                    <Card></Card>
                  </Provider>
           
      )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)