"use client";

import React, { useState, createContext } from 'react';
import {setCookie, parseCookies} from 'nookies'


type AuthContextType = {
    token: string | null;
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

type tokens ={
  token:string
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }:{children:any}) {
    const { 'auth_token': tokens } = parseCookies();
  
    const [token, setToken] = useState<string | null>(tokens || null);
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    async function login(token: string){
        setToken(token);
        setIsLoggedIn(true);
        setCookie(undefined,'auth_token2', token); 
      }

    const logout = () => {
    setToken(null);
    setIsLoggedIn(false);
    setCookie(undefined,'auth_token2',"");
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;