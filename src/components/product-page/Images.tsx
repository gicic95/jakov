"use client";
import { zProduct } from "@/schemas/zFrequent";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import MagnifyImage from "./magnified_images/MagnifyImage";
import CallCentarPodrska from "./details/CallCenterPodrska";
import { Rotate3D } from "lucide-react";

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

export default function ImagePreview({
  product,
  mainImageIndex,
}: {
  product: zProduct;
  mainImageIndex?: number;
}) {
  const [preview, setPreview] = useState(
    product?.threed_image ? -2 : mainImageIndex
  );
  const [magnify, setMagnify] = useState(-1);

  return (
    <>
      <div className="w-full  flex flex-col-reverse sm:flex-row aspect-[1.25] ">
        <Carousel
          orientation="vertical"
          className={cn(
            "h-full  hidden sm:block w-1/4",
            product?.images?.length &&
              product?.images?.length > 3 &&
              "border-b border-black"
          )}
        >
          <CarouselContent className="pt-3 max-h-full ">
            {product?.threed_image ? (
              <CarouselItem
                className="p-2 cursor-pointer basis-1/3 w-full aspect-square relative"
                onClick={() => setPreview(-2)}
              >
                <div className="w-full bg-white border rounded-xl flex flex-col items-center justify-center aspect-square relative">
                  <Rotate3D className="w-[40%]  mx-auto h-[30%]"/>
                  3D prikaz
                </div>
              </CarouselItem>
            ) : null}
            {product?.images?.map((item, index) => {
              return (
                <CarouselItem
                  className="p-2 cursor-pointer basis-1/3 w-full aspect-square relative"
                  key={index}
                  onClick={() => setPreview(index)}
                >
                  <div className="w-full bg-white rounded-xl  aspect-square relative">
                    <Image
                      src={product?.images[index]?.large || ""}
                      alt="main_image"
                      fill
                      className="object-contain border rounded-xl"
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <Carousel className=" sm:hidden  w-full">
          <CarouselContent className="pl-5 max-h-full ">
          {product?.threed_image ? (
              <CarouselItem
              className="p-2 cursor-pointer basis-[30%] w-full aspect-square relative"
                onClick={() => setPreview(-2)}
              >
                <div className="w-full bg-white rounded-xl border flex flex-col items-center justify-center aspect-square relative">
                  <Rotate3D className="w-[40%]  mx-auto h-[30%]"/>
                  3D prikaz
                </div>
              </CarouselItem>
            ) : null}
            {product?.images?.map((item, index) => {
              return (
                <CarouselItem
                  className="p-2 cursor-pointer basis-[30%] w-full aspect-square relative"
                  key={index}
                  onClick={() => setPreview(index)}
                >
                  <div className="w-full rounded-xl bg-white  aspect-square relative">
                    <Image
                      src={product?.images[index]?.large || ""}
                      alt="main_image"
                      fill
                      className="object-contain border rounded-xl"
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <div
          onClick={() => setMagnify(preview || 0)}
          className="w-full sm:w-3/4 aspect-[1.25] cursor-pointer sm:aspect-square relative px-2"
        >
          <div className="absolute z-10 top-3 right-3">
            <MagnifyingGlassIcon width={30} height={30} />
          </div>
          <div className="relative bg-white rounded-xl w-full h-full">
            {preview === -2 ? 
            <iframe src={product?.threed_image} className="w-full h-full"></iframe> : (
              <Image
                src={product?.images[preview || 0]?.large || ""}
                alt="main_image"
                fill
                className="object-contain border rounded-xl"
              />
            )}
            <div className="absolute top-3 left-3  overflow-hidden w-[16%] aspect-square ">
              <div className="w-full h-full relative">
                {product?.discount?.sticker && (
                  <Image
                    src={STORAGE_URL + product?.discount?.sticker}
                    alt="sticker"
                    layout="fill"
                    objectFit="contain"
                  />
                )}
              </div>
            </div>
            {product?.catalog_stickers?.map((sticker, index) => {
              return (
                <>
                  <div
                    className={cn(
                      `absolute right-3  overflow-hidden w-[18%]  aspect-square `
                    )}
                    style={{ top: (index + 0.3) * 24 + "%" }}
                  >
                    <div className="w-full h-full relative">
                      <Image
                        key={sticker.id}
                        src={STORAGE_URL + sticker.sticker}
                        alt="sticker"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <MagnifyImage
          product={product}
          setMagnify={setMagnify}
          current={magnify}
        />
      </div>
      <div className="px-3 sm:p-5 2xl:pl-0 2xl:pr-2">
        <CallCentarPodrska />
      </div>
    </>
  );
}
