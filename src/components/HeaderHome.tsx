"use client"

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";


export default function Header({title, path}:{title:string, path:string}){

    const router = useRouter();

   
    return (
        <div className="min-h-[70px] flex flex-col justify-center items-center">

            <div
                className="flex flex-row sm:space-x-5 space-y-3 
                md:space-y-0 rounded-xl p-3 sm:w-2/4 w-2/3 min-h-[70px] mx-auto min-w-[400px] ">
                    <div className="mt-[5px] flex flex-row justify-between w-full min-h-[70px]">
                        
                    <div className=" flex items-center  ">
                        <FaArrowLeft className="cursor-pointer" onClick={(e) => router.push(path)} size={25}/>
                    </div>
                        
                    <div className=" flex items-center ">
                        <p>{title}</p>
                    </div>
                        

                    <div className="flex flex-col lg:flex-row lg:gap-5 items-center justify-between">
                        <Link href={"/produto"}
                            className="w-full inline-flex 
                            items-center justify-center px-4 py-2 bg-red-600 border border-transparent 
                            rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 
                            focus:outline-none focus:border-red-700 
                            focus:ring focus:ring-red-200 disabled:opacity-25
                             transition min-w-[120px] max-w-[150px]  max-h-[30px] text-xs">Novo produto
                        </Link>

                        <Link href={"/estoque"}
                            className="w-full inline-flex 
                            items-center justify-center px-4 py-2 bg-red-600 border border-transparent 
                            rounded-md font-semibold capitalize text-white hover:bg-red-700 
                            active:bg-red-700 focus:outline-none focus:border-red-700 
                            focus:ring focus:ring-red-200 disabled:opacity-25 transition max-w-[150px] 
                            max-h-[30px] min-w-[120px] text-xs">Novo estoque
                        </Link>
                    </div>
                        
                    </div>
            </div>

        </div>
    )
}