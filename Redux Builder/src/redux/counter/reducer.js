import React from 'react'
import { DECREMENT, INCREMENT } from '../actiontype';

const intialstate = {
    counter: 0,
  };
  
const reducer = (state=intialstate,action) => {
    switch (action.type) {
        case INCREMENT:
          return { counter: state.counter + action.payload };
    
        case DECREMENT:
          return { counter: state.counter - action.payload };
        
    
        default:
          return state;
      }
  
}

export default reducer
