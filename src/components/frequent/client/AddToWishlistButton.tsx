"use client";

import useCart from "@/app/store/useCart";
import { cn } from "@/lib/utils";
import { zProduct } from "@/schemas/zFrequent";
import { Check } from "lucide-react";

import { toast } from "sonner";

export default function AddToWishlist({
  children,
  item,
  style,
  success,
}: {
  children?: React.ReactNode;
  item: zProduct;
  style: string;
  success?:React.ReactNode;
}) {
;
  const { addWish, wishlist} = useCart();
  return (
    <div
      className={cn("", style)}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        wishlist?.filter((i)=>i?.id === item?.id).length > 0 ? null : addWish(localStorage.getItem("wishlist") || "", item);
        !(wishlist?.filter((i)=>i?.id === item?.id).length > 0) ? toast( "Proizvod je dodat u listu želja!", {
          icon: (
            <div className="w-6 h-6 bg-green-500 rounded-full">
              <Check color="white" />
            </div>
          ),
        })
        :
        toast( "Proizvod je  već u listi želja", {
          
        })
      }}
    >
      {
        wishlist.filter((i) => i?.id === item?.id).length > 0 ? success?success:children : children
      }
    </div>
  );
}
