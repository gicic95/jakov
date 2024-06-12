"use client";
import Link from "next/link";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL + "/";

export default function BrandsShowCase({
  brands,
}: {
  brands: { name: string; image: string; slug?: string }[];
}) {
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
    <div className="w-full  sm:px-0  mt-10 mb-20 sm:mb-0">
      <div className="  text-center m-auto w-full sm:px-0 px-5 mr-10  bottom-0  flex justify-between text-sm text-muted-foreground">
        <p className="text-xl text-gray-700 text-center sm:text-left mx-auto sm:mx-0 font-bold">Izdvojeni brendovi</p>
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
      <Carousel setApi={setApi} className="sm:px-2 mt-10   sm:mb-20">
        <CarouselContent className="pr-5  pl-4">
          {brands?.map((item, index) => {
            return (
              <CarouselItem
                key={index}
                className=" basis-[30%] p-1 lg:basis-[15%] h-fit xl:basis-[12%] 2xl:basis-[12%]  "
              >
                <Link
                  href={"brend/" + item.slug}
                  key={item.slug}
                  className=" w-full p-0 relative"
                >
                  <div className="w-full h-fit p-5 bg-gray-100 rounded-full relative">
                    <div className="w-full  aspect-square relative">
                      <Image
                        alt={item.name}
                        src={
                          item.image
                            ? STORAGE_URL + item.image
                            : "/assets/Logo.webp"
                        }
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
