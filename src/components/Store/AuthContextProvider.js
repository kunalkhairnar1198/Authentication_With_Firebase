import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthContextProvider = (props) => {
const [token, setToken] = useState(null)

const userIsLoggedIn = !!token ;

useEffect(()=>{
    let storedToken = JSON.stringify(localStorage.getItem('token'))
    if(!storedToken){
        setToken(storedToken)
    }
},[])

const loginHandler =(token)=>{
    setToken(token)
    localStorage.setItem('token', JSON.stringify(token))
}

const logoutHandler =()=>{
    localStorage.removeItem('token')
    setToken(null)
}

const authContextValue ={
    token:token,
    isLogedIn:userIsLoggedIn,
    login:loginHandler,
    logout: logoutHandler,
}
    
return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
