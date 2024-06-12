"use client";
import { zProduct } from "@/schemas/zFrequent";
import ProductCard from "../frequent/ProductCard";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

export default function ProductCarousel({
  products,
}: {
  products: zProduct[];
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const [touched, setTouched] = React.useState(false);

  const [viewport, setViewport] = React.useState(false);
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView && !viewport) {
      setViewport(true);
    }
  }, [inView, viewport]);

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
    <div ref={ref}>
      <>
        <div className="mt-7  text-center m-auto w-full sm:px-0 px-5 mr-10  bottom-0  flex justify-between text-sm text-muted-foreground">
          <p className="text-xl font-bold text-gray-700 mx-auto sm:mx-0">Izdvajamo iz ponude</p>
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
        <Carousel
          opts={{
            align: "start",
          }}
          setApi={setApi}
          className="sm:px-5 mt-5 bg-white rounded-xl"
        >
          <CarouselContent className=" pl-5 sm:pl-0">
            {products?.slice(0, 8)?.map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="basis-1/2 p-0  sm:basis-1/2 md:basis-1/3 lg:basis-1/5 2xl:basis-1/6 -mt-5"
                >
                  <div
                    key={index}
                    className="w-full p-0 flex justify-center flex-col pt-5"
                  >
                    <ProductCard item={item as zProduct} />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <div className="flex sm:hidden mt-5 justify-center items-center">
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
      </>
    </div>
  );
}
