"use client";

import { firstClickSearch, querySearch } from "@/app/actions/searchActions";
import { cn } from "@/lib/utils";
import { zSearchResults } from "@/schemas/zSearchBar";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SearchDrop({
  open,
  search,
  setOpen,
}: {
  search: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [data, setData] = useState<zSearchResults>(null);

  async function fetchData() {
    if (open && !search?.length) {
      setData(await firstClickSearch());
      return;
    } else {
      setData(await querySearch(search));
    }
  }

  useEffect(() => {
    fetchData();
  }, [search, open]);

  return (
    <div
      onClick={() => setOpen(false)}
      className={cn(
        "fixed overflow-hidden  top-0 flex justify-center backdrop-blur-sm bg-blue-900 items-end sm:items-center pb-10  left-0 h-[100vh] z-40 w-[100vw] bg-opacity-10 ",
        open ? "" : "hidden"
      )}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        className="sm:w-[80%] w-[90%] overflow-y-scroll sm:overflow-hidden  sm:top-10 relative h-[80vh] sm:h-[70%] rounded-md  border border-const_secondary shadow-md bg-white"
      >
        <div className="w-full h-full grid sm:grid-cols-5  ">
          <div className=" p-5 w-[85vw] sm:w-full ">
            {data?.category?.items?.length ? (
              <>
                <p className="text-gray-900 mb-5 font-bold">Kategorije</p>

                {data?.category?.items?.map((item, index) => {
                  return (
                    <div key={index} className="w-full truncate text-sm">
                      <Link
                        href={item?.link}
                        className=" w-full "
                        dangerouslySetInnerHTML={{
                          __html: item?.highlighted_name,
                        }}
                      />
                    </div>
                  );
                })}
                <br />
                <hr />
              </>
            ) : null}
            {data?.popular?.items?.length ? <>
            <p className="font-bold text-gray-900 mt-5 mb-5">Popularne pretrage</p>
              {data?.popular?.items?.map((item, index) => {
                  return (
                    <div key={index} className="w-full truncate text-sm">
                      <Link
                        href={item?.link}
                        className=" w-full "
                        dangerouslySetInnerHTML={{
                          __html: item?.highlighted_name, 
                        }}
                      />
                    </div>
                  );
                })}
            </> : null}
          </div>
          <div className="col-span-4 border-l p-5 h-full">
            <p className="font-bold text-gray-900">Proizvodi</p>

            <div className="w-full sm:overflow-y-scroll pr-2  mt-5 h-[60vh] grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {data?.product?.items?.map((item, index) => {
                return (
                  <Link
                    href={item?.link}
                    key={index}
                    className=" text-sm  flex justify-between items-center flex-col text-const_secondary font-bold p-3 border rounded-md"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item?.highlighted_name,
                      }}
                    />
                    <Image
                      src={item?.image}
                      alt={item?.name}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "150px" }}
                      className="object-contain "
                    />
                    <p className="text-gray-800 font-bold text-lg">
                      {item?.price?.regular_price} RSD
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-3 rotate-45 top-0 -translate-y-1/2 bg-white absolute left-[47%] sm:left-[40%] aspect-square border-const_secondary border-l border-t"></div>
      </div>
    </div>
  );
}
