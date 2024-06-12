"use client";
import { zNews } from "@/schemas/zFrequent";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { stateToHTML } from "draft-js-export-html";
import { convertFromRaw } from "draft-js";
import { Button } from "../ui/button";
import Link from "next/link";

export default function NewsPreview({ news }: { news: zNews[] }) {
  return (
    news && (
      <div className="px-5 sm:px-0  mb-20">
        <p className="text-xl font-bold text-gray-700 text-center sm:text-left mx-auto sm:mx-0">Budi uvek u toku</p>
        <Carousel>
          <CarouselContent>
            {news.map((news) => (
              
              <CarouselItem
                className=" basis-[90%] pb-10 relative sm:basis-[40%] lg:basis-[30%]"
                key={news?.id}
              >
                <Link key={news?.id} href={`/vesti/${news?.id}`}>
                <div className="aspect-[2] w-full rounded-xl mb-5 overflow-hidden  relative">
                  <Image
                    alt="news-image"
                    src={news?.image || ""}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h2>{news?.title}</h2>
                <div className=" aspect-[5] relative overflow-hidden text-xs text-gray-500 ">
                  <div
                    className="h-full"
                    dangerouslySetInnerHTML={
                      news?.body
                        ? {
                            __html: stateToHTML(
                              convertFromRaw(JSON.parse(news.body))
                            ),
                          }
                        : undefined
                    }
                  ></div>

                  <div className="h-full w-full bg-gradient-to-t from-[#F9F9F9] to-transparent absolute top-0 left-0"></div>
                </div>
                <Link href={`/vesti/${news?.id}`}>
                  <Button className="absolute bg-const_secondary text-white rounded-full px-14 py-5 bottom-0">
                    Pročitaj više
                  </Button>
                </Link>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    )
  );
}
