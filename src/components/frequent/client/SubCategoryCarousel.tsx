"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { zCategory } from "@/schemas/zFrequent";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";

export default function SubCategoryCarousel({
  subcategories,
  searchParams,
}: {
  subcategories: zCategory[];
  searchParams?: [string, string][];
}) {
  const [loading, setLoading] = useState<number | null>(null);

  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setLoading(null);
  }, [params]);

  return (
    <ScrollArea className="w-full h-fit overflow-y-hidden whitespace-nowrap rounded-md ">
      <ScrollBar orientation="horizontal" />
      <div className="flex w-max h-36 sm:h-40 lg:h-52 space-x-4 px-4 2xl:px-0 no-scrollbar overflow-y-hidden pb-5">
        {subcategories?.map((item, index) => {
          return (
            <div
              key={index}
              className=" h-32 w-32 sm:h-40 sm:w-40 lg:w-52 lg:h-52  aspect-square basis-1/2"
            >
              <div
                onClick={() => {
                  params.get("Current_category") !== item?.name &&
                    setLoading(index);
                  router.push(
                    subcategories?.filter((s) => s?.subcategories?.length)
                      ?.length
                      ? "/" + item?.slug
                      : pathname + "?Current_category=" + item?.name,
                    !subcategories?.filter((s) => s?.subcategories?.length)
                      ?.length
                      ? { scroll: false }
                      : {}
                  );
                }}
                key={index}
                className={cn(
                  "inline-block cursor-pointer w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-800 ",
                  searchParams?.find(
                    ([key, value]) =>
                      key === "Current_category" && value === item?.name
                  )
                    ? "bg-neutral-100"
                    : ""
                )}
              >
                <div className="aspect-square flex w-full justify-center items-center flex-col">
                  <div className="w-[90%] aspect-square relative">
                    <Image
                      src={item?.image || "/assets/Logo.png"}
                      alt="Banner"
                      sizes="100vw"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-xs truncate px-3">
                    {loading === index ? (
                      <Loader className="animate-spin w-5 h-4" />
                    ) : (
                      item?.name
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
