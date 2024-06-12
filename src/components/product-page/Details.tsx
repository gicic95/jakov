import { zAction, zProduct } from "@/schemas/zFrequent";
import Link from "next/link";
import ProductIncrement from "../frequent/client/ProductIncrement";
import { ClipboardCopyIcon, MapPin, MapPinned, Truck } from "lucide-react";
import Image from "next/image";
import More from "./More";
import CopyLink from "./details/CopyLink";
import PromoCode from "./details/PromoCode";
import LoadOnScrollComponent from "../frequent/LoadOnScrollComponent";
import DeliveryPopUp from "./details/DeliveryPopUp";

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

export default function Details({
  product,
  stickers,
}: {
  product: zProduct;
  stickers?: zAction[];
}) {

  return (
    <div className="w-full relative pr-5">
      <p className="text-xl font-bold mb-3">{product?.name}</p>
      <div className="text-xs sm:justify-between sm:text-xs flex flex-col xl:flex-row">
        <div className="flex sm:flex-row flex-col">
          <span className=" font-bold">
            Šifra proizvoda:
            <span className="text-zinc-400  ml-2 ml">{product?.sku}</span>
          </span>
          {product?.brand?.name && (
            <span className=" text-black font-bold xl:ml-3">
              Brend:
              <Link href={'/brend/'+product?.brand?.name?.toLocaleLowerCase()?.replaceAll(' ', '-')} className="text-const_secondary font-light  ml-2">
                {product?.brand?.name}
              </Link>
            </span>
          )}
          <span className="font-bold xl:ml-3">
            Kategorija:
            <Link
              href={"/" + product?.categories?.[0]?.slug}
              className="text-const_secondary font-medium ml-2"
            >
              {product?.categories?.[0]?.name}
            </Link>
          </span>
        </div>
        <div>
          <CopyLink />
        </div>
      </div>
      <hr className="mt-3" />
      <div className="grid sm:grid-cols-2">
        <div className="pt-5">
          <Link href={"#specifikacije"} className="text-const_secondary text-xs pt-5">Pogledaj specifikacije proizvode</Link>
          <div className="flex items-center ">
            <p className="text-4xl border-r font-semibold tracking-wide ">
              <span className="text-sm font-light leading-3 ">web cena</span>{" "}
              <br />
              <span className="text-nowrap font-medium font-sans pr-2">
                {product?.price.toLocaleString("sr-RS")} RSD
              </span>
            </p>
            <div className="my-auto mt-10">
              <p className="pl-2 text-xs ">
                Mesečna rata kredita na <b>24 rate</b>
              </p>
              <p className="pl-2 text-lg font-semibold">
                {product?.retail_price &&
                  (product.retail_price / 24)
                    ?.toLocaleString("sr-RS")
                    .split(",")[0]}{" "}
                RSD
              </p>
              <Link
                className="text-xs pl-2 font-light text-nowrap text-const_secondary"
                href={"/nacini-placanja/krediti"}
              >
                Kako do kredita?
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs">maloprodajna cena</p>
            <p className="tracking-wider font-semibold line-through text-lg">
              {product?.retail_price.toLocaleString("sr-RS")} RSD
            </p>
            <p className="text-sm text-const_highlight">
              Ušteda{" "}
              <b>
                {product?.retail_price &&
                  (product?.retail_price - product?.price).toLocaleString(
                    "sr-RS"
                  )}{" "}
                RSD
              </b>
            </p>
            <p className="text-[10px] mt-3">
              * PDV je uključen u cenu <br /> ** Za online kupovinu i gotovinsko
              plaćanje
            </p>
            <p className="flex text-xs items-center mt-3">
              <Truck className="mr-2" /> Očekivani rok za isporuku je od{" "}
              <b className="mx-1">1 </b> do <b className="mx-1">3 dana</b>
            </p>
          </div>

          <div className="flex flex-col-reverse sm:flex-col">
            <div className="w-full grid grid-cols-2 mt-3">
              <div className="h-24 pr-2">
                <div className="bg-zinc-50 pl-3 flex-col flex  justify-center w-full h-full">
                  <b className="font-semibold text-sm text-left">ULOGUJ SE</b>
                  <p className="text-xs">i ostvari dodatni popust</p>
                  <Link
                    href={"/login"}
                    className="text-xs text-const_secondary"
                  >
                    Uloguj se
                  </Link>
                </div>
              </div>
              <div className="h-24 pr-2">
                <DeliveryPopUp product={product} />
              </div>
            </div>
            <div className="relative w-full flex justify-center">
              <div className="sm:pr-3 mb-5  mt-4 mx-auto">
                <ProductIncrement product={product} />
                <Link
                  href="/kontakt"
                  className="mt-3 text-xs text-gray-500 text-center flex justify-center items-center gap-2"
                >
                  <MapPinned width={20} /> Pogledajte naše prodajne centre
                </Link>
              </div>
            </div>
          </div>
        </div>
        <LoadOnScrollComponent>
        <div className="w-full h-full">
          <div className="w-full sm:h-2/5 h-1/2 pt-3 gap-3 flex flex-col">
            <div className="w-full h-1/2 p-3 bg-neutral-50 rounded-lg  flex">
              <div className="h-full w-2/5 relative">
              
                <Image
                  src={"/assets/etrustlogo.png"}
                  alt={"etrust"}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w- px-4 flex justify-center flex-col">
                <p className="font-bold text-nowrap text-sm">
                  SERTIFIKOVAN PRODAVAC
                </p>
                <p className="text-[0.7rem]">
                  100% sigurna kupovina na našem sajtu
                </p>
                <Link href={"/trust"} className="text-xs text-const_secondary">
                  Pročitaj više
                </Link>
              </div>
            </div>
            <div className="w-full  h-1/2 p-5 bg-neutral-50 rounded-lg justify-center flex">
              <div className="aspect-square w-1/4 relative">
                <Image
                  src={"/assets/21godina.png"}
                  alt={"21 godina sa vama"}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-1/2 px-4 flex justify-center flex-col">
                <p className="font-bold text-sm">21 GODINA SA VAMA</p>
                <p className="text-[0.7rem]">
                  Iskustva, kvaliteta, poverenja - Zahvaljujući vama!
                </p>
              </div>
              
              <div className="aspect-square w-1/4 relative">
                <Image
                  src={"/assets/mini_logo.png"}
                  alt={"etrust"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          {
            product?.promocode && product?.promocode_type?.type === "dedicated" && <PromoCode code={product?.promocode_type?.name} />
          }
          <div className="grid sm:gap-0 gap-2 grid-cols-2">
            {stickers?.map((item, index) => {
              return (
                <div key={index} className=" items-center pt-2 sm:p-2 mt-3">
                  <Link
                    href={"/sve-akcije/" + item?.slug}
                    className="w-full aspect-square  bg-zinc-50 relative  flex justify-center items-center"
                  >
                    <Image
                      src={STORAGE_URL + (item?.desktop_image || "")}
                      alt={"sticker"}
                      fill
                      className="rounded-lg"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        </LoadOnScrollComponent>
      </div>
    </div>
  );
}
