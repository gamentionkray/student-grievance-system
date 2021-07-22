import React, { useState, createContext } from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false)

  return (
    <UserContext.Provider value={{isGlobalSpinnerOn, setGlobalSpinner}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider