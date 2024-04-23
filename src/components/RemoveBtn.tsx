"use client";

import { HiOutlineTrash } from "react-icons/hi"

import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

export default function RemoveBtn({ id } : { id:number }) {

    const router = useRouter();

    const removeProduct = async() => {

        const token = Cookies.get('token');

        const confirmed = confirm("Realmente deseja deletar este produto?");

        if(confirmed){
            router.refresh();

            const res = await fetch(`http://localhost:8080/product/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`
                  },
                }
            )
        }
    }

    return  (
        
        <HiOutlineTrash className="min-[400px]:w-[35px] w-[30px] size-full cursor-pointer" color="red"  onClick={removeProduct}/>
       
    )
}