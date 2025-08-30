import { useSelector } from "react-redux"


export default function Header(){

   const count = useSelector((state)=>state.slice1.count)
    
    return(
      
      <div className="header">
          <h1 className="logo">Swiggy</h1>
          <h2 className="cart">Cart:{count}</h2>
      </div>
    )
}