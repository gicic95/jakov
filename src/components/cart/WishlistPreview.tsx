"use client";
import useCart from "@/app/store/useCart";
import { cn } from "@/lib/utils";
import { zProduct } from "@/schemas/zFrequent";
import { LoaderIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { transferToCart } from "@/app/actions/fequentActions";

export default function WishlistPreview() {
  const { addItem, removeWish, wishlist } = useCart();

  return wishlist?.length ? (
    <div className={"overflow-y-scroll no-scrollbar h-full sm:pr-5"}>
      {wishlist?.map((item, index) => {
        return (
          <Link
            href={`/${item?.mainCategory?.[0]?.slug || item?.main_category?.[0]?.slug}/${item?.slug}`}
            key={index}
            className="rounded-2xl  border  mb-5 flex shadow-lg flex-col sm:flex-row pb-5 sm:pb-0 px-5 w-full items-center h-fit "
          >
            <div className="flex w-full justify-center items-center">
              <div className="relative w-1/6 aspect-square">
                <Image
                  src={item?.main_image?.tiny || item?.images?.[0]?.tiny || ""}
                  alt={item?.name || ""}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="w-1/3 ml-1 line-clamp-2">{item?.name} </p>
              <div className="sm:w-2/6 w-1/2 mr-2 h-full flex justify-center items-center">
                <div className="w-full h-full flex justify-center items-center p-5">
                  <Button className="bg-const_secondary" onClick={(e)=>{
                    e.preventDefault();
                    transferToCart(localStorage.getItem("store") || "", item?.id || 0, localStorage.getItem("wishlist") || "");
                    removeWish(localStorage.getItem("wishlist") || "", item);
                  }}>Prebaci u korpu {`->`}</Button>
                </div>
              </div>
            </div>
            <p className="sm:w-1/6 text-const_secondary text-lg font-medium">
              {item?.price?.toLocaleString("en-US").replaceAll(",", ".")} RSD
            </p>
          </Link>
        );
      })}
    </div>
  ) : (
    <div className="h-full animate-spin flex justify-center items-center w-full">
      <LoaderIcon />
    </div>
  );
}
