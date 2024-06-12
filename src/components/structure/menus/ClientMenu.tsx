"use client";
import { Bookmark, Heart, ShoppingCart, User, XIcon } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import CountPreview from "@/components/frequent/client/CountPreview";
import WishesPreview from "@/components/frequent/client/WishesPreview";
import useCart from "@/app/store/useCart";
import Image from "next/image";
import CartSheet from "@/components/frequent/client/CartSheet";

export default function ClientMenu() {
  const { data } = useSession();

  const { cart_open_toggle } = useCart();

  return (
    <>
      <div className=" top-0 right-10 h-full  justify-end  items-center hidden lg:flex ">
        <Link
          href={"/lista-zelja"}
          className="flex justify-center items-center flex-col relative"
        >
          <Bookmark className="text-black p-[0.1rem]" width={30} height={30} />
          <WishesPreview />
          <span className="text-xs mt-2 text-black ">Lista želja</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="mx-10">
            <Link
              href={data?.user ? "#" : "/login"}
              className="flex justify-center items-center  flex-col "
            >
              <User className="text-black p-[0.1rem]" width={30} height={30} />
              <span className="text-xs mt-2 text-black ">
                {data?.user ? data.user.name?.split(" ")[0] : "Prijavi se"}
              </span>
            </Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            onClick={() => {
              document.dispatchEvent(
                new KeyboardEvent("keydown", { key: "Escape" })
              );
            }}
            className="min-w-52 bg-const_middleground border-black"
          >
            {!data?.user ? (
              <>
                <DropdownMenuLabel>
                  <div className="flex justify-center flex-col items-center">
                    <p>Već ste registrovani?</p>
                    <Link href={"/login"}>
                      <Button variant={"secondary"}>Prijavi se</Button>
                    </Link>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>
                  <div className="flex justify-center items-center flex-col w-full">
                    <p>Niste registrovani?</p>
                    <Link
                      href={"/register"}
                      className="text-const_secondary underline"
                    >
                      Registruj se
                    </Link>
                  </div>
                </DropdownMenuLabel>
              </>
            ) : (
              <>
                <DropdownMenuItem>
                  <Link href={"/profil"}>Detalji naloga</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/porudzbine"}>Porudžbine</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/profil/adrese"}>Adrese naloga</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div
                    onClick={() => {
                      signOut();
                    }}
                    className="cursor-pointer"
                  >
                    Odjavi se
                  </div>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

          <div onClick={()=>{cart_open_toggle(true)}} className="flex  cursor-pointer  w-fit justify-center items-center flex-col relative">
            <ShoppingCart
              className="text-black p-[0.1rem]"
              width={30}
              height={30}   
            />
            <CountPreview />
            <span className="text-xs mt-2 text-black ">Moja korpa</span>
          </div>
        {/* </DropdownMenuTrigger>
          <DropdownMenuContent className="max-w-[500px] w-full mr-[10rem]">
            <DropdownMenuLabel>
              <p className="text-xl font-light text-gray-700">Korpa</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="h-[50vh] overflow-y-scroll">
              {items?.map((item, index) => {
                return (
                  <DropdownMenuItem key={index}>
                    <Link
                      href={`/${
                        item?.mainCategory?.[0]?.slug ||
                        item?.main_category?.[0]?.slug
                      }/${item?.slug}`}
                      className=" w-[500px] flex items-center h-fit relative"
                    >
                      <div className="relative w-1/6 aspect-square">
                        <Image
                          src={
                            item?.main_image?.tiny ||
                            item?.images?.[0]?.tiny ||
                            ""
                          }
                          alt={item?.name || ""}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="w-1/3 ml-1 line-clamp-2">{item?.name} </p>
                      <div className="w-2/6 mr-2 h-full flex justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center p-5">
                          <div
                            className="w-1/3 justify-center  flex items-center border aspect-square"
                            onClick={(e) => {
                              e.preventDefault();
                              removieItem(
                                localStorage.getItem("store") || "",
                                item,
                                item?.quantity || 1
                              );
                            }}
                          >
                            -
                          </div>
                          <div className="w-1/3 justify-center border-black flex items-center border aspect-square">
                            {item?.quantity}
                          </div>
                          <div
                            className="w-1/3 justify-center  flex items-center border aspect-square"
                            onClick={(e) => {
                              e.preventDefault();
                              addItem(
                                localStorage.getItem("store") || "",
                                item,
                                1
                              );
                            }}
                          >
                            +
                          </div>
                        </div>
                      </div>
                      <p className="w-1/6">
                        {item?.price?.toLocaleString("en-US", {
                          style: "currency",
                          currency: "RSD",
                        })}
                      </p>
                      <div
                        className="absolute -top-1 right-1 opacity-50"
                        onClick={(e) => {
                          e.preventDefault();
                          removieItem(
                            localStorage.getItem("store") || "",
                            item,
                            1
                          );
                        }}
                      >
                        <XIcon />
                      </div>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </div>
            <div className="w-full border-t pb-5">
              <div className="flex justify-between items-center  px-5">
                <p>Ukupno</p>
                <p className="flex text-const_secondary my-5  font-bold justify-center items-center ">
                  {items
                    ?.map((item) => (item?.price ?? 0) * (item?.quantity ?? 0))
                    .reduce((prev, next) => prev + next, 0)
                    .toLocaleString("en-US", {
                      style: "currency",
                      currency: "RSD",
                    })}
                </p>
              </div>
              <div
                onClick={() => {
                  document.dispatchEvent(
                    new KeyboardEvent("keydown", { key: "Escape" })
                  );
                }}
              >
                <div className="w-full px-2 flex justify-center items-center h-10 ">
                  <Link
                    href={"/korpa"}
                    className="mx-2 border w-1/2 flex justify-center items-center border-const_secondary rounded-md text-const_secondary h-full "
                  >
                    Pregled korpe
                  </Link>
                  <Link
                    href={"/zavrsi-kupovinu"}
                    className="mx-2 border w-1/2 flex justify-center items-center border-const_secondary rounded-md text-const_secondary h-full "
                  >
                    Završi kupovinu
                  </Link>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className="lg:hidden m-auto flex justify-evenly w-1/2 sm:w-full items-center">
        <div className="flex flex-col items-center">
          <Link href={"/lista-zelja"} className="relative w-fit ">
            <Bookmark className="text-black " width={30} height={30} />
            <WishesPreview />
          </Link>
          <span className="text-xs mt-2 text-black ">Lista želja</span>
        </div>

        <div className="flex flex-col items-center">
          <Link href={data?.user?.email ? "/profil" : "/login"}>
            <User className="text-black " width={30} height={30} />
          </Link>
          <span className="text-xs mt-2 text-black ">
            {data?.user?.email ? data.user.name : "Nalog"}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <Link href={"/korpa"} className="relative w-fit pr-2">
            <ShoppingCart className="text-black " width={30} height={30} />
            <CountPreview />
          </Link>
          <span className="text-xs mt-2 text-black ">Korpa</span>
        </div>
      </div>
    </>
  );
}
