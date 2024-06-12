"use client";
import { cn } from "@/lib/utils";
import { zCategory } from "@/schemas/zFrequent";
import { zProductCategoriesShowCase } from "@/schemas/zHome";
import Image from "next/image";
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

export default function CategoryShowCase({
  categories,
}: {
  categories: {
    image: string;
    id: number;
    name: string;
    slug: string;
    data: zCategory[];
    order: number;
  }[];
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
    categories && (
      <>
        <p className="text-xl text-center w-full sm:w-fit text-gray-700 font-bold sm:text-left  mt-10 ">
          Popularne kategorije
        </p>
        <br />
        <div className="w-full hidden sm:grid  gap-10 mt-5  grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6  justify-center flex-col items-center    ">

            {categories.map((item) => {
              return (
                <Link
                  href={"/" + item.slug}
                  key={item.id}
                  className="aspect-square   relative"
                >
                  <div className="w-full h-full relative">
                    <Image
                      alt={item.name}
                      src={item.image}
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
              );
            })}
        </div>
        <Carousel setApi={setApi} className="sm:px-5 sm:hidden  ">
          <CarouselContent className="px-2 pl-5">
            {categories?.map((item, index) => {
              return (
                <CarouselItem key={index} className="basis-2/5 p-1 aspect-square">
                  <Link
                    href={"/" + item.slug}
                    key={item.id}
                    className="aspect-square w-full  relative"
                  >
                    <div className="w-full h-full relative">
                      <Image
                        alt={item.name}
                        src={item.image}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </>
    )
  );
}
