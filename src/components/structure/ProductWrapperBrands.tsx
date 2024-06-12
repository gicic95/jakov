/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { cn } from "@/lib/utils";
import Filters from "./menus/ProductFilters";
import {
  zAttributes,
  zCategory,
  zMeta,
  zProduct,
  zProducts,
} from "@/schemas/zFrequent";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/app/actions/fequentActions";
import ProductCard from "../frequent/ProductCard";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LayoutGridIcon,
  LucideLayoutList,
  OptionIcon,
  Settings2Icon,
} from "lucide-react";
import BrandFilters from "./menus/BrandFilters";
import { getBrandByCategory } from "@/app/actions/brandsActions";
import { CheckboxHookBrands } from "../product-page/filters/comboBoxBrandsFn";
import ProductCardHorizontal from "../frequent/ProductCardHorizontal";
import { CheckboxHook } from "../product-page/filters/comboBoxFn";
import SpecialPagination from "../frequent/SpecialPagination";
import SelectedFilters from "../product-page/filters/SelectedFilters";

export default function ProductWrapperBrands({
  children,
  category,
  currentCategory,
  searchParams,
  style,
  metaSSR,
  allCategories,
  attributesSSR,
  brand,
}: {
  children?: React.ReactNode;
  category?: { id: number; name: string; product_count: number };
  currentCategory?: string;
  allCategories?: {
    id: number;
    name: string;
    product_count: number;
    image: string;
  }[];
  searchParams?: { [key: string]: string | string[] | undefined };
  style?: string;
  metaSSR?: zMeta;
  attributesSSR?: zAttributes[];
  brand: string;
}) {
  const params = useSearchParams();
  const [products, setProducts] = useState<zProduct[] | null>([]);
  const [sortOption, setSortOption] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [meta, setMeta] = useState<zMeta | null>(metaSSR as zMeta);
  const [filters, setFilters] = useState<string[]>([]);
  const [perPage, setPerPage] = useState<number>(0);

  const [horizontal, setHorizontal] = useState(false);

  async function fetchData(categories: string) {
    await getBrandByCategory(
      brand,
      categories,
      Number(params.get("page")),
      "",
      "",
      perPage
    ).then((res) => {
      setProducts(res.products);
      setMeta(res.meta);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchData(
      allCategories?.find((c) => c?.name === currentCategory)?.id.toString() ||
        ""
    );
  }, [params, currentCategory]);

  return (
    <>
      <div className={cn("w-full flex justify-start sm:mt-10 pb-10", style)}>
        <div className="sm:w-1/3 bg-white  mt-5 lg:w-1/6 p-5 h-fit sm:mr-4 hidden sm:flex  flex-col rounded-2xl">
          <p className="font-bold mb-5">KATEGORIJE</p>
          <CheckboxHook
            setItems={(e: any) => console.log(e)}
            items={
              allCategories?.map((i) => ({
                id: String(i.id),
                label: i.name,
                count: i.product_count,
                image: i.image,
              })) || []
            }
            parent_id={{ id: "", label: "Current_category" }}
          />
        </div>
        <div className="flex flex-col w-full   sm:w-2/3 lg:w-5/6">
          <div className="w-full flex flex-col justify-between mb-5  ">
            <div className="flex flex-col sm:flex-row text-center sm:text-left justify-between mb-5 "></div>
            <div className="flex  rounded-md p-2    justify-between items-center w-full  sm:pl-5">
              <div className="sm:hidden">
                <Sheet>
                  <SheetTrigger className="mt-2">
                    <p className=" sm:hidden pl-5 text-xs flex justify-center items-center leading-none">
                      <Settings2Icon width={15} className="mr-2" />
                      Filteri
                    </p>
                  </SheetTrigger>
                  <SheetContent side={"right"} className="">
                    <div className="w-full p-2  sm:mr-4 overflow-y-scroll no-scrollbar h-full sm:flex ">
                      <p className="font-bold mb-5">KATEGORIJE</p>
                      <CheckboxHook
                        setItems={(e: any) => console.log(e)}
                        items={
                          allCategories?.map((i) => ({
                            id: String(i.id),
                            label: i.name,
                            count: i.product_count,
                            image: i.image,
                          })) || []
                        }
                        parent_id={{ id: "", label: "Current_category" }}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
              <div>
                <SelectedFilters
                  searchParams={
                    Object.entries(searchParams || []) as [string, string][]
                  }
                />
              </div>
              {/* <div className="flex gap-2 items-center">
                <span className="text-sm">Sortiraj prema:</span>
                <Select
                  onValueChange={(e) => {
                    setSortOption(e);
                  }}
                >
                  <SelectTrigger className="w-fit min-w-[250px] bg-white rounded-md ml-5">
                    <SelectValue placeholder="Podrazumevano sortiranje" />
                  </SelectTrigger>
                  <SelectContent className="cursor-pointer">
                    <SelectItem value="1">Podrazumevano sortiranje</SelectItem>
                    <SelectItem value="2">Najnovije</SelectItem>
                    <SelectItem value="3">
                      Sortiraj po ceni: od manje ka većoj
                    </SelectItem>
                    <SelectItem value="4">
                      Sortiraj po ceni: od veće ka manjoj
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
            </div>
          </div>
          <div
            className={
              " bg-white  rounded-xl shadow w-full  h-fit -mt-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 "
            }
          >
            {products?.length
              ? products?.map((item, index) => {
                  return (
                    <div key={index} className="  my-1 sm:p-2">
                      <ProductCard item={item as zProduct} key={index} />
                    </div>
                  );
                })
              : Array(24)
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
          </div>
        </div>
      </div>
      <div className="w-full pr-2 pb-10 text-right flex justify-end items-center">
        <div className="w-fit">
          <SpecialPagination meta={meta as zMeta} />
        </div>
      </div>
    </>
  );
}
