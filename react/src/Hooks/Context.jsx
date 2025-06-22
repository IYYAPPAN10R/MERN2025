import {createContext} from 'react';

export const Context = createContext();

export const UserContext = ({children}) => {
    const user = {name:"iy" , phn:"9043898589"}
  return (
    <Context.Provider value ={user}>
        {children}
    </Context.Provider>
  )
}

export default Context;