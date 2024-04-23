"use client"

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";


export default function Header({title, path}:{title:string, path:string}){

    const router = useRouter();

   
    return (
        <div className="min-h-[50px] flex flex-col justify-center ">

            <div
                className="flex flex-row md:space-x-5 space-y-3 
                md:space-y-0 rounded-xl p-3 md:w-2/4 w-2/3 min-h-[50px] mx-auto min-w-[400px] ">
                    <div className="mt-[5px] flex flex-row justify-between w-full">
                        
                        <FaArrowLeft className="cursor-pointer" onClick={(e) => router.push(path)} size={25}/>

                        <p>{title}</p>

                        <Link href={"/produto"}
                            className="w-full inline-flex 
                            items-center justify-center px-4 py-2 bg-red-600 border border-transparent 
                            rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 
                            focus:ring focus:ring-red-200 disabled:opacity-25 transition max-w-[50px]  max-h-[40px] text-xs">Novo produto</Link>

                        <Link href={"/estoque"}
                            className="w-full inline-flex 
                            items-center justify-center px-4 py-2 bg-red-600 border border-transparent 
                            rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 
                            focus:ring focus:ring-red-200 disabled:opacity-25 transition max-w-[50px] max-h-[40px] text-xs">Novo estoque</Link>
                    </div>
            </div>

        </div>
    )
}