"use client";

import { searchProducts } from "@/app/actions/fequentActions";
import ProductCard from "@/components/frequent/ProductCard";
import ProductWrapper from "@/components/structure/ProductWrapper";
import { zProduct } from "@/schemas/zFrequent";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home({ params }: { params: { search: string } }) {
  const [products, setProducts] = useState<zProduct[]>([]);

  useEffect(() => {
    const getData = async ({ search }: { search: string }) => {
      const res = await searchProducts(search);
      setProducts(res);
    };
    getData({ search: params.search });
  }, [params.search]);

  return (
    <div className="max-w-screen-2xl mx-auto mb-20 px-5 overflow-x-hidden">
      <p className="flex justify-center sm:justify-start text-center w-full  text-3xl mt-10 text-gray-600">
        Pretraga za:{" "}
        <span className="flex text-black  font-bold justify-center items-center ml-5">
          {decodeURIComponent(params.search)}
        </span>
      </p>
      <ProductWrapper>
        <>
          {Object.values(products).length ? (
            Object.values(products)?.map((item, index) => {
              return (
                <div key={index} className="mr-4  -ml-2 sm:p-2">
                  <ProductCard item={item as zProduct} key={index} />
                </div>
              );
            })
          ) : (
            <>
              {Array(8)
                .fill(0)
                .map((item, index) => {
                  return (
                    <div key={index} className="p-2">
                      <div className="border aspect-[0.43] sm:aspect-[0.6]    rounded-2xl p-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse h-full flex flex-col justify-center items-center ">
                          <div className="rounded-full mx-auto bg-slate-200 h-20 w-20"></div>
                          <p className="text-slate-200 m-0 p-0">Učitavanje</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </>
          )}
        </>
      </ProductWrapper>
    </div>
  );
}
