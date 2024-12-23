import { useEffect } from "react";
import useCounter, { useActions } from "../store/use-counter";

function Products(){
    const productList = useCounter(state => state.listOfProducts)

    const {fetchListOfProducts} = useActions()

    console.log(productList)
    useEffect(() => {
        fetchListOfProducts()
    }, [])
  
    return (
        <div className="mt-4">
            <h1 className="text-2xl font-semibold">List of Products:</h1>
            <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-1 p-2">
                {
                    productList?.length > 0 ?
                    productList.map(product => <div key={product?.id} className="flex flex-col items-center m-2 p-2 rounded w-[240px] h-[180px] border border-violet-600 ">
                        <p className="text-center font-semibold">{product?.title}</p>
                        <img className="w-32 h-32" src={product?.thumbnail} />
                    </div>
                    )
                    : <h3>No products available</h3>
                }
            </ul>
        </div>
    )
}

export default Products;