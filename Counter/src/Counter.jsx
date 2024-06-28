import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const checkprime = (value) => {
    let factor = 0;
    for (let i = 1; i <= value; i++) {
      if (value % i == 0) {
        factor++;
      }
    }
    if (factor == 2) {
      return "True";
    } else {
      return "False";
    }
  };

  const even_odd = (value) => {
    for (let i = 0; i <= value; i++) {
      if (value % 2 == 0) {
        return "Even";
      } else {
        return "Odd";
      }
    }
  };
  return (
    <div  className="card" style={{position:"relative",left:"70%",backgroundColor:"#C39898",padding:"15px 20px"}}>
      

       <h1 style={{ fontSize: "50px",textAlign: "center" }}>welcome to counter 2.0</h1>
      <h1 style={{textAlign: "center",fontSize: "40px"}}>counter : {value}</h1>
        <div className="btn" style={{paddingLeft:"40%"}}>
        <button
        style={{ margin:"10px", padding: "15px" ,backgroundColor:"#EEEEEE",textAlign: "center" }}
        onClick={() => setValue(value + 1)}
      >
        +1
      </button>
      <button
        style={{ margin:"10px",  padding: "15px" ,backgroundColor:"#EEEEEE",textAlign: "center" }}
        disabled={value === 0}
        onClick={() => setValue(value - 1)}
      >
        -1
      </button>{" "}
      <br /> <br />
      <button
        style={{  margin:"20px", padding: "15px 20px" ,backgroundColor:"#EEEEEE",textAlign: "center"}}
        onClick={() => setValue(0)}
      >
        Reset
      </button>
        </div>
      <p style={{ fontSize: "20px",textAlign: "center"  }}>Prime number : {checkprime(value)}</p>
      <p style={{ fontSize: "20px",textAlign: "center" }}>This number is : {even_odd(value)} </p>
      
    </div>
  );
};
export default Counter;
