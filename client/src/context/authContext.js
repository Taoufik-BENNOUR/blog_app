import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()


export const AuthContextProvider = ({children}) =>{
    const [currentUser, setcurrentUser] = useState(JSON.parse(localStorage.getItem("user")||null))
    
    const Login = async(inputs) =>{
        const res = await axios.post("/auth/login",inputs)
        setcurrentUser(res.data)
    }
    const Logout = async() =>{
    await axios.post("/auth/logout")
        setcurrentUser(null)
    }
    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(currentUser))
    }, [currentUser])
    
    return(
        <AuthContext.Provider value={{currentUser,Login,Logout}}>
            {children}
        </AuthContext.Provider>
    )
}