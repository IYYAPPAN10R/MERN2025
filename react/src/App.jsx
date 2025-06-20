import React from 'react'
import Child from './components/Child'
import About from './Pages/About'
import Contact from './Pages/Contact' 
import Home from './Pages/home'
import Skill from './Pages/Skill'
import Form from './Pages/form'

const App = () => {
  var arr = ['hii' , 'hello' , ' bye']
  var user = {username : "iyyappan" , pass : "12345678"};
  return (
    <div>
       <Child name = "iyyappan"/>
       <Home items= {arr} users= {user}/>
       <About/>
       <Contact/>
       <Skill/>
    </div>
  )
}

export default App