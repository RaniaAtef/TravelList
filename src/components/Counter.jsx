import React from 'react'
import {useState} from 'react'
export default function Counter() {
    const [count,setCount]=useState(0);
    const [step,setStep]=useState(1);
    const date=new Date();
    date.setDate(date.getDate()+count);
  return (

    <div>Counter
            <h1>Counter</h1>
            <p>step {step}</p>
            <button onClick={()=>setStep(step+1)}>+ </button>
            <button onClick={()=>setStep(step-1)}>-</button>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
<p>{count} days  from now is {date.toDateString()} </p>

    </div>
  )
}
