"use client";

import { useEffect, useRef, useState } from "react";
import useCart from "./useCart";
import {
  getCartID,
  getUserCart,
  getUserWishllist,
} from "../actions/fequentActions";
import { useSession } from "next-auth/react";
import { init } from "next/dist/compiled/webpack/webpack";
import { zProduct } from "@/schemas/zFrequent";

export default function StoreInitializer() {
  const initialized = useRef(true);

  const { wishes, total, count } = useCart();

  const { status } = useSession();

  
  useEffect(()=>{
    if (status === "unauthenticated" ) {
      if ((localStorage?.getItem("store")?.toString()?.length || 0) < 5) {
        localStorage.setItem("store", btoa(Math.random().toString()));
        localStorage.setItem("wishlist", btoa(Math.random().toString()));
      }
      initialized.current = false;
    } else if (status == "authenticated" ) {
      getCartID().then((data) => {
        localStorage.setItem("store", data?.toString());
        localStorage.setItem("wishlist", data?.toString());
        initialized.current = false;
      });
    }
  }, [status])

  useEffect(() => {
    initialized.current = false;
  }, [total, wishes, count, status]);

  
  useEffect(() => {
    if (
      !initialized.current &&
      typeof window !== "undefined"
    ) {
      const store = localStorage.getItem("store");
      const wishlist = localStorage.getItem("wishlist");
      if (store) {
        getUserCart(store).then((data) => {
          //console.log(data, "data")
          let count = 0;
          data?.items?.map((item: { quantity: number }) => {
            count += Number(item?.quantity) || 0;
          });
          useCart.setState({
            items: data?.items?.map(
              (item: { product: zProduct; quantity: number }) => {
                return {
                  ...item.product,
                  quantity: item.quantity,
                };
              },
              [] as Array<zProduct>
            ),
            total: data?.total,
            count: count,
            total_delivery_price: data?.total_delivery_price,
          });
        });
      }
      if (wishlist) {
        getUserWishllist(wishlist).then((data) => {
          let count = 0;
          data?.items?.map((item: { quantity: number }) => {
            count += Number(item?.quantity) || 0;
          });
          useCart.setState({
            wishlist: data?.items?.map(
              (item: { product: zProduct }) => {
                return {
                  ...item.product,
                };
              },
              [] as Array<zProduct>
            ),
            wishes: count,
            wishlist_total:data?.total
          });
        });
      }

      initialized.current = true;
    }
  
  }, [initialized.current, count, wishes, total, status]);

  // useEffect(()=>{
  //   initialized.current = false;
  // },[])

  return <></>;
}
