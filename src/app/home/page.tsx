
import Item from "@/components/Item";
import Header from "@/components/HeaderHome";
import HeaderGallery from "@/components/HeaderGallery";


export default function HomePage(){

    
    return (
        <div className="h-screen flex flex-col">
            <div className="w-full bg-white">
                <Header title="Inventário de produtos" path="/"/>
                <HeaderGallery/>
            </div>
            <div className="flex flex-col h-full gap-2 overflow-y-auto">
                <Item/>
            </div>
        </div>
    )
}