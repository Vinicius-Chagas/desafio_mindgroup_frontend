import Cookies from 'js-cookie';
import AttProdutoForm from "@/components/AttProdutoForm";
import { useRouter } from "next/router";

type attProductParams = {
    id: number;
}

type product = {
    id:number;
    nome:string;
    descricao:string;
    valor:string;
    imagem: {type:string, data: number[]};
}

export default async function AttProduto({ params }:{ params:attProductParams}){

    const getProductById = async (id: number) => {
    
        try {
            const res = await fetch(`http://localhost:8080/product/${id}`, {
                cache: "no-store",
                headers: {
                    'content-type': 'application/json'
                },
            });
    
            if(!res.ok){
                throw new Error("Falha ao receber o produto");
            }
            return res.json();
    
        } catch (error) {
            console.log(error);
        }
    }

    const { id } = params;
    const response = await getProductById(id);

    const product: product = response.product;

    return <AttProdutoForm product={product}/>;
}