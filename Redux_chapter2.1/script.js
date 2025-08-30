// add functionalty ki search box pe jo integer likhe utne se count inc ho
// in customcounter.js


// by redux -> ye easy hogya manage 2 things counting and customcounter and customcounter change counter 
//              APP
               //  //
              //     // 
//       counting  <-  customcounter


import React from "react";
import ReactDOM from "react-dom/client"
import Counting from "./Counting";
import { Provider } from "react-redux";
import stores from "./Stores";
import CustomCounter from "./CustomCounter";

function App(){

    return(
      
           <Provider store={stores}> 
             <Counting />
             <br></br><br></br>
             <CustomCounter></CustomCounter>
           </Provider>
          
        
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)