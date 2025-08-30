// slice banao then store banake (global file) -> slice ko count pe daldo

import { createSlice } from "@reduxjs/toolkit";

// slice create karo

const reactslicer = createSlice({
    name : "slice1",            // give any name to slice
    initialState: {count:0},    // initail value -> object ke ander hai
    reducers: {                // functions -> (state) lega and update karega latest object ko -> (state) latest value lake dega 
        Increment: (state)=>{state.count = state.count+1},
        Decrement: (state)=>{state.count = state.count-1},
        Reset: (state)=>{state.count = 0}
    }
})

// use karne ke liye inc dec reset export karana hoga inko -> use in countings.js
export const {Increment , Decrement , Reset} = reactslicer.actions;


export default reactslicer.reducer;