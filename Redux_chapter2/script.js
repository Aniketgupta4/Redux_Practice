// slice banao then store banake -> slice ko count pe daldo

import React from "react";
import ReactDOM from "react-dom/client"
import Counting from "./Counting";
import { Provider } from "react-redux";
import stores from "./Stores";

// only for workflow samjhne ke liye
// import { reactslicer } from "./Slicer1";

function App(){

    return(
        // **** provider sabko provide store(globle file) ka access -> slicers hai usme jisko jo chaiye wo mil jayega
         

        // ek error aara tha store pe solve by .babelrc file banane se -> is iye aara tha error js and jsx file ki wajah se
           <Provider store={stores}> 
             <Counting />
           </Provider>
          
        
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)