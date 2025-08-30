import React , { useState } from "react"
import FoodCart from "./FoodCart.js"


// dummy data

const foodItems = [
    {id:1,food:"pizza",Price:"200"},
    {id:2,food:"pasta",Price:"250"},
    {id:3,food:"paneer",Price:"240"},
    {id:4,food:"kabab",Price:"290"},
    {id:5,food:"chicken",Price:"260"},
    {id:6,food:"poha",Price:"20"},
    {id:7,food:"rice",Price:"50"},
    {id:8,food:"dal",Price:"80"},
    {id:9,food:"burger",Price:"99"},
    {id:10,food:"hotdog",Price:"79"},
]


export default function Card(){

    return(
        <div style={{display:"flex" , justifyContent:"center" , flexWrap:"wrap", gap:"20px"}}>
          
            {foodItems.map((value)=>{
                return(
                   
                   <div key={value.id}>
                       
                       <FoodCart value={value}></FoodCart>
                   
                    </div>
                )
            })}
       
        </div>
    )
}