import { createSlice } from "@reduxjs/toolkit";

const FoodSlicer = createSlice({
     name:"slice1",
     initialState:{count:0},
     reducers:{
        addItems: (state) => {state.count++},
        removeItems: (state) => {state.count--}
     }
})

export const {addItems,removeItems} = FoodSlicer.actions

export default FoodSlicer.reducer