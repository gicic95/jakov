"use client";
import { zProduct } from "@/schemas/zFrequent";
import { Check, Heart, Loader2, PlusIcon, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import AddToCart from "./client/AddToCartButton";
import AddToWishlist from "./client/AddToWishlistButton";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import CartPreview from "../cart/CartPreview";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import useCart from "@/app/store/useCart";

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL + "/";

export default function ProductCard({
  item,
  horizontal,
}: {
  item?: zProduct;
  horizontal?: boolean;
}) {
  const [hover, setHover] = useState(false);
  const { total, total_delivery_price } = useCart();
  return item ? (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => setHover(false)}
      className="w-full h-full  relative bg-white rounded-3xl  sm:pt-2 py-2 sm:pb-0 "
    >
      {/* <AddToWishlist
            item={item}
            success={
              <Heart  className=" font-extralight rounded-[10vw] fill-const_secondary z-20 w-6 h-6  text-const_secondary border-gray-500 pointer-events-none" />
            }
            style={
              "rounded-full absolute right-5 cursor-pointer z-20 w-fit h-fit"
            }
            
          >
            <Heart className=" font-extralight rounded-[10vw] z-20 w-6 h-6  text-const_secondary border-gray-500 pointer-events-none" />
          </AddToWishlist> */}
      <Link
        href={
          "/" +
          (item.main_category_slug || item?.mainCategory?.[0]?.slug) +
          "/" +
          item.slug
        }
      >
        <div className="w-full px-4">
          <div className="w-full overflow-hidden rounded-xl relative border mx-auto aspect-square  mt-2 sm:mt-3">
            <Image
              src={item.main_image?.medium || "/assets/mini_logo.png"}
              fill
              className={cn(
                "object-contain p-1",
                item.main_image?.medium ? "" : "p-[35%]"
              )}
              alt={item.name}
            />
            <div className="absolute top-3 left-3  overflow-hidden w-10 sm:w-14 aspect-square ">
              <div className="w-full h-full relative">
                {item?.discount && (
                  <Image
                    src={
                      item?.discount?.sticker
                        ? STORAGE_URL + item?.discount?.sticker
                        : "/assets/akcija.webp"
                    }
                    alt="sticker"
                    layout="fill"
                    objectFit="contain"
                  />
                )}
              </div>
            </div>
            {item?.catalog_stickers?.map((sticker, index) => {
              return (
                <>
                  <div
                    className={cn(
                      `absolute right-3  overflow-hidden w-[22%] aspect-square `
                    )}
                    style={{ top: (index + 0.2) * 23 + "%" }}
                  >
                    <div className="w-full h-full relative">
                      <Image
                        key={sticker.id}
                        src={STORAGE_URL + sticker.sticker}
                        alt="sticker"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Link>
      <div className="pb-5  sm:pb-7 h-[200px] flex flex-col justify-between  px-4">
        <Link
          href={
            "/" +
            (item.main_category_slug || item?.mainCategory?.[0]?.slug) +
            "/" +
            item.slug
          }
        >
          <p className="font-light tracking-wider  mt-3 text-sm leading-4 line-clamp-1 text-wrap opacity-50 ">
            {item?.mainCategory?.[0]?.name || item?.main_category?.[0]?.name}
          </p>
          <p className="font-semibold text-sm leading-4 line-clamp-2 mt-1 text-wrap  ">
            {item.name}
          </p>
        </Link>

        <div className="flex my-2 sm:mt-0 flex-col sm:flex-row ">
          <Link
            href={
              "/" +
              (item.main_category_slug || item?.mainCategory?.[0]?.slug) +
              "/" +
              item.slug
            }
            className="text-black w-full sm:w-3/4  flex flex-col"
          >
            {item?.retail_price !== item?.price ? (
              <span className="line-through text-base">
                {item.retail_price.toLocaleString("sr-RS")} RSD
              </span>
            ) : <span className="mt-5"></span>}
            <span className="text-xl lg:text-2xl -mt-2 text-nowrap  font-semibold">
              {item.price.toLocaleString("sr-RS")} RSD
            </span>
            {item?.retail_price !== item?.price ? (
              <span className="text-xs  text-nowrap sm:text-sm text-red-500">
                Ušteda{" "}
                <span className="font-semibold">
                  {(item.retail_price - item.price).toLocaleString("sr-RS")}
                </span>{" "}
                RSD
              </span>
            ) : null}
          </Link>
          <div className="hidden  w-1/4  h-full mx-auto sm:block">
            
                <AddToCart
                  success={
                    <div className="rounded-full flex justify-center items-center sm:border border-white  z-20 w-full h-[52px] mx-auto sm:text-muted-foreground sm:bg-white text-[0.7rem] sm:text-sm pointer-events-none">
                      <Check className="w-6 h-6" />
                    </div>
                  }
                  style={
                    "rounded-xl w-full sm:rounded-full   cursor-pointer  flex justify-center item-center mt-2 sm:h-[50px]"
                  }
                  waiting={
                    <div className="rounded-full flex justify-center items-center sm:border border-white  z-20 w-full h-[52px] mx-auto sm:text-muted-foreground sm:bg-white text-[0.7rem] sm:text-sm pointer-events-none">
                      <Loader2 className="w-6 h-6 animate-spin" />
                    </div>
                  }
                  item={item}
                >
                  <div
                    className={cn(
                      "p-2 rounded-full w-full sm:w-12 h-12    ",
                      hover ? "bg-const_secondary" : "bg-[#EBEBEB]"
                    )}
                  >
                    <ShoppingBagIcon
                      className="w-full   h-full  "
                      color="white"
                    />
                  </div>
                </AddToCart>
          </div>
          <div className="sm:hidden">
            <AddToCart
              success={
                <div className="rounded-full flex justify-center items-center sm:border border-white  z-20 w-full h-[52px] mx-auto sm:text-muted-foreground sm:bg-white text-[0.7rem] sm:text-sm pointer-events-none">
                  <Check className="w-6 h-6" />
                </div>
              }
              waiting={
                <div className="rounded-full flex justify-center items-center sm:border border-white  z-20 w-full h-[52px] mx-auto sm:text-muted-foreground sm:bg-white text-[0.7rem] sm:text-sm pointer-events-none">
                  <Loader2 className="w-6 h-6 animate-spin" />
                </div>
              }
              style={
                "rounded-xl w-full sm:rounded-full   cursor-pointer  flex justify-center item-center mt-2 sm:h-[50px]"
              }
              item={item}
            >
              <div
                className={cn(
                  "p-2 rounded-full w-full sm:w-12 h-12    ",
                  hover ? "bg-const_secondary" : "bg-[#EBEBEB]"
                )}
              >
                <ShoppingBagIcon className="w-full   h-full  " color="white" />
              </div>
            </AddToCart>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
