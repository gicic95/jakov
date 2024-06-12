import { zSection } from "@/schemas/zHome";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { zAction, zProduct } from "@/schemas/zFrequent";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL + "/";

export default function Action({ section }: { section: zAction }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const [touched, setTouched] = React.useState(false);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setTouched(true);
    });

    if (touched) return;
    api.on("pointerDown", () => {
      setTouched(true);
    });
  }, [api]);

  return (
    <div className="w-full mt-10  sm:mt-16">
      <div className=" text-center m-auto w-full   bottom-0  flex justify-between text-sm text-muted-foreground">
        <p className=" text-xl  w-full sm:w-fit sm:text-left text-gray-700 font-bold">{section?.name}</p>
        <div className="sm:flex justify-center hidden  items-center">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              aria-label="scroll to next slide"
              className={cn(
                "rounded-full border bg-zinc-200 w-[12px] h-[12px] mx-1 aspect-square ",
                current == i + 1 ? "bg-const_secondary " : ""
              )}
              onClick={() => api?.scrollTo(i)}
            ></button>
          ))}
        </div>
      </div>
      <div className="w-full sm:mt-5 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 px-5 sm:px-0 aspect-square relative  flex justify-center items-center">
                <Link href={"/sve-akcije/"+section?.slug} className="relative w-full aspect-square  my-auto overflow-hidden rounded-2xl">
                <Image src={STORAGE_URL + section?.desktop_image || ""} alt="Hero Banner" sizes="100vw" fill className="object-cover " />
                </Link>
        </div>
        <Carousel  opts={{
            align: "start",
          }} setApi={setApi} className="w-full rounded-r-xl  bg-white sm:w-2/3  relative my-auto px-5 sm:pl-5 h-full">
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="p-0  basis-1/2 sm:basis-[58%] md:basis-[38%] xl:basis-[33%] 2xl:basis-[26%]"
              >
                <div className="">
                  <ProductCard item={section?.products[index] as zProduct} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex sm:hidden mb-10 justify-center items-center">
            {Array.from({ length: count }, (_, i) => (
              <button
                key={i}
                aria-label="scroll to next slide"
                className={cn(
                  "rounded-full border bg-zinc-200 w-[12px] h-[12px] mx-1 aspect-square ",
                  current == i + 1 ? "bg-const_secondary " : ""
                )}
                onClick={() => api?.scrollTo(i)}
              ></button>
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
}