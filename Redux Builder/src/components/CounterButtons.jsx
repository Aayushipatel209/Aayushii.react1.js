import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrementfunction, Incrementfunction } from '../redux/action'

const CounterButtons = () => {
  const {counter}=useSelector((store)=>store.counterReducer)
    const dispatch=useDispatch()
  return (
    <div>
      <button style={{padding:"10px 30px"}} onClick={()=>dispatch(Incrementfunction())}>Add</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{padding:"10px 30px"}} onClick={()=>dispatch(Decrementfunction())} disabled={counter==0}>Reducer</button>
    </div>
  )
}

export default CounterButtons
