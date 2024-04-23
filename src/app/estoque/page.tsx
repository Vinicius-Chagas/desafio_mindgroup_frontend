
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

    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-col">
                <Header title="Estoque de produtos" path="/home"/>
            </div>
            <div className="flex flex-col gap-2 overflow-y-auto">
                <EstoqueForm productsPromise={thisProducts}/>
            </div>
        </div>
        
    )
}