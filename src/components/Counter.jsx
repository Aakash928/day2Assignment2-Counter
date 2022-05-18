import React, { useState } from 'react'
import style from "./style.module.css";

const Counter=()=> {
const [count, setCount]=useState(0);



  return (
    <div>
      <h1 className={count%2===0 ? style.greenCol : style.redCol}>Counter App: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Incremeent</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>

    </div>
  )
}

export default Counter
