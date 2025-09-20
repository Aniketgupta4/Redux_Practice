
import { createSlice } from "@reduxjs/toolkit";


const reactslicer = createSlice({
    name : "slice1",          
    initialState: {count:0},
    reducers: {              
        Increment: (state)=>{state.count = state.count+1},
        Decrement: (state)=>{state.count = state.count-1},
        Reset: (state)=>{state.count = 0},
        
        
        // **** we have to make a new function in slicer that increase value a/c to input
        // {type:"slicer1/inc" , payload->argument hai jo apan pass karengai as actions -> ki value inc ho a/c to input}
         CustomIncreaser: (state,action)=>{state.count += action.payload}
    }
})



export const {Increment , Decrement , Reset , CustomIncreaser} = reactslicer.actions;

export default reactslicer.reducer;




