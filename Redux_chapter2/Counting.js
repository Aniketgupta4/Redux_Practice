import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import from slicer1
import { Increment ,Decrement,Reset } from './Slicer1'

function Counting ()  {

      // count ko use karna hai jo slicer1 pe hai by useselector hook
      // (state) -> global object (har ek silce ke elements) lake deta hai so ////./////.//// mai access hogi (global->slice->elem)
     const count = useSelector((state)=>state.slice1.count)
     const dispatch = useDispatch()

     // **** apan ne kuch bhi bheja inc dec reset dispatch se toh -> object jata hai store ke pass -> actions:{type:"slice/inc",payload}
     console.log(Increment()) // store ke pass jegeya -> pata chal jayega store pe konsi slice pe jana hai -> kya function perform karna hai

    return (

      // basically ye inc dec reset dipatch hoke store pe jate hai to execute -> store pe tata chalega konsi slice ka hai
    <>
      <h1>Counting is: {count}</h1>
      <button onClick={()=>dispatch(Increment())}>Increment</button>
      <button onClick={()=>dispatch(Decrement())}>Decrement</button>
      <button onClick={()=>dispatch(Reset())}>Reset</button>
    </>
  )
}

export default Counting






