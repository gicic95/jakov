"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { zAction, zBannerHorizontal } from "@/schemas/zFrequent";
import { zHeroBanner } from "@/schemas/zHome";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

export default function HeroBanner({
  data,
  first,
  left_banner,
}: {
  data: zHeroBanner;
  first: zBannerHorizontal;
  left_banner: zBannerHorizontal;
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
    <>
      <div className="w-full sm:mt-5 mx-auto  sm:px-0 max-w-screen-2xl flex flex-col-reverse sm:flex-row items-center justify-center">
        <div className="w-full sm:w-1/3 my-5 sm:my-0 aspect-square">
          <div className="w-full h-full  rounded-xl overflow-hidden relative">
            <Link href={left_banner?.link || ""}>
              <Image
                alt="left hero banner"
                src={
                  (STORAGE_URL &&
                    left_banner?.mobile_image &&
                    STORAGE_URL + left_banner?.desktop_image) ||
                  ""
                }
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-2/3 sm:ml-5 relative rounded-xl overflow-hidden z-10">
          <Carousel
            // plugins={[
            //   Autoplay({
            //     delay: 3000,
            //   }),
            // ]}
            setApi={setApi}
            className="w-full relative"
          >
            <CarouselContent className="aspect-square sm:aspect-auto w-full ml-0 ">
              <CarouselItem
                key={0}
                className={cn(
                  "w-full p-0  p-l-0 h-initial aspect-square sm:aspect-auto ",
                  !first?.mobile_image ? "hidden sm:flex  " : ""
                )}
                style={{ height: "initial" }}
              >
                <Link
                  href={first?.link || "#"}
                  className="aspect-square sm:aspect-auto"
                >
                  <div className="relative w-full  ">
                    <Image
                      alt="Hero Banner"
                      src={first?.desktop_image || ""}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      objectFit="cover"
                      priority
                      className="hidden sm:flex z-10"
                    />
                    <Image
                      alt="Hero Banner"
                      src={first?.mobile_image || first?.desktop_image || ""}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      objectFit="cover"
                      priority
                      className="sm:hidden rounded-xl"
                    />
                  </div>
                </Link>
              </CarouselItem>
              {data?.map((item, index) => {
                return (
                  item.mobile_image && (
                    <CarouselItem
                      key={index}
                      className={cn(
                        "w-full p-0 h-full p-l-0 rounded-xl overflow-hidden",
                        !item.mobile_image ? "hidden sm:flex" : ""
                      )}
                    >
                      {touched && (
                        <Link href={item.link || ""}>
                          <div className="relative w-full h-full ">
                            <Image
                              alt="Hero Banner"
                              src={item.desktop_image}
                              fill
                              priority
                              className="  object-cover "
                            />
                            <Image
                              alt="Hero Banner"
                              src={item.mobile_image || item.desktop_image}
                              fill
                              priority
                              className=" sm:hidden object-contain rounded-xl overflow-hidden "
                            />
                          </div>
                        </Link>
                      )}
                    </CarouselItem>
                  )
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="absolute top-[48%] left-5 my-auto" />
            <CarouselNext className="absolute top-[50%] right-5 my-auto" />
          </Carousel>
          <div className="py-2 sm:hidden  text-center m-auto  left-0 text-sm text-muted-foreground">
            {Array.from({ length: count }, (_, i) => (
              <button
                key={i}
                aria-label="scroll to next slide"
                className={cn(
                  "rounded-full bg-gray-200 w-[12px] mx-1 aspect-square ",
                  current == i + 1 ? "bg-const_secondary " : ""
                )}
                onClick={() => api?.scrollTo(i)}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-2 hidden sm:block ml-[35%] text-center m-auto  left-0 text-sm text-muted-foreground">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            aria-label="scroll to next slide"
            className={cn(
              "rounded-full bg-gray-200 w-4 mx-1 aspect-square ",
              current == i + 1 ? "bg-const_secondary " : ""
            )}
            onClick={() => api?.scrollTo(i)}
          ></button>
        ))}
      </div>
    </>
  );
}
