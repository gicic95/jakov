import Link from "next/link";
import Image from "next/image";
import MainMenu from "./menus/MainMenu";
import ClientMenu from "./menus/ClientMenu";
import { Hammer, PackageCheck, PackageOpenIcon, Truck } from "lucide-react";
import SearchBar from "./menus/SearchBar";
import { business_details } from "../../../CONFIGURE_HERE";
import { Suspense } from "react";
import MobileSheetCategories from "./menus/SearchBar/MobileSheetCategories";
import { fetchAllCategories } from "@/app/actions/fequentActions";

const benefits = [
  {
    icon: (
      <Truck
        strokeWidth={1}
        className="w-7 font-light h-7 flex justify-center items-center text-black"
      />
    ),
    text: "Besplatna Isporuka na teritoriji Srbije",
    link: "/uslovi-i-cene-isporuke-robe",
  },
  {
    icon: <PackageCheck strokeWidth={1} className="w-7 h-7 text-black" />,
    text: "Prati svoju proudžbinu",
    link: "/uslovi-i-cene-isporuke-robe#shipment_tracking",
  },
  {
    icon: <PackageOpenIcon strokeWidth={1} className="w-7 h-7 text-black" />,
    text: "Šta ako želim da vratim proizvod?",
    link: "/pravila-i-uslovi-koriscenja#buyers_right",
  },
  {
    icon: <Hammer strokeWidth={1} className="w-7 h-7 text-black" />,
    text: "Šta u slučaju oštećenja robe?",
    link: "/pravila-i-uslovi-koriscenja#delivery",
  },
];

export default async function Navbar() {
  
  const categories = await fetchAllCategories();
  return (
    <div className="z-30" id="navbar">
      <div className="w-full top-0 flex flex-col bg-white z-20 justify-center ">
        {/** SUP NAVBAR */}
        <div className="w-full text-nowrap relative h-9 z-20 sm:px-5 2xl:px-0 bg-const_secondary flex-col items-center text-const_primary">
          <div className="max-w-screen-2xl justify-center sm:justify-start mx-auto flex items-center h-full">
            <span className="text-xs  flex  items-center ">
              <Link href={'tel:' + business_details.phone}>Pozovite nas </Link>
              <div className="font-extralight text-xl mx-2 flex items-center">
                |
              </div>{" "}
              <Link href={'mailto:' + business_details.email}>info@jakovsistem.com</Link>
              <div className="font-extralight hidden sm:flex text-xl mx-2  items-center">
                |
              </div>{" "}
              <Link href={'mailto:beograd@jakovsistem.com'} className="hidden sm:flex">beograd@jakovsistem.com</Link>
            </span>
            
          </div>
          
        </div>

        {/** MIDDLE NAVBAR */}
        <div className="w-full  sm:px-5 2xl:px-0 hidden sm:flex     top-5 z-30    mx-auto ">
          <div className=" bg-white rounded-xl   mx-auto max-w-screen-2xl grid grid-cols-[300px_minmax(200px,_1fr)_minmax(300px,_400px)]  sm:h-[10vh] w-full">
            <h1 className="h-full w-[225px]  max-w-screen-2xl  relative ">
              <Link href="/">
                <Image
                  alt="Logo"
                  src={"/assets/Logo.webp"}
                  fill
                  loading="eager"
                  priority
                  className="object-contain  "
                />
              </Link>
            </h1>
            <div className="hidden pl-20  lg:flex justify-center items-center">
              <SearchBar />
              <div className="w-[20%] 2xl:flex  hidden text-const_secondary text-sm h-full justify-center  pl-5 itece flex-col">
                <p>011 630 50 33</p>
                <p>018 41 55 222</p>
                <p>066 8 220 220</p>
              </div>
            </div>
            <ClientMenu />
          </div>
        </div>

        <div className="max-w-screen-2xl sm:px-5 2xl:px-0 mx-auto hidden lg:flex bg-white z-20 w-full  h-[2.7rem] mt-5 ">
          <MainMenu categories={categories} />
        </div>
      </div>

      <div className="sm:hidden sm:px-5 2xl:px-0 relative  z-20 h-full flex bg-const_middleground items-center">
        <div className="w-1/2  aspect-[2.5] relative my-auto ">
          <Link href={"/"}>
            <Image
              alt="Logo"
              src={"/assets/Logo.webp"}
              fill
              className="object-contain p-5"
            />
          </Link>
        </div>
        <ClientMenu />
      </div>

      <hr className=" border-const_secondary border-[1.5px] mb-2 hidden sm:flex sm:mb-0" />

      <div className=" sm:px-5 2xl:px-0 hidden lg:block w-full font-semibold h-14 bg-gray-50  ">
        <div className="max-w-screen-2xl  h-full flex justify-between grid-cols-4 mx-auto">
          {benefits.map((item, index) => {
            return (
              <Link
                href={item.link}
                key={index}
                className="flex justify-center items-center h-full"
              >
                {item.icon} <span className="ml-2 text-sm">{item.text}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <Suspense fallback={<></>}>
        <div className="sm:hidden pt-1 w-full grid grid-cols-6 shadow-md  bg-white border-b pb-2 px-3">
          <div className="flex justify-center items-center h-full">
            <MobileSheetCategories categories={categories} />
          </div>
          <div className="col-span-5">
            <SearchBar />
          </div>

          <div className="col-span-6 mt-4 sm:hidden no-scrollbar overflow-x-scroll">
            <div className="w-fit  2xl:px-0 mx-auto flex bg-white z-20    ">
              <MainMenu categories={categories} />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
