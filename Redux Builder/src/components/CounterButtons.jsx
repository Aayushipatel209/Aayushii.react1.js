import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementfunction, incrementfunction } from '../redux/counter/action';

const CounterButtons = () => {
    const dispatch=useDispatch()
    const handleincrement = () => {
       dispatch(incrementfunction())
    };
    const handledecrement = () => {
       dispatch(decrementfunction())
    };
  
    
  return (
    <div>
       <div className="btn" style={{marginLeft:"22%",width:"550px"}}>
       <button onClick={handleincrement} style={{padding:"15px 20px",width:"140px",fontSize:"20px"}}>Add</button>
       <button onClick={handledecrement} style={{padding:"15px 20px",width:"140px",fontSize:"20px"}}>reduce</button>
       </div>
      
    </div>
  )
}

export default CounterButtons
