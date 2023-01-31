import React from 'react'
import { useState } from 'react'

const State = () => {
    const btnStyle={
      padding:20,
      border:"none",
      backgroundColor:"#f1f1f1",
      margin:10,
    }
    
    const [inputValue,setInputValue]=useState(0);
    
    function increament(){
       setInputValue(inputValue+1);
    }
    function decrement(){
        if(inputValue>0)
        setInputValue(inputValue-1);
     }
  return (
    <div>
        <input type="number" style={{border:"2px black solid"}} placeholder="Enter Something" value={inputValue}readOnly /> 
        <button style={btnStyle} onClick={decrement}>-</button>
        <button style={btnStyle} onClick={increament}>+</button>
    </div>
  )
}

export  default State;