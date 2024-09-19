import React from 'react'
import { useSelector } from 'react-redux'

const CounterValue = () => {

    const {counter}=useSelector((store)=>store.counterReducer)
  return (
    <div>
      <h1 style={{textAlign:"center"}}>{counter}</h1>
    </div>
  )
}

export default CounterValue
