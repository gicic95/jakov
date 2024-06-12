"use client";
import useCart from "@/app/store/useCart";
import { cart_related } from "../../../CONFIGURE_HERE";
import { Button } from "../ui/button";
import Link from "next/link";
import { emptyCart } from "@/app/actions/fequentActions";
import { toast } from "sonner";

export default function PricePreview() {
  const { total, count } = useCart();
  return (
    <div className="h-full w-full text-xl  text-zinc-500  p-5 justify-center">
      <p className="w-full flex justify-between">
        Porudžbina <span>{total} RSD</span>
      </p>

      {cart_related.post_rate &&
        (total < cart_related.free_after_price ||
          cart_related.free_after_price === 0) &&
        (count < cart_related.free_after_item_no ||
          cart_related.free_after_item_no === 0) && (
          <p className="w-full flex justify-between">
            Troškovi dostave <span>{cart_related.post_rate} RSD</span>
          </p>
        )}
      <br />
      <p className="flex font-bold justify-between">
        Ukupno{" "}
        <span className="text-const_secondary ">
          {(
            Number(total) +
            (cart_related.post_rate &&
            (total < cart_related.free_after_price ||
              cart_related.free_after_price === 0) &&
            (count < cart_related.free_after_item_no ||
              cart_related.free_after_item_no === 0)
              ? Number(cart_related.post_rate)
              : 0)
          ).toLocaleString("sr-RS", { style: "currency", currency: "RSD" })}
        </span>
      </p>

      <br />
      <p className="text-sm text-gray-400 font-light mb-2">* cena je sa obračunatim PDV-om</p>
      <hr />
      <br />


      <div className="w-full flex justify-center  flex-col sm:flex-row">
        <Button
          className="sm:w-1/3 px-2 bg-neutral-200 text-black "
          variant={"outline"}
          onClick={()=>{
            emptyCart(localStorage.getItem("store") || "", "cart");
            window.location.pathname = "/";
          }}
        >
          {" "}
          <span className="mb-[2px] mr-2">x</span>Isprazni korpu
        </Button>
        <Button
          className="sm:w-1/3 my-5 sm:my-0 mx-2 shadow-none bg-white text-black"
          
        >
          <Link href={"/"}>{"<"} Nastavi kupovinu</Link>
        </Button>
        <Button className="sm:w-1/3 px-2 bg-const_secondary">
          <Link href={"/zavrsi-kupovinu"}>Završi kupovinu {">"}{" "}</Link>
        </Button>
      </div>
    </div>
  );
}
