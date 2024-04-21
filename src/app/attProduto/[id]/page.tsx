import AttProdutoForm from "@/components/AttProduto";

type attProductParams = {
    id: number;
}

type product = {
    id:number;
    nome:string;
    descricao:string;
    valor:string;
    imagem: {type:string, data: number[]};
}

const getProductById = async (id: number) => {
    try {
        const res = await fetch(`http://localhost:8080/product/${id}`, {
            cache: "no-store",
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjIsImlhdCI6MTcxMzczNjA2OSwiZXhwIjoxNzEzNzQzMjY5fQ.VQjXLSqNKKwcwJ6Ie_QGmReYynqYzJuKxTcRU9M5f0w`
            },
        });

        if(!res.ok){
            throw new Error("Falha ao receber o produto");
        }

        return res.json();

    } catch (error) {
        console.log(error);
    }
}

export default async function AttProduto({ params }:{ params:attProductParams}){
    const { id } = params;
    const response = await getProductById(id);

    const product: product = response.product;

    return <AttProdutoForm product={product}/>;
}