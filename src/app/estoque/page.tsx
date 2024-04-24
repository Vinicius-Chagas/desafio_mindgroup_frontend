
import EstoqueForm from "@/components/EstoqueForm";
import Header from "@/components/HeaderHome";
import { cookies } from "next/headers";

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
    const cookiesList = cookies();
    const token = cookiesList.get('token');

    try {
        const res = await fetch("http://localhost:8080/products", {
            cache: "no-store",
            headers: {
                'content-type': 'application/json',

                'Authorization': `Bearer ${token?.value}`

            },
        })

        if(!res.ok){
            const data: {error:string} = await res.json();
            throw new Error(data.error);
        }

        return await res.json();
    } catch (error) {
        alert(error);
    }
}

export default async function Estoque(){


    const response = await getProducts();

    const thisProducts:product[] = response.products;

    return (
        <div className="h-screen w-screen flex flex-col absolute">
            <div className="flex flex-col">
                <Header title="Estoque de produtos" path="/home"/>
            </div>
            <div className="flex flex-col gap-2">
                <EstoqueForm productsPromise={thisProducts}/>
            </div>
        </div>
        
    )
}