"use client"
import { zSearch } from "@/schemas/zSearchBar"
import { useEffect, useState } from "react"
import ProductCard from "../frequent/ProductCard"
import ProductCardSearch from "./search/ProductCardSearch"
import { athenaSearch } from "@/app/actions/searchActions"
import { zProduct } from "@/schemas/zFrequent"
import ProductWrapperBrands from "./ProductWrapperBrands"


export default function ProductWrapperSearch({search}:{search:string}) {
    const [data, setData] = useState<zSearch | null>(null)

    async function fetchData(search: string) {
        await athenaSearch(search).then(setData)
    
    }

    useEffect(() => {
        fetchData(search)
    }, [])



    return(
        <div className="grid gap-3 pb-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-5 2xl:px-0 2xl:grid-cols-6">
            {data?.products?.results?.map((product, index) => (
                <ProductCardSearch item={product as any} key={index} />
            ))}
        </div>
    )
}