"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation"
import Cookies from "js-cookie";


export default function Login(){
  const router = useRouter();
  
  Cookies.remove('token');

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();

 
      if(!email || !senha){
        alert("Todos os campos são obrigatórios");
        return;
      }

      try {
        const res = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: senha
          })
        })

        if(!res.ok){
          const data: {error:string} = await res.json();
          throw new Error(data.error);
        }
        else {
          
          const data = await res.json();
          Cookies.set('token', data.token); 
    
          router.push("/home");
          
        }
      
      } catch (error) {
        alert(error);
      }
  }

    return (
      <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">Bem vindo.</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">E-mail</label>
              <input 
                id="email" 
                type="text" 
                name="email" 
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 px-3 border border-gray-300 
                focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 
                focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="password">Senha</label>
              <input 
                id="password" 
                type="password" 
                name="password" 
                onChange={(e) => setSenha(e.target.value)}
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none 
                focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 
              border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none 
              focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Log In</button>
            </div>
            <div className="mt-6 text-center">
              <a href="/register" className="underline">Não tem uma conta? Crie uma!</a>
            </div>
          </form>
        </div>
      </div>

    )
}