"use client";

import { fetchWeb } from "@/app/actions/fetchWeb";
import { cn } from "@/lib/utils";
import { zProduct, zProducts } from "@/schemas/zFrequent";
import {
  Disc3,
  Heart,
  Loader,
  Loader2,
  PlusCircle,
  PlusCircleIcon,
  PlusIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProductCard from "../frequent/ProductCard";
import SectionsAll from "./SectionsAll";
import { zSection } from "@/schemas/zHome";
import Link from "next/link";
import BenefitsShowCase from "./BenefitsShowCase";
import Newsletter from "./Newsletter";
import Footer from "../structure/Footer";

export default function FiniteScrollComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<zProducts>(null);
  const [last_action, setLast_action] = useState<string>("");
  const [sections, setSections] = useState<zSection[]>([]);
  const [ref, inView] = useInView();

  // *** fetch products when loader in view ***

  async function fetchProducts() {
    const data = await fetchWeb();
    setLast_action(data.last_action);
    setProducts(data.products);
    setSections(data.sections);
  }

  useEffect(() => {
    if (inView && !products) {
      fetchProducts();
    }
  }, [inView, products]);

  return (
    <>
      <div className=" flex justify-center overflow-x-hidden flex-col w-full  m-auto">
        <div
          ref={ref}
          className={cn(
            " m-auto h-52 text-3xl w-full flex justify-center pt-20",
            products ? "hidden" : ""
          )}
        >
          <Disc3 width={30} height={30} className="animate-spin" />
        </div>

        <div
          className={cn(
            "w-full grid  grid-cols-2 sm:grid-cols-3 max-w-screen-2xl mx-auto lg:grid-cols-4 pr-4 sm:px-[2rem]",
            !products ? "hidden" : ""
          )}
        >
          {products?.slice(0,12)?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full p-2 sm:p-5 flex justify-center flex-col pt-5"
              >
                <ProductCard item={item as zProduct} />
              </div>
            );
          })}
        </div>
        <Link
          href={"/sve-akcije/" + last_action}
          className="border mb-10 border-black rounded-[10vw] p-3 m-auto mt-10 px-5 text-sm"
        >
          POGLEDAJ SVE PROIZVODE
        </Link>
      </div>

      {products && children}

      <SectionsAll enabled={true} sections={sections}>
        <div className="w-full  left-0  flex justify-center flex-col items-center ">
          <BenefitsShowCase />

          <Newsletter />

        </div>
      </SectionsAll>
    </>
  );
}
