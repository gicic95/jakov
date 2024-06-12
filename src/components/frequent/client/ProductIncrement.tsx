"use client"
import useCart from "@/app/store/useCart";
import { Button } from "@/components/ui/button";
import { zProduct } from "@/schemas/zFrequent";
import { Check, CircleDotIcon, DiscIcon, Heart, LoaderIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import AddToWishlist from "./AddToWishlistButton";
export default function ProductIncrement({ product }: { product: zProduct }) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const { addItem, addWish } = useCart();
  async function add() {
    setLoading(true);
    await addItem(localStorage.getItem("store") || "", product, quantity);
    toast("Proizvod je dodat u korpu!", {
      icon: (
        <div className="w-6 h-6 bg-green-500 rounded-full">
          <Check color="white" />
        </div>
      ),
    });
    setLoading(false);
  }
  return (
    <div className="h-fit flex gap-2">
      <div className="w-1/2 flex  flex-col">
        <div className="w-full h-10  flex justify-center  items-center  ">
        <AddToWishlist
          item={product}
          success={
            <div className="h-full w-full bg-white rounded-full cursor-pointer flex shadow-md justify-center items-center"><Heart fill="black" /></div>
          }
          style={
            "w-full h-full"
          }
        >
        <div className="h-full w-full bg-white rounded-full cursor-pointer flex shadow-md justify-center items-center"><Heart /></div>
        </AddToWishlist>
        </div>
        <div className="w-full mt-5 h-10  flex justify-center  items-center  ">
          <div onClick={()=>add()} className="h-full w-full  text-sm 2xl:text-base bg-const_highlight text-white rounded-full shadow-md cursor-pointer flex gap-2 justify-center items-center"><ShoppingCart /> <span className="sm:hidden xl:block">Dodaj u korpu</span></div>
        </div>
      </div>
      <div className="w-1/2 h-fit">
        <div>
          <div className="flex  h-10 ">
            <p className="w-1/3 text-xs flex justify-center items-center">Izaberi <br /> količinu</p>
            <div className="w-2/3 grid grid-cols-3 border bg-white rounded-full">
            <div
              className="h-full flex justify-center items-center cursor-pointer text-xl rounded-l-xl aspect "
              onClick={() => {
                if (quantity < 2) return;
                setQuantity(quantity - 1);
              }}
            >
              -
            </div>
            <div className="h-full aspect- ">
              <input
                type="number"
                className="w-full h-full text-center flex justify-center items-center text-xl"
                value={quantity}
                onChange={(e) => {
                  setQuantity(parseInt(e.target.value));
                }}
              />
            </div>
            <div
              className="h-full flex justify-center items-center cursor-pointer text-xl rounded-r-xl aspect- "
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </div>
            </div>
          </div>
          <div className="mt-5">
            <Link href={"/zavrsi-kupovinu"}>
              <Button
                onClick={() => add()}
                className=" rounded-full  w-full   bg-const_secondary h-10 font-bold tracking-wider"
              >
                {!loading ? (
                  <div className="w-full uppercase text-lg gap-2 sm:text-sm md:text-base xl:text-lg font-medium h-full flex justify-center items-center">
                    Kupi <span className="sm:hidden xl:block"> {" "}odmah</span>
                  </div>
                ) : (
                  <div className="animate-spin">
                    <LoaderIcon />
                  </div>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}