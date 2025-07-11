import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <nav className='navbar'> 
        <Link to = '/home' className="Link">Home</Link>
        <Link to = '/about' className="Link">About</Link>
        <Link to = '/contact' className="Link">Contact</Link>
        <Link to = '/skill' className="Link">Skill</Link>
        <Link to = '/hooks' className='Link'>Hooks</Link>
        </nav>
    </div>
  )
}
export default Navbar