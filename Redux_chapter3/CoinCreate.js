import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slicer1";
import CoinCard from "./CoinCard";
import "./style.css"; 

export default function CoinCreate(){
   
  const dispatch = useDispatch()
  const {data,loading,error} = useSelector((state)=>state.slice1) // data lana slice se 


  useEffect(()=>{
     dispatch(FetchData(20))  // **** function hai not action -> and action pe type mention hota hai
  },[])   // ye store ke pass jayega

  // Display info of 20 users

     if(loading){
        return <h1>Data is loading</h1>
     }
     if(error){
        return <h1>Error Occured</h1>
     }

     return(
          <>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                
                    {data.map((value)=>
                       <CoinCard key={value.id} coin={value}></CoinCard>
                    )}
                
            </div>
          </>
     )

}