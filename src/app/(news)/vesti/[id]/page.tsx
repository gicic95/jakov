"use client";
import { getNews } from "@/app/actions/newsActions";
import Breadcrumb from "@/components/frequent/BreadCrumb";
import { zNews } from "@/schemas/zFrequent";
import Image from "next/image";


import { stateToHTML } from "draft-js-export-html";
import { convertFromRaw } from "draft-js";
import { useEffect, useState } from "react";
import DescriptionTab from "@/components/product-page/details/Description";

export default function NewsPage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<zNews>();
  useEffect(() => {
    getData({ id: params.id }).then((res) => setData(res));
  }, []);

  return (
    <div className="max-w-screen-2xl px-5 mx-auto">
      <Breadcrumb
        list={[
          { link: "/", name: "Početna strana" },
          { link: "#", name: "Vesti" },
        ]}
      />
      <h1 className="text-xl sm:text-2xl font-light  my-10  text-center">
        {" "}
        {data?.title}
      </h1>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2">
        <div className="relative mb-10 mt-10 h-full">
          <Image
            alt="Hero Banner"
            src={data?.image || ""}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className=" sm:mt-0    object-contain sm:flex z-10"
          />
        </div>
        
         {
            data?.body && <DescriptionTab description={data.body} style="sm:px-10 sm:w-full" />
         }
      </div>
    </div>
  );
}

export async function getData({ id }: { id: string }) {
  const res = await getNews(id);

  return res as zNews;
}
