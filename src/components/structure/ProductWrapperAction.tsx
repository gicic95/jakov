/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { cn } from "@/lib/utils";
import Filters from "./menus/ProductFilters";
import {
  zAttributes,
  zBannerHorizontal,
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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { fetchProducts, getAttributes } from "@/app/actions/fequentActions";
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
  LayoutGrid,
  LayoutList,
  OptionIcon,
  Settings2Icon,
} from "lucide-react";
import BannerHorizontal from "../frequent/Banners";
import SpecialPagination from "../frequent/SpecialPagination";
import SelectedFilters from "../product-page/filters/SelectedFilters";
import ActionFilters from "./menus/ProductFiltersAction";

export default function ProductWrapperAction({
  children,
  categories,
  style,
  metaSSR,
  allCategories,
  attributesSSR,
  banners,
  searchParams,
  init_products,
}: {
  children?: React.ReactNode;
  categories: {name:string, image:string}[];
  allCategories?: zCategory[];
  style?: string;
  metaSSR?: zMeta;
  attributesSSR?: zAttributes[];
  banners?: zBannerHorizontal[];
  searchParams?: [string, string][];
  init_products?: zProducts;
}) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [products, setProducts] = useState<zProducts | null>(
    init_products as zProducts
  );
  const [sortOption, setSortOption] = useState<number>(
    params?.get("latest")
      ? 2
      : params?.get("price")
      ? params?.get("price") === "asc"
        ? 3
        : 4
      : 1
  );

  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    if (!params.size && sortOption === 1) return;
    router.push(pathname + "?" + createQueryOrderString(Number(sortOption)), {
      scroll: false,
    });
  }, [sortOption]);

  useEffect(() => {
    setProducts(init_products as zProducts);
  }, [params]);

  const [perRow, setPerRow] = useState<number>(5);

  useEffect(() => {

    if (typeof window === "undefined") return;
    if (window.innerWidth < 640) {
      setPerRow(2);
    } else if (window.innerWidth < 1024) {
      setPerRow(3);
    } else if (window.innerWidth < 1300) {
      setPerRow(4);
    } else {
      setPerRow(5);
    }
  }, []);

  const createQueryOrderString = useCallback(
    (sortOption: number) => {
      const tmp = new URLSearchParams(params.toString());
      if (sortOption === 1) {
        tmp.set("latest", "");
        tmp.set("price", "");
      }
      if (sortOption === 2) {
        tmp.set("latest", "asc");
        tmp.set("price", "");
      }
      if (sortOption === 3) {
        tmp.set("latest", "");
        tmp.set("price", "asc");
      }
      if (sortOption === 4) {
        tmp.set("latest", "");
        tmp.set("price", "desc");
      }

      return tmp.toString();
    },
    [params, sortOption]
  );

  return (
    <>
      <div
        id="products"
        className={cn("w-full flex justify-start sm:mt-10", style)}
      >
        <div className="sm:w-1/3 lg:w-1/6 pr-2 h-fit sm:mr-4 hidden sm:flex  rounded-2xl">
            <ActionFilters
              categories={categories}
              attributesSSR={attributesSSR || []}
              banners={banners || []}
              searchParams={searchParams || []}
              setProducts={setProducts}
            />
        </div>
        <div className="flex flex-col w-full  sm:w-2/3 lg:w-5/6">
          <div className="w-full flex flex-col justify-between mb-5    ">
            <div className="flex rounded-md p-2    justify-between items-center w-full  ">
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
                      
                        <ActionFilters
                        categories={categories}
                        attributesSSR={attributesSSR || []}
                        banners={banners || []}
                        searchParams={searchParams || []}
                        setProducts={setProducts}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              <div
                className="hidden sm:flex justify-center items-center my-auto"
              >
                <SelectedFilters searchParams={searchParams || []} />
              </div>

              <div className="flex justify-center items-center onClick={(e)=>{e.preventDefault; e.stopPropagation()}}">
                <div className="flex justify-center items-center text-sm">
                  <span className="hidden sm:flex"> Sortiraj prema:</span>
                  <Select
                    defaultValue={sortOption.toString()}
                    onValueChange={(e) => {
                      setProducts(null);
                      router.push(
                        pathname + "?" + createQueryOrderString(Number(e)),
                        {
                          scroll: false,
                        }
                      );
                    }}
                    open={sortOpen}
                    onOpenChange={() => {
                      setTimeout(() => {
                        setSortOpen(!sortOpen);
                      }, 100);
                    }}
                  >
                    <SelectTrigger className="w-fit bg-white rounded-none text-black border-none ml-5">
                      <SelectValue placeholder=" Najprodavaniji" />
                    </SelectTrigger>
                    <SelectContent
                      onClick={(e) => {
                        e.preventDefault;
                        e.stopPropagation();
                      }}
                      className="cursor-pointer z-50"
                    >
                      <SelectItem
                        onClick={(e) => {
                          e.preventDefault;
                          e.stopPropagation();
                        }}
                        value="1"
                      >
                        Najprodavaniji
                      </SelectItem>
                      <SelectItem
                        onClick={(e) => {
                          e.preventDefault;
                          e.stopPropagation();
                        }}
                        value="2"
                      >
                        Najnovije
                      </SelectItem>
                      <SelectItem
                        onClick={(e) => {
                          e.preventDefault;
                          e.stopPropagation();
                        }}
                        value="3"
                      >
                        Sortiraj po ceni: od manje ka većoj
                      </SelectItem>
                      <SelectItem
                        onClick={(e) => {
                          e.preventDefault;
                          e.stopPropagation();
                        }}
                        value="4"
                      >
                        Sortiraj po ceni: od veće ka manjoj
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-2xl  h-fit -mt-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {products?.length ? (
              <>
                {products?.slice(0, perRow * 2)?.map((item, index) => {
                  return (
                    <div key={index} className="p-1">
                      <ProductCard item={item as zProduct} key={index} />
                    </div>
                  );
                })}
                {banners?.find((t) => t?.position?.name.includes("drugi")) ? (
                  <div className="col-span-full my-5 -mt-5">
                    <BannerHorizontal
                      className="col-span-4"
                      banner={banners?.find((t) =>
                        t?.position?.name.includes("drugi")
                      )}
                    />
                  </div>
                ) : (
                  <></>
                )}
                {products?.slice(perRow * 2)?.map((item, index) => {
                  return (
                    <div key={index} className="p-1">
                      <ProductCard item={item as zProduct} key={index} />
                    </div>
                  );
                })}
              </>
            ) : (
              Array(24)
                .fill(0)
                .map((item, index) => {
                  return (
                    <div key={index} className="p-2">
                      <div className="border aspect-[0.43] bg-white sm:aspect-[0.6]    rounded-2xl p-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse h-full flex flex-col justify-center items-center ">
                          <div className="rounded-full mx-auto bg-slate-200 h-20 w-20"></div>
                          <p className="text-slate-200 m-0 p-0">Učitavanje</p>
                        </div>
                      </div>
                    </div>
                  );
                })
            )}
          </div>
        </div>
      </div>
      <div className="w-full pr-2 text-right flex justify-end items-center">
        <div className="w-fit">
          <SpecialPagination meta={metaSSR as zMeta} />
        </div>
      </div>
    </>
  );
}
