import React, { useState } from 'react'

const defaultValue = {
    user: {},
    token: '',
    auth: false,
}

export const AuthContext = React.createContext(defaultValue)

const AuthProvider = props => {
    const userStorage = JSON.parse(localStorage.getItem('user')) || []
    const tokenStorage = localStorage.getItem('token')
    const [user] = useState(userStorage)
    const [token] = useState(tokenStorage)
    return(
        <AuthContext.Provider value={{user, token}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider