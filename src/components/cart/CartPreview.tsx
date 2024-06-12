"use client";
import useCart from "@/app/store/useCart";
import { cn } from "@/lib/utils";
import { zProduct } from "@/schemas/zFrequent";
import { Loader2, LoaderIcon, Minus, Plus, Truck, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { cart_related } from "../../../CONFIGURE_HERE";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CartPreview() {
  const { addItem, removieItem, items } = useCart();

  const [loading, setLoading] = useState<{
    loading: string;
    slug: string;
  } | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (!items?.length) router.push("/");
  }, []);

  // useEffect(()=>{
  //   setLoading(null)
  // },[items])

  //console.log(items, "items");
  return items?.length ? (
    <div className={"overflow-y-scroll   no-scrollbar h-fit "}>
      {/* {data?.user?.email &&
        items.filter((item: zProduct) => item?.promocode).length > 0 && (
          <p className=" text-center text-const_secondary mb-2">{`Na sledećoj strani "Završetak kupovine" unesite PROMO KOD`}</p>
        )} */}
      {items?.map((item, index) => {
        return (
          <div
            key={index}
            className="rounded-2xl bg-white relative   mb-5 flex  overflow-hidden  sm:flex-row  sm:pb-0  w-full items-center h-fit "
          >
            <div className="flex w-1/4 px-3  sm:w-1/4 flex-col sm:flex-row items-start justify-start  ">
              <div className="relative  w-full  rounded-sm aspect-square">
                <Image
                  src={item?.main_image?.small || item?.images?.[0]?.tiny || ""}
                  alt={item?.name || ""}
                  fill
                  className="object-cover p-3"
                />
              </div>
            </div>
            <div className="w-3/4 flex gap-5 pr-2 py-4 justify-center items-center flex-col">
              <div className="text-gray-700 w-full">
                <p className=" line-clamp-1 pr-8 font-bold text-base">
                  {item?.name}{" "}
                </p>

                <p className="text-gray-500 text-sm font-light">
                  Šifra proizvoda: {item?.sku}
                </p>
                <div className=" mr-2 mt-2 h-full flex justify-center items-center">
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="w-full h-full flex  items-center py-2"
                  >
                    <div className="grid grid-cols-3  cursor-pointer rounded-md overflow-hidden border w-[100px]">
                      <div
                        className="w justify-center  flex items-center  aspect-square"
                        onClick={async (e) => {
                          setLoading({ loading: "minus", slug: item?.slug || "" });
                          e.stopPropagation();
                          e.preventDefault();
                          await removieItem(
                            localStorage.getItem("store") || "",
                            item,
                            item?.quantity && item.quantity > 1
                              ? item.quantity - 1
                              : -1
                          ).then(() => setLoading(null));
                        }}
                      >
                        {
                          loading?.slug === item?.slug && loading?.loading === "minus" ? 
                          <Loader2 strokeWidth={1} color="black" className="animate-spin"/>
                          : <Minus strokeWidth={1} color="black" />
                        }
                      </div>
                      <div className=" h-full justify-center  flex items-center border-x aspect-square">
                        {item?.quantity}
                      </div>
                      <div
                        className=" justify-center cursor-pointer  flex items-center  aspect-square"
                        onClick={(e) => {
                          setLoading({ loading: "plus", slug: item?.slug || "" });
                          e.stopPropagation();
                          e.preventDefault();
                          addItem(localStorage.getItem("store") || "", item, 1).then(() => setLoading(null));
                        }}
                      >
                        {
                          loading?.slug === item?.slug && loading?.loading === "plus" ? 
                          <Loader2 strokeWidth={1} color="black" className="animate-spin"/>
                          : <Plus strokeWidth={1} color="black"  />
                        }
                      </div>
                    </div>
                  </div>

                  <p className="  h-full flex flex-col text-end  font-bold text-lg ">
                    <span className="line-through text-nowrap text-sm font-light">
                      {item?.retail_price?.toLocaleString("en-US").replaceAll(",", ".")} RSD
                    </span>
                    <span className="text-nowrap">{item?.price?.toLocaleString("en-US").replaceAll(",", ".")} RSD</span>
                  </p>
                </div>
                {item?.deliveryPrice === 0 ||
                (cart_related.free_after_price > 0 &&
                  Number(item?.price || 0) > cart_related.free_after_price) ||
                item?.free_delivery ? (
                  <div className="w-full flex pr-2 justify-end text-const_highlight gap-2">
                    <Truck /> Besplatna dostava
                  </div>
                ) : null}
              </div>
              <div
                className="w-fit flex absolute bg-transparent top-0 right-5 cursor-pointer justify-center border-none shadow-none items-center mx-auto  text-black "
                onClick={(e) => {
                  setLoading({ loading: "remove", slug: item?.slug || "" });
                  e.preventDefault();
                  e.stopPropagation();
                  removieItem(localStorage.getItem("store") || "", item, -1);
                }}
              >
                {" "}
                <span className="mt-2 font-light w-full">
                  {loading?.slug === item?.slug &&
                  loading?.loading === "remove" ? (
                    <Loader2
                      strokeWidth={1}
                      color="gray"
                      className="animate-spin"
                    />
                  ) : (
                    <X strokeWidth={1} color="gray" />
                  )}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="h-full animate-spin flex justify-center items-center w-full">
      <LoaderIcon />
    </div>
  );
}
