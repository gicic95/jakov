import Breadcrumb from "@/components/frequent/BreadCrumb";
import ProductWrapperSearch from "@/components/structure/ProductWrapperSearch";
import { search } from "@/schemas/zSearchBar";



export default function SearchPage({ params }: { params: { search: string } }) {
    return <div className="max-w-screen-2xl mx-auto pt-10">
        <Breadcrumb list={[{ name: "Početna strana", link: "/" }, { name: "Pretraga", link: "#" }]} />
        <br />
        <p className="pl-4 text-xl">Pretraga: <b>{params.search}</b></p>
        <br />
        <ProductWrapperSearch search={params.search} />
    </div>
}

