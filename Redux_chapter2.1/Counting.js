import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment ,Decrement,Reset,CustomIncreaser } from './Slicer1'

function Counting ()  {

     
     const count = useSelector((state)=>state.slice1.count)
     const dispatch = useDispatch()


    return (

    
    <>
      <h1>Counting is: {count}</h1>
      <button onClick={()=>dispatch(Increment())}>Increment</button>
      <button onClick={()=>dispatch(Decrement())}>Decrement</button>
      <button onClick={()=>dispatch(Reset())}>Reset</button>
    </>
  )
}

export default Counting






