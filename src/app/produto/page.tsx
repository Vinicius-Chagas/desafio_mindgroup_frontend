"use client";

import { useState } from "react";
import Header from "@/components/HeaderHome";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type product = {
  nome: string;
  descricao: string;
  valor: string;
  image: File | null;
}


export default function Produto() {

  const router = useRouter();

  const [newNome, setNome] = useState<string>("");
  const [newDescricao, setDescricao] = useState<string>("");
  const [newValor, setValor] = useState<string>("");
  const [newImage, setImage] = useState<File | null>(null);
  const [newImagePreview, setImagePreview] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!newNome || !newValor) {
      alert("Os campos nome e valor são obrigatórios");
      return;
    }

    const formData = new FormData();

    formData.append("name", newNome);
    formData.append("description", newDescricao);
    formData.append("value", newValor);

    if (newImage) {
      formData.append("image", newImage);
    }

    const token = Cookies.get('token');

    try {
      const res = await fetch('http://localhost:8080/product', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!res.ok) {
        const data: {error:string} = await res.json();
        throw new Error(data.error);
      }
      else {
        alert('Produto cadastrado com sucesso');
        router.push('/home');
        router.refresh();
      }

    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col absolute sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full h-full fixed">


        <div className="flex flex-col">
          <Header title="Novo item" path="/home" />
        </div>
        <div className="w-full bg-white flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
          <div className="justify-center flex w-full h-[150px]">
            <img src={newImagePreview} className="border border-gray-300 w-[150px] rounded-md h-full mb-4 " alt="" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                name="nome"
                value={newNome}
                onChange={(e) => setNome(e.target.value)}
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring 
                  focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                name="descricao"
                value={newDescricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="py-2 px-3 border border-gray-300 
                  focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full max-h-[150px]" />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="valor">Valor</label>
              <input
                id="valor"
                type="number"
                name="valor"
                value={newValor}
                onChange={(e) => setValor(e.target.value)}
                className="py-2 px-3 border border-gray-300 
                  focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="image">Imagem</label>
              <input
                id="image"
                type="file"
                name="image"
                onChange={(e) => {
                  if (e.target.files) {
                    setImage(e.target.files[0])
                    setImagePreview(URL.createObjectURL(e.target.files[0]));
                  }
                }}
                className="py-2 px-3 border border-gray-300 
                  focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
            </div>
            <div className="mt-6">
              <button type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border 
                  border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 
                  focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>


  )
}