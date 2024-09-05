import { DECREMENT, INCREMENT } from "../actiontype";



export function incrementfunction() {
  return { type: INCREMENT, payload: 1 };
}

export function decrementfunction() {
  return { type: DECREMENT, payload: 1 };
}


