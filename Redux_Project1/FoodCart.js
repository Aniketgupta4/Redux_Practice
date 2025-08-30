import { useState } from "react";
import { addItems , removeItems } from "./Slice1.js";
import { useDispatch } from "react-redux";

// add : incart = false 
// remove : incart = true

export default function FoodCart({value}) {
  
   const dispatch = useDispatch()

    // for button toggle functionalty add kar diye so ab usme remove aye in button
  const [inCart, setInCart] = useState(false);

  function handleClick() {
    if (inCart) {
       dispatch(removeItems())  // agar button pe remove hai so -> remove kardo item from cart
      setInCart(false);
    } else {
        dispatch(addItems())   // agar button pe add hai so add kardo in cart
      setInCart(true);
    }
  }

  return (
    <div className="item">
      <h1>{value.food}</h1>
      <h2>${value.Price}</h2>
      <button onClick={handleClick}>{inCart ? "Remove" : "Add"}</button>
    </div>
  );
}