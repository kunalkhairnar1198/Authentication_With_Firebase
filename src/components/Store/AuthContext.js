import React from 'react'

export const AuthContext = React.createContext({
    token:'',
    isLogedIn:false,
    login: (token)=>{},
    logout: (token)=>{},    
})


