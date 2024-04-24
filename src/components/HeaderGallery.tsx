export default function HeaderGallery(){
    return (
        
            <div
                className="flex flex-row items-center justify-center min-[1000px]:space-x-5 space-y-3 min-[1000px]:space-y-0
                 p-3 w-2/4 max-h-[100px] mx-auto min-w-[400px] ">

                <div className="max-[400px]:hidden w-1/5 min-w-fit bg-white flex flex-col space-y-2 p-3 justify-center">
                    <p>Imagem</p>
                </div>
                <div className="w-1/4 min-[400px]:w-2/3 w-1/5 bg-white min-w-fit flex flex-col space-y-2 p-3 justify-center">
                    <p>produto</p>
                </div>
                <div className="w-1/4 min-[400px]:w-2/3 w-1/5 bg-white min-w-fit flex flex-col space-y-2 p-3 justify-center">
                    <p>estoque</p>
                </div>
                <div className="w-1/4 min-[400px]:w-2/3 w-1/5 bg-white min-w-fit flex flex-col space-y-2 p-3 justify-center">
                    <p>valor(Un)</p>
                </div>
                <div className="w-1/4 min-[400px]:w-2/3 w-1/5 bg-white min-w-fit flex flex-col space-y-2 p-3 justify-center">
                    <p>ações</p>
                </div>

            </div>
        
    )
}