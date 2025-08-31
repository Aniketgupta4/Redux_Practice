// createasyncthunk -> globally working
// using cryptocurrency api -> https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20


import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// (type and payload) -> create karna hai

const FetchData = createAsyncThunk(
  // Action: create karo -> type

  "Coin/fetch", // action name -> any and {type:"Coin/fetch" , payload:}

   // payload create karo ki kya vakue ayegi
  async (args, thunkAPI) => {
    try {
       const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`)
       const data = await res.json()
       return data       // {type:"Coin/fetch" , payload:data} -> jo return karengai wo jayega payload pe
    } catch (error) {
       return rejectWithValue(error.message)
    }
  }

);


// steps of working

// all this work thunkAPI karega 
// createasyncthunk -> khud hi 3 no dispatch create karta hai internally 
// khud hi actions bheje ga createasyncthunk pen/ful/rej

// 1) {type:'coin/fetch/pending' , payload:undefined}
// 2) {type:'coin/fetch/fulfilled' , payload:data}
// 3) {type:'coin/fetch/rejected' , payload:error.message}


// create slicer

const slicer1 = createSlice({
     name : "slice1",
     initialState: {data:[],loading:false,error:null},
     reducers:{},  // blank (do sync work) -> beacuse we are doing async operations in api so write in extrareducers
     
     // for async operations -> apis
     extraReducers:(builder)=>{
        builder
        .addCase(FetchData.pending,(state)=>{
         state.loading = true,
         state.error = null
        })
        .addCase(FetchData.fulfilled,(state,action)=>{
         state.data = action.payload,
         state.loading = false
        })
        .addCase(FetchData.rejected,(state,action)=>{
         state.error = action.payload,
         state.loading = false
        })
     }
})

  // fulfill kari ye .addcase wali in 3no ko

// 1) {type:'coin/fetch/pending' , payload:undefined}
// 2) {type:'coin/fetch/fulfilled' , payload:data}
// 3) {type:'coin/fetch/rejected' , payload:error.message}

export default slicer1.reducer
export {FetchData}