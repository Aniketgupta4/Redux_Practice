import { configureStore } from "@reduxjs/toolkit";
import slice1 from "./slicer1";

export const store = configureStore({
  reducer: {
    slice1: slice1
  }
});


// *********** jaruri ni hai ki slice mention ho
// dispatch({type:'coin/fetch/pending',payload:undefined}) 
// jab dispatch hota hai -> so slicer ka naam ni hai kiske pass jana hai -> so agae bohot sari slicer hai so sabse pass bhej deta hai -> jisko chaiye hoga wo use kar lega