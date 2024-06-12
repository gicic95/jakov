"use client";

import useCart from "@/app/store/useCart";
import { cn } from "@/lib/utils";
import { zProduct } from "@/schemas/zFrequent";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import CartSheet from "./CartSheet";

export default function AddToCart({
  children,
  item,
  style,
  success,
  waiting,
}: {
  children?: React.ReactNode;
  item: zProduct;
  style: string;
  success?: React.ReactNode;
  waiting?: React.ReactNode;
}) {
  const { addItem, items, cart_open_toggle } = useCart();
  const [loading, setLoading] = useState(false);
  const [dodat, setDodat] = useState(
    items.filter((i) => i?.id === item?.id).length > 0
  );

  useEffect(() => {
    setDodat(items.filter((i) => i?.id === item?.id).length > 0);
  }, [items]);

  async function add() {
    setLoading(true);
    await addItem(localStorage.getItem("store") || "", item, 1).then(() => {
      setLoading(false);
      setDodat(true);
      toast("Proizvod je dodat u korpu!", {
        icon: (
          <div className="w-6 h-6 bg-green-500 rounded-full">
            <Check color="white" />
          </div>
        ),
        position: "bottom-left",
      });
      cart_open_toggle(true);
    });
  }

  return (
      <div
        className={cn(
          "h flex justify-center items-center aspect-square w-[50px] h-[50px] rounded-full",
          style
        )}
        onClick={(e) => {
          add();
        }}
      >
        {loading ? waiting : dodat ? (success ? success : children) : children}
      </div>
  );
}
