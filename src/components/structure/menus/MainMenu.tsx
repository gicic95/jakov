import Link from "next/link";
import { fetchAllCategories } from "@/app/actions/fequentActions";
import { zCategory, zMenuCategories, zMenuCategory } from "@/schemas/zFrequent";
import AllCategories from "./AllCategories";
import { Suspense } from "react";
import { fetchWeb } from "@/app/actions/fetchWeb";

export default async function MainMenu({categories}:{categories: zMenuCategories}) {

  const {brands} = await fetchWeb();

  return (
    <div className="flex w-full bg-white z-20 font-extralight text-[1rem]  h-full ">
      <div className="hidden sm:flex">
      <Suspense fallback={<></>}>
        <AllCategories brands={brands}  categories={categories} />
      </Suspense>
      </div>
      <div className="flex  w-full h-full text-nowrap text-ellipsis font-bold text-center text-sm sm:text-[0.9vw] xl:text-sm text-gray-700 bg-white justify-between items-center">
        <div className="flex">
          <Link
            href={"/sve-akcije"}
            className="mx-2 sm:mx-4 text-const_secondary  h-full flex items-center  "
          >
            Šok Akcije
          </Link>
          <Link
            href={"/it-shop"}
            className="mx-2 sm:mx-4  h-full flex items-center  "
          >
            IT Shop
          </Link>
          <Link
            href={"/tv-video-i-foto"}
            className="mx-2 sm:mx-4  h-full flex items-center  "
          >
            TV, video i foto
          </Link>
          <Link
            href={"/bela-tehnika"}
            className="mx-2 sm:mx-4  h-full flex items-center  "
          >
            Bela tehnika
          </Link>
          <Link
            href={"/klimatizacija-i-grejanje"}
            className="mx-2 sm:mx-4  h-full flex items-center  "
          >
            Klimatizacija i grejanje
          </Link>
          <Link
            href={"/kucni-ljubimci-pet-shop"}
            className="mx-2 sm:mx-4  h-full flex items-center  "
          >
            Kućni ljubimci PET Shop
          </Link>
          <Link
            href={"/audio-oprema"}
            className="mx-2 sm:mx-4  h-full flex items-center  "
          >
            Audio oprema
          </Link>
        </div>
        <Link
          href={"/pomoc"}
          className="  h-full  text-right flex items-center  "
        >
          Pomoć i saveti
        </Link>
      </div>
    </div>
  );
}


