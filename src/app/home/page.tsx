import Item from "@/components/Item";
import Header from "@/components/HeaderHome";
import HeaderGallery from "@/components/HeaderGallery";

export default function HomePage(){
    return (
        <div className="h-screen overflow-y-hidden">
            <div className="fixed top-0 left-0 w-full bg-white">
                <Header title="Inventário de produtos"/>
                <HeaderGallery/>
            </div>
            <div className="flex flex-col mt-[120px] h-full gap-2 overflow-y-auto">
                <Item/>
            </div>
        </div>
    )
}