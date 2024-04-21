import Link from "next/link";

export default function Header({title}:{title:string}){
    return (
        <div className="min-h-[50px] flex flex-col justify-center ">

            <div
                className="relative flex flex-row md:space-x-5 space-y-3 
                md:space-y-0 rounded-xl p-3 md:w-2/4 w-2/3 min-h-[50px] mx-auto min-w-[400px] ">
                    <div className="mt-[5px] flex flex-row justify-between w-full">
                        <Link href={"/"}>Sair</Link>
                        <p>{title}</p>
                        <Link href={"/produto"}>Novo produto</Link>
                        <Link href={"/"}>Novo estoque</Link>
                    </div>
            </div>

        </div>
    )
}