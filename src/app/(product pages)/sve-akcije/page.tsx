import Breadcrumb from "@/components/frequent/BreadCrumb";
import { SEO, actions_related } from "../../../../CONFIGURE_HERE";
import { getActions } from "@/app/actions/fetchWeb";
import { zAction } from "@/schemas/zFrequent";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";


const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

export default async function ActionsPage() {
  const data = await getActions();

  return (
    <div className="py-20 max-w-screen-2xl mx-auto px-5 2xl:px-0">
      <Breadcrumb
        list={[
          { link: "/", name: "Početna strana" },
          { link: "#", name: "Akcije" },
        ]}
      />
      <h1 className="text-center mt-10 font-semibold text-3xl">AKCIJE</h1>
      <p
        className="sm:text-center text-sm mt-5 text-zinc-500 px-5 text-justify"
        dangerouslySetInnerHTML={{ __html: actions_related.top_desc }}
      />

      <div className="w-full grid grid-cols-1 gap-3 mt-20 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => {
          return (
            <Link href={"/sve-akcije/" + item?.slug } key={index} className="flex  p-4 flex-col">
              <div
                key={index}
                className="w-full  aspect-square  relative"
              >
                <Image
                  alt="akcija"
                  src={
                    item
                      ? STORAGE_URL + "/" + item.desktop_image
                      : "/assets/Logo.png"
                  }
                  fill
                  objectFit="contain"
                  className=""
                />
              </div>
              <p className="text-left text-const_secondary mx-auto  font-medium mt-2">{item?.name}</p>
            </Link>
          );
        })}
        
        
      </div>
    </div>
  );
}
