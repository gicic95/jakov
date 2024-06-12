import { zProduct } from "@/schemas/zFrequent";
import { Check, Heart, PlusIcon } from "lucide-react";
import Image from "next/image";
import AddToCart from "./client/AddToCartButton";
import AddToWishlist from "./client/AddToWishlistButton";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL + "/";

export default function ProductCardHorizontal({
  item,
  horizontal,
}: {
  item?: zProduct;
  horizontal?: boolean;
}) {
  return item ? (
    <div className="w-full flex h-full border relative border-gray-200 rounded-3xl m-2 sm:pt-2 py-2 sm:pb-0 ">
      <AddToWishlist
        item={item}
        success={
          <Heart className=" font-extralight rounded-[10vw] fill-const_secondary z-20 w-6 h-6  text-const_secondary border-gray-500 pointer-events-none" />
        }
        style={"rounded-full absolute right-5 cursor-pointer z-20 w-fit h-fit"}
      >
        <Heart className=" font-extralight rounded-[10vw] z-20 w-6 h-6  text-const_secondary border-gray-500 pointer-events-none" />
      </AddToWishlist>
      <Link
        href={
          "/" + item.main_category_slug + "/" + item.slug
        }
        className="flex w-full justify-between px-10 pt-5"
      >
        <div className="w-1/4 mx-auto relative mt-2 sm:mt-2">
          <Image
            src={item.main_image?.medium || "/assets/Logo.png"}
            fill
            className={cn(
              "object-contain",
              item.main_image?.medium ? "" : "brightness-0"
            )}
            alt={item.name}
          />
        </div>

        <div className="w-3/4">
          <div>
            <div className="pb-2  sm:pb-7 flex-col items-center  px-4">
              <p className="font-semibold text-sm leading-4 line-clamp-3 h-12 ">
                {item.name}
              </p>
              <p className="text-black mt-2">
                <span className="text-xs sm:text-sm font-semibold">
                  maloprodajna cena
                </span>{" "}
                <br />
                <span className="line-through text-sm sm:text-xl ">
                  {item.retail_price.toLocaleString("sr-RS")}
                </span>
                <sup>RSD</sup>
                <br />
                <span className="text-2xl sm:text-3xl mt-2 font-semibold">
                  {item.price.toLocaleString("sr-RS")} <sup>RSD</sup>
                </span>
                <br />
                <span className="text-xs sm:text-sm text-const_highlight">
                  Ušteda{" "}
                  <span className="font-semibold">
                    {(item.retail_price - item.price).toLocaleString("sr-RS")}
                  </span>{" "}
                  RSD
                </span>
              </p>
            </div>
            <div className="absolute top-3 left-3 rounded-full overflow-hidden w-10 sm:w-14 aspect-square ">
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
            <div className="absolute top-[10%] right-3  overflow-hidden w-8 sm:w-14 aspect-square ">
              <div className="w-full h-full relative">
                {item?.catalog_stickers?.[0]?.sticker && (
                  <Image
                    src={STORAGE_URL + item?.catalog_stickers?.[0].sticker}
                    alt="sticker"
                    layout="fill"
                    objectFit="contain"
                  />
                )}
              </div>
            </div>

            <div className="w-full h-[14%] sm:px-5 px-2  flex justify-center">
              <AddToCart
                success={
                  <div className="border  rounded-[10vw] flex justify-center items-center  p-1 z-20 w-full h-[50px] mx-auto border-gray-200  text-const_secondary bg-white text-[0.7rem] sm:text-sm pointer-events-none">
                    Dodato
                  </div>
                }
                style={
                  "rounded-full  cursor-pointer  w-full flex justify-center item-center h-full sm:h-[50px]"
                }
                item={item}
              >
                <div className="border  rounded-[10vw] flex justify-center items-center  p-1 z-20 w-full h-[50px] mx-auto  text-white bg-const_secondary text-[0.7rem] sm:text-sm pointer-events-none">
                  Dodaj u korpu
                </div>
              </AddToCart>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ) : null;
}
