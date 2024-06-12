"use client";

import useCart from "@/app/store/useCart";
import { cn } from "@/lib/utils";
import { zProduct } from "@/schemas/zFrequent";
import { Check } from "lucide-react";
import { toast } from "sonner";

export default function RemoveFromCart({
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
  const { removieItem, items } = useCart();
  return (
    <div
      className={cn("", style)}
      onClick={(e) => {
        e.preventDefault();
        removieItem(localStorage.getItem("store") || "", item, item?.quantity || 1);
        toast("Proizvod je dodat u korpu!" , {
          icon: (
            <div className="w-6 h-6 bg-green-500 rounded-full">
              <Check color="white" />
            </div>
          ),
        });
      }}
    >
      {
        items && 
        items.filter((i) => i?.id === item?.id).length > 0 ? success?success:children : children
      }
    </div>
  );
}
