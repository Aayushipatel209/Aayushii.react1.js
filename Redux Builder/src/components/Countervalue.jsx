import React from 'react'
import { useSelector } from "react-redux";
const Countervalue = () => {
  const {counter}=useSelector((store)=>store.Counterreducer)
  return (
    <div>
         <h1 style={{textAlign:"center",fontSize:"45px"}}>{counter}</h1>
    </div>
  )
}

export default Countervalue
