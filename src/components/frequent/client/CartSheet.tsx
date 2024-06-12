"use client";
import useCart from "@/app/store/useCart";
import CartPreview from "@/components/cart/CartPreview";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CartSheet({
  children,
  style,
  open,
}: {
  children?: React.ReactNode;
  style?: string;
  open?: boolean;
}) {
  const router = useRouter();
  const { cart_open, total, total_delivery_price, cart_open_toggle } =
    useCart();
  return (
    <Sheet
      onOpenChange={() => {
        cart_open_toggle(false);
      }}
      open={cart_open}
    >
      <SheetContent className="px-5 hidden sm:block ">
        <SheetTitle>Moja korpa</SheetTitle>
        <div className="h-[90vh] flex flex-grow flex-col">
          <ScrollArea className="w-full flex-grow h-full  overflow-y-scroll">
            <div className="h-fit">
              <CartPreview />
            </div>
          </ScrollArea>
          <div className="h-[300px] 2xl:h-[280px] pt-5 px-3 ">
            <div className="bg-white rounded-l-xl">
              <table className="w-full bg-white  ">
                <p className="  text-sm items-center  flex justify-between">
                  Iznos porudžbine
                  <span className="font-semibold text-lg">
                    {Number(total)?.toLocaleString("en-US").replaceAll(',','.')} RSD
                  </span>
                </p>
                <p className="  text-nowrap pb-2  text-sm items-center flex justify-between">
                  Ukupan trošak dostave
                  {total_delivery_price > 0 ? (
                    <span className="font-semibold">
                      {total_delivery_price?.toLocaleString("en-US").replaceAll(',','.')} RSD
                    </span>
                  ) : (
                    <span className="w-full flex pr-2 font-bold justify-end text-const_highlight gap-2">
                      Besplatna dostava
                    </span>
                  )}
                </p>
                <hr className="border-neutral-400" />
                <table className="w-full ">
                  <p className="mt-2 text-lg flex justify-between">
                    Ukupno za plaćanje
                    <span className="font-semibold flex justify-end flex-col items-end text-2xl">
                      {Number(
                        Number(total) + Number(total_delivery_price)
                      )?.toLocaleString("en-US").replaceAll(',','.')}{" "}
                      RSD
                      <br />
                      <span className="text-xs opacity-50 ">
                        PDV uračunat u cenu
                      </span>
                    </span>
                  </p>
                </table>
                <div className="w-full my-auto mt-2  h-16 grid grid-cols-2">
                  <SheetClose className="w-full  ">
                    Nazad u prodavnicu
                  </SheetClose>
                  <SheetClose
                    onClick={() => {
                      router.push("/korpa");
                    }}
                    className="w-full text-xl bg-const_secondary text-white rounded-md"
                  >
                    Naruči
                  </SheetClose>
                </div>
              </table>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
