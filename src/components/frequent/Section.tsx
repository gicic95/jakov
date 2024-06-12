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

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL + "/";

export default function Section({ section }: { section: zSection }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const [touched, setTouched] = React.useState(false);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length ); 
    setCurrent(api.selectedScrollSnap() +1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() +1);
      setTouched(true);
    });

    if (touched) return;
    api.on("pointerDown", () => {
      setTouched(true);
    });
  }, [api]);

  return (
    <div className="w-full mt-10  sm:mt-16">
      <div className=" text-center m-auto w-full  px-5 sm:px-0 mr-10  bottom-0  flex justify-between text-sm text-muted-foreground">
        <p className="text-xl text-center w-full text-gray-700 font-bold sm:w-fit sm:text-left">{section?.name}</p>
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
      <div className="w-full flex flex-col mt-5 sm:flex-row">
        <Carousel opts={{
            align: "start",
          }} setApi={setApi} className="w-full bg-white  rounded-xl relative my-0 h-full">
          <CarouselContent className="pl-2">
            {section?.products?.map((_, index) => (
              <CarouselItem
                key={index}
                className="p-1 sm:p-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="sm:p-1">
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
                  current == i  ? "bg-const_secondary " : ""
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