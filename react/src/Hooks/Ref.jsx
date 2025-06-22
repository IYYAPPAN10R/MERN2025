import React, { useEffect, useState ,useRef } from 'react'

const Ref = () => {
    const [count,setCount] = useState(0);
    const value  = useRef(0);
    const handleIncrement = ()=>{
        setCount(count+1);
    }
    useEffect(()=>{
         setTimeout(() =>{
            setValue(value+1)
         },2000)
    })
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() =>setCount(count+1)}>+</button>
        <h1>{value.current}</h1>
       
    </div>
  )
}

export default Ref