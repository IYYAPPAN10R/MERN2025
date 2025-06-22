import React from 'react'
import Child from './components/Child'
import About from './Pages/About'
import Contact from './Pages/Contact' 
import Home from './Pages/Home'
import Skill from './Pages/Skill'
import Form from './Pages/Form'
import Navbar from './components/Navbar'
import Count from './components/Count'
import Hooks from './Pages/Hooks'
import Effect from './Hooks/Effect'
import State from './Hooks/State'
import Login from './Pages/Login'
import Ref from './Hooks/Ref'
import Reducer from './Hooks/Reducer'
import {Route , Router, Routes} from 'react-router-dom'

const App = () => {
  var arr = ['hii' , 'hello' , ' bye']
  var user = {username : "iyyappan" , pass : "12345678"};
  return (
    <div>
       <Navbar/>
       <Login/>
       <Routes>
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/home' element = {<Home items = {arr}/>}/>
          <Route path = '/hooks' element ={<Hooks/>}/>
          <Route path = '/state' element = {<State/>}/>
          <Route path = '/effect'  element = {<Effect/>}/>
          <Route path = '/ref' element = {<Ref/>}/>
          <Route path = '/reducer' element = {<Reducer/>}/>
          
       </Routes>
       
        
    </div>
  )
}

export default App