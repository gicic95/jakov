"use client";
import { emptyCart, wishlistToCart } from "@/app/actions/fequentActions";
import useCart from "@/app/store/useCart";
import PricePreview from "@/components/cart/PricePreview";
import WishlistPreview from "@/components/cart/WishlistPreview";
import Breadcrumb from "@/components/frequent/BreadCrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";

export default function CartPage() {
  const { removeWish, wishlist, wishlist_total } = useCart();

  useEffect(() => {
    if (!wishlist.length) {
      window.location.pathname = "/";
    }
  });

  return (
    <div className="pl-5">
      <div className="max-w-screen-2xl mx-auto pt-10">
        <Breadcrumb
          list={[
            { link: "/", name: "Početna strana" },
            { link: "#", name: "Lista želja" },
          ]}
        />
        <h1 className=" font-medium text-3xl my-10 ">LISTA ŽELJA</h1>
      </div>
      <div className="max-w-screen-2xl mb-10 mx-auto flex flex-col sm:flex-row pr-5">
        <br />

        <div className="h-[75%]   sm:h-[60vh] mr-10 w-full sm:w-3/5 mb-10  overflow-hidden ">
          <WishlistPreview />
        </div>
        <div className=" h-fit w-full sm:w-2/5 mb-20 border shadow-lg rounded-lg">
          <div className="h-full w-full text-xl  text-zinc-500  p-5 justify-center">
            <p className="w-full flex justify-between">
              Ukupno{" "}
              <span>
                {" "}
                {wishlist.reduce(
                  (total, item) => total + (item?.price || 0),
                  0
                )}{" "}
                RSD
              </span>
            </p>

            <br />
            <hr />
            <br />

            <div className="w-full flex justify-center  flex-col sm:flex-row">
              <Button
                className="sm:w-1/3 px-2 bg-white text-black border-black"
                variant={"outline"}
                onClick={() => {
                  removeWish(
                    localStorage.getItem("wishlist") || "",
                    wishlist[0]
                  );
                  emptyCart(localStorage.getItem("wishlist") || "", "wishlist");
                  toast("Uspešno ste ispraznili listu želja");
                }}
              >
                {" "}
                Isprazni listu želja
              </Button>
              <Button
                className="sm:w-1/3 my-5 sm:my-0 mx-2 bg-white text-black"
                variant={"outline"}
              >
                <Link href={"/"}>{"<-"} Nastavi kupovinu</Link>
              </Button>
              <Button
                className="sm:w-1/3 px-2 bg-const_secondary"
                onClick={(e) => {
                  e.preventDefault();
                  wishlistToCart(
                    localStorage.getItem("store") || "",
                    localStorage.getItem("wishlist") || ""
                  );
                  window.location.pathname = "/korpa";
                }}
              >
                Prebaci sve u korpu {"->"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
