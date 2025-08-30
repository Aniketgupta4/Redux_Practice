// add functionalty ki search box pe jo integer likhe utne se count inc ho

import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { CustomIncreaser } from "./Slicer1.js";

export default function CustomCounter(){

     // q1) **** why create state here not create as slice or global
     // sol -> agar state globally use karna hai so banao slice and global but ye locally use hona hai only here so always local banao agar sirf 1 jagay use karna hai toh
    const [number,setNumber] = useState("")

    const dispatch = useDispatch() // button click pe dispatch karana hoga to store -> slice pe changes ho by functions


    function handleClick(){
         // {type:"slicer1/inc" , payload->argument and ye number as argument pass hota hai}
        dispatch(CustomIncreaser(Number(number)))   // we have to make a new function in slicer that increase value a/c to input
        // **** string bhejta hai so as a Number send karo
    }


    return(
        <>
          <h1>Input pe number likho submit karo count inc karo</h1>
          <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
          <button onClick={handleClick}>Submit</button>
        </>
    )
}