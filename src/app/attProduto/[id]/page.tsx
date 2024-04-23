import { cookies } from "next/headers";
import AttProdutoForm from "@/components/AttProdutoForm";


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

        const cookiesList = cookies();
        const token = cookiesList.get('token');
    
        try {
            const res = await fetch(`http://localhost:8080/product/${id}`, {
                cache: "no-store",
                headers: {
                    'content-type': 'application/json',
                    
                    'Authorization': `Bearer ${token?.value}`
                      
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