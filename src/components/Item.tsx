import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";

const getProducts = async () => {
    try {
        const res = await fetch("http://localhost:8080/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
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

export default function Item(){

    const products  = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
        {id:7},
        {id:8},
        {id:9},
        {id:10}
    ];

    return (
        <>
            {products.map( (product:any) => (
                <div key={product.id} className="flex flex-col justify-center">
                    <div
                        className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 md:w-2/4 w-2/3 max-h-[100px] mx-auto border border-white bg-white min-w-[400px] ">
                            
                        <div className="hidden md:block w-1/5 md:w-2/3 bg-white grid place-items-center">
                            <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100" alt="tailwind logo" className="rounded-xl size-[80px]" />
                        </div>

                        <div className="w-1/4 md:w-2/3 w-1/5 bg-white flex flex-col space-y-2 p-3 justify-center">
                            
                            <p className="md:text-xl text-gray-500 text-base">Flour</p>
                            
                        </div>
                        <div className="w-1/4 md:w-2/3 w-1/5 bg-white flex flex-col space-y-2 p-3 justify-center">
                            
                            
                        <p className="text-xl font-black text-gray-800">
                                85
                                <span className="font-normal text-gray-600 text-base">/100</span>
                            </p>
                            
                        </div>
                        <div className="w-1/4 md:w-2/3 w-1/5 bg-white flex flex-col space-y-2 p-3 justify-center">
                            
                            
                            <p className="md:text-lg text-gray-500 text-base">R$ 10,99</p>
                            
                        </div>
                        <div className="w-1/4 md:w-2/3 w-1/5 bg-white flex flex-row space-y-2 p-3 place-items-center justify-content-between">
                            <HiPencilAlt className="md:w-[40px] w-[30px] size-14 "/>
                            <HiOutlineTrash className="md:w-[40px] w-[30px] size-14 "/>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}