"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"

export default function Register(){

    const router = useRouter();

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [senhaConf, setSenhaConf] = useState<string>("");

const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if(!nome || !email || !senha || !senhaConf){
        alert("Todos os campos são obrigatórios");
        return;
    }

    if(senha != senhaConf){
        alert("As senhas não correspondem");
        return;
    }

    try {
        const res = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nome,
                email: email,
                password: senha
            })
        });

        if(res.ok){
            alert('Usuário cadatrado com sucesso');
            router.push('/');
        }
        else{
            throw new Error('Falha ao registrar usuário');
        }


    } catch (error) {
        console.log(error);
    }
}

    return (

        <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block mb-1" htmlFor="nome">Nome completo</label>
                <input 
                    id="nome" 
                    type="text" 
                    name="nome" 
                    onChange={(e) => setNome(e.target.value)}
                    className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
            </div>
            <div className="mb-4">
                <label className="block mb-1" htmlFor="email">Email</label>
                <input 
                    id="email" 
                    type="text" 
                    name="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
            </div>
            <div className="mb-4">
                <label className="block mb-1" htmlFor="password">Senha</label>
                <input 
                    id="password" 
                    type="password" 
                    name="password" 
                    onChange={(e) => setSenha(e.target.value)}
                    className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
            </div>
            <div className="mb-4">
                <label className="block mb-1" htmlFor="password">Confirme sua senha</label>
                <input 
                    id="passwordConf" 
                    type="passwordConf" 
                    name="passwordConf" 
                    onChange={(e) => setSenhaConf(e.target.value)}
                    className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
            </div>
            <div className="mt-6">
                <button 
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button>
            </div>
            <div className="mt-6 text-center">
                <a href="/" className="underline">Já tem uma conta? Faça login!</a>
            </div>
            </form>
        </div>
        </div>

    );
}