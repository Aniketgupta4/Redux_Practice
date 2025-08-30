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
        // state is a callback function current value lega and update karega
    }
})

// use karne ke liye inc dec reset export karana hoga inko -> use in countings.js
export const {Increment , Decrement , Reset} = reactslicer.actions;

// export {reactslicer} // work flow samjhne ke liye only
// ****** iske ander actions hota hai -> actions ke ander -> inc dec reset hot ahai so reactslier.actions kare -> store ko pta hona chaiye kis store ka part hai and kya function chalana hai pta chalgea by actions -> actions automatically bta deta hai konsi slice ka part hai apne se convert kar deta hai

export default reactslicer.reducer;




// old redux:  **** objects as a refercne change hota hai -> [...arr] -> spread karke new object banao - pehle redux mai spread karke work hota tha -> Increment : (state) => {return {...state , count:state.count+1}} -> new object milega and so on -> time taking bekar method -> b/c jo return kare wo change hoga -> old one replace with new one and changes reflects hongai 

// q1) **** state.count = state.count+1 -> how it works ye work ni karna chaoye beacuse object ke change only propagate when new object banega or yaha toh initialcount=0 hai so  
// solution -> Immer -> redux ke ander super power di hai bahar normal work hoga -> but internal new object banega and changes honge as a refercne pass hoke
// immer 1 draft(duplicate) create karega and pass karega {count:0} is type ka and change karo in this and original alag se hai -> duplicate(draft) pe change karo -> compare karega with new and return new object and make changes in original one internally 
// **** immer bolta hai new object pura return karo warna immer ka draft use karo so dont write ****return**** ->  Increment: (state)=>{return state.count = state.count+1}  or  Increment: (state)=>{state.count = state.count++} this return number -> use redux ache se ->  Increment: (state)=>{state.count = state.count+1}
