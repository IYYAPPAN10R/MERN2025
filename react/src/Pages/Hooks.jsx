import React from 'react'
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <div style={{display:"flex" , flexDirection:"column" , alignItems: "center" , gap : "20px"}}>
        <Link to ='/State'>useState</Link>
        <Link to = '/Effect'>UseEffect</Link>
        <Link to = '/Ref'>UseRff</Link>
        <Link to = '/Reducer'>UseReducer</Link>
    </div>
  )
}
export default Hooks