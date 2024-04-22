
import EstoqueForm from "@/components/EstoqueForm";
import { useState } from "react";

type product = {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    imagem: any; 
    createdAt: string;
    updatedAt: string;
}

const getProducts = async () => {
    try {
        const res = await fetch("http://localhost:8080/products", {
            cache: "no-store",
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjIsImlhdCI6MTcxMzc0MzQ1MywiZXhwIjoxNzEzNzUwNjUzfQ.CC7hF63fEuIEGKxahlu950xbQjkCBOu41uVTd_7E8RY`
            },
        })

        if(!res.ok){
            throw new Error("Falha ao buscar produtos");
        }

        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function Estoque(){
    const response = await getProducts();

    const thisProducts:product[] = response.products;

    return <EstoqueForm productsPromise={thisProducts}/>
}