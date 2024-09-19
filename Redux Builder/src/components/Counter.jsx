import React from 'react'
import { useSelector } from 'react-redux'

import CounterButtons from './CounterButtons'
import CounterValue from './Countervalue'

const Counter = () => {
  const {theme}=useSelector((store)=>store.themeReducer)
  return (
    <div>
      
      <div style={{border:"2px solid black",height:"200px",width:"300px",backgroundColor:theme=="light" ?"white":"black",color:theme=="light" ?"black":"white",padding:"100px 150px",marginLeft:"30%",marginTop:"10%"}}>
      <h1 style={{textAlign:"center"}}>Counter :</h1>
      <CounterValue />
      <CounterButtons />
    </div>
    </div>
  )
}

export default Counter
