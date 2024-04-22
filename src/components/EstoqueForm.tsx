"use client";

import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
 
type product = {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    imagem: null; 
    createdAt: string;
    updatedAt: string;
}

    export default function EstoqueForm({productsPromise}:{productsPromise:product[]}){
    const router = useRouter();

    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [selectedOperation, setSelectedOperation] = useState<number | null>(null);
    const [products, setProducts] = useState<product[]>(productsPromise);
    const [total, setTotal] = useState<string>("");

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {

        e.preventDefault();

        console.log({selectedProductId, selectedOperation, total});

        if(selectedProductId == null || !total || selectedOperation == null){
          alert("Todos os campos são obrigatórios");
          return;
        }

        const newTotal = selectedOperation == 1 ? total : (parseFloat(total)*-1).toString();

        try {
          const res = await fetch('http://localhost:8080/estoque', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
              },
            body: JSON.stringify({
                idString: selectedProductId,
                additionString:newTotal
            })
        });
  
          if(!res.ok){
            const response = await res.json();
            throw new Error(response.message);
          }
          else {
            alert('Estoque registrado com sucesso');
            router.push("/home")
          }
        
        } catch (error) {
          alert(error);
        }
    }

    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block mb-1" htmlFor="product">Produto</label>
                <select 
                    name="product"
                    value={selectedProductId || ''}
                    className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                    onChange={(e) => setSelectedProductId(Number(e.target.value))}>
                    <option value="">Selecione um produto</option> 
                    {products.map((product) => (
                        <option key={product.id} value={product.id}>
                        {product.nome}
                        </option>
                    ))}
                </select>
            </div>
          
            <div className="mb-4">
                <label className="block mb-1" htmlFor="operacao">Operação</label>
                <select 
                    name="operacao"
                    value={selectedOperation || ''}
                    className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                    onChange={(e) => setSelectedOperation(Number(e.target.value))}>
                    <option value="">Selecione uma operação</option> 
                    <option value="1">Estocar</option> 
                    <option value="2">Consumir</option> 
                
                </select>
            </div>
            
            <div className="mb-4">
              <label className="block mb-1" htmlFor="total">Total</label>
              <input 
                id="total" 
                type="number" 
                name="total" 
                min="0"
                onChange={(e) => setTotal(e.target.value)}
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full inline-flex items-center justify-center 
              px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 
              active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Atualizar</button>
            </div>
          </form>
        </div>
      </div>
    )
}