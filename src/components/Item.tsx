

import Link from "next/link";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
import { cookies } from "next/headers";

import RemoveBtn from "./RemoveBtn";

type product = {
    id:number;
    nome:string;
    descricao:string;
    valor:string;
    imagem: {type:string, data: number[]};
    total:number;
}



const getEstoque = async () => {

    const cookiesList = cookies();
    const token = cookiesList.get('token');

    try {
        const res = await fetch("http://localhost:8080/productsEstoque", {
            cache: "no-store",
            headers: {
                    'content-type': 'application/json',
                    
                    'Authorization': `Bearer ${token?.value}`
                     
            }
        })

        if(!res.ok){
            throw new Error("Falha ao buscar produtos");
        }

        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

function convertImage(data:number[]):string{
    const imgBuffer = Buffer.from(data);
    const img64 = imgBuffer.toString("base64");
    return `data:image/jpeg;base64,${img64}`;
}

export default async function Item(){

    const response = await getEstoque();

    const products:product[] = response.estoque;

    
    return (
        <>
            {products.map( (product:product) => (
                
                <div key={product.id} className="flex flex-col justify-center">
                    <div
                        className="relative flex flex-row items-center justify-center min-[1000px]:space-x-5 space-y-3 min-[1000px]:space-y-0 rounded-xl 
                        shadow-lg p-3 w-2/4 max-h-[100px] mx-auto border border-white bg-white min-w-[400px] ">
                            
                        <div className="hidden min-[400px]:block w-2/5 place-items-center">
                            <img src={product.imagem != null ? convertImage(product.imagem.data) : ""} alt="tailwind logo" className="rounded-xl aspect-square min-w-[60px]" />
                        </div>

                        <div className="w-1/4 min-[400px]:w-2/3 w-1/5 bg-white flex flex-col space-y-2 p-3 justify-center">
                            
                            <p className="min-[400px]:text-xl text-gray-500 text-base">{product.nome}</p>
                            
                        </div>
                        <div className="w-1/4 min-[400px]:w-2/3 w-1/5 bg-white flex flex-col space-y-2 p-3 justify-center">
                            
                            
                        <p className="text-xl font-black text-gray-800 text-center">{product.total || 0}</p>
                            
                        </div>
                        <div className="w-1/4 min-[400px]:w-2/3 w-1/5 bg-white flex flex-col space-y-2 p-3 justify-center">
                            
                            
                            <p className="min-[400px]:text-lg text-gray-500 text-base text-center">R$ {product.valor}</p>
                            
                        </div>
                        <div className="w-1/4 min-[400px]:w-2/3 w-1/5 bg-white flex flex-row space-y-2 p-3 items-center justify-content-between gap-2">
                            <Link href={`/attProduto/${product.id}`}>
                                <HiPencilAlt className="min-[400px]:w-[35px] w-[30px] size-full pt-2 cursor-pointer" />
                            </Link>
                            
                            <RemoveBtn id={product.id}/>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}