"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { zMenuCategories } from "@/schemas/zFrequent";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileSheetCategories({categories}: {categories: zMenuCategories}) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet  open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu className="w-10 h-10" strokeWidth={2} />
      </SheetTrigger>
      <SheetContent className="px-2">
        <SheetHeader>
          <SheetTitle>FILTERI</SheetTitle>
          
        </SheetHeader>
        <div className="flex overflow-y-scroll h-[90vh] wfu pl-5 pb-10 flex-col text-left gap-5">
            {categories?.map?.((category, index) => {
              return (
                
                  <Link 
                    key={index}
                    onClick={() => {setOpen(false)}}
                    href={"/" + category.slug}
                    className="sm:mx-4 flex gap-2 items-center  font-semibold  text-black text-left  "
                  >
                    <div className="h-7 aspect-square  relative">
                      <Image src={category?.image || "/assets/mini_logo.png"} alt={category.name} fill />
                    </div>

                    {category.name}
                  </Link>
              );
            })}
          </div>
      </SheetContent>
    </Sheet>
  );
}
