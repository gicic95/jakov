"use client";
import { fetchAllCategories } from "@/app/actions/fequentActions";
import { zCategory, zMenuCategories, zMenuCategory } from "@/schemas/zFrequent";
import { CursorArrowIcon } from "@radix-ui/react-icons";
import { ChevronDown, LayoutGrid, Loader2 } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import SubCategories from "./AllCategories/SubCategories";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function AllCategories({
  categories,
  brands
}: {
  categories: zMenuCategories;
  brands?: {
    id: number;
    name: string;
    slug: string;
    image: string;
  }[];
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [subcategories, setSubcategories] = useState<zMenuCategory | null>(
    null
  );

  const params = useParams();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [params]);

  return (
    <div className="relative cursor-pointer rounded-t-lg  bg-const_secondary font-semibold  text-white flex items-center pl-5 w-[280px] mr-2 ">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="w-full flex items-center gap-3 text-sm font-black  gap- m-auto h-min"
      >
        <LayoutGrid fill="white" />
        <b>Sve Kategorije</b>
      </div>

      {open && (
        <div
          ref={dropdownRef}
          className="absolute text-black left-0 w-full top-full min-h-52 pb-2 bg-white shadow-md  rounded-b-lg"
        >
          <div className="w-full h-full font-light px-3   relative">
            {categories?.length ? (
              <>
                {categories?.map((item, index) => {
                  return (
                    <div
                      onMouseEnter={() => {
                        setSubcategories(item);
                      }}
                      key={index}
                      className="my-2 text-sm flex w-full justify-between"
                    >
                      <Link href={"/" + item.slug} className="flex items-center gap-3">
                        <Image
                          alt={item.slug}
                          src={item?.image || "/assets/mini_logo.png"}
                          width={30}
                          className="object-contain"
                          height={30}
                        />{" "}
                        {item.name}
                      </Link>{" "}
                      <span className="my-auto">{">"}</span>
                    </div>
                  );
                })}
                <div
                  onMouseEnter={() => {
                    setSubcategories({
                      name: "Sve kategorije",
                      slug: "sve-kategorije",
                      subcategories: categories,
                    } as zMenuCategory);
                  }}
                  className="my-3 flex w-full justify-between"
                >
                  <Link href={"/sve-kategorije"} className="flex gap-3">
                    <Image
                      alt={"sve-kategorije"}
                      src={"/assets/mini_logo.png"}
                      width={30}
                      className="object-contain"
                      height={30}
                    />{" "}
                    Sve Kategorije
                  </Link>{" "}
                  <span>{">"}</span>
                </div>
                <div
                  onMouseEnter={() => {
                    setSubcategories({
                      name: "Svi brendovi",
                      slug: "svi-brendovi",
                      subcategories: brands,
                    } as unknown as zMenuCategory);
                  }}
                  className="my-3 flex w-full justify-between"
                >
                  <Link href={"/svi-brendovi"} className="flex gap-3">
                    <Image
                      alt={"svi-brendovi"}
                      src={"/assets/mini_logo.png"}
                      width={30}
                      className="object-contain"
                      height={30}
                    />{" "}
                    Svi Brendovi
                  </Link>{" "}
                  <span>{">"}</span>
                </div>
              </>
            ) : (
              <Loader2 className="m-auto animate-spin mt-20" />
            )}
          </div>

          <div className="top-0 min-h-full z-30 absolute right-0 translate-x-full  text-black font-light bg-gray-50 rounded-b-md shadow-md">
            {subcategories && open ? (
              <SubCategories category={subcategories} />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
