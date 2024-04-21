export default function HeaderGallery(){
    return (
        <div className="min-h-[50px] flex flex-col justify-center ">
            <div
                className="relative flex flex-row md:space-x-5 space-y-3 
                md:space-y-0 rounded-xl p-3 md:w-2/4 w-2/3 max-h-[50px] mx-auto min-w-[400px] self-end">

                <div className="w-1/4 md:w-2/3 w-1/5 bg-white flex flex-col space-y-2 p-3 justify-center">
                    <p>Imagem</p>
                </div>
                <div className="w-1/4 md:w-2/3 w-1/5 bg-white flex flex-col space-y-2 p-3 justify-center">
                    <p>produto</p>
                </div>
                <div className="w-1/4 md:w-2/3 w-1/5 bg-white flex flex-col space-y-2 p-3 justify-center">
                    <p>estoque</p>
                </div>
                <div className="w-1/4 md:w-2/3 w-1/5 bg-white flex flex-col space-y-2 p-3 justify-center">
                    <p>valor(Un)</p>
                </div>
                <div className="w-1/4 md:w-2/3 w-1/5 bg-white flex flex-col space-y-2 p-3 justify-center">
                    <p>ações</p>
                </div>

            </div>
        </div>
    )
}