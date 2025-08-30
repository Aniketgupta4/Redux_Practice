// slice banao then store banake (global file) -> slice ko count pe daldo
// store mai slice ko and reducer ko match karana hota hai bs -> baki wo sab handle kar leta hai
// store ka access sabke pass hoga and neat and clean code hai pura
// first detemine konsi slice ka part hai -> then slice pe jao and function implent karo
// store banao and last mai configure karlo -> slice name : reducer fucntion

import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer1"


const stores = configureStore({
    reducer:{
       slice1 : slice1Reducer,    // slice name : reducer fucntion -> match karao -> neat and clean hai ab ye 
                                 // ********** yaha ake dekh shate hai unique name of slice -> jo slice name ni hai yaha us name se bana lo slice
    }
})

export default stores








