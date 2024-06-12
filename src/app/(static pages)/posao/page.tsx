import Breadcrumb from "@/components/frequent/BreadCrumb";
import { Metadata } from "next";
import { SEO } from "../../../../CONFIGURE_HERE";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PaymentMethodsPage() {
  return (
    <>
      <div className="max-w-screen-2xl p-5 font-normal mx-auto px-5 my-10">
        <Breadcrumb
          list={[
            { link: "/", name: "Početna strana" },
            { link: "#", name: "Posao" },
          ]}
        />
        <div className="relative sm:p-10 w-full h-full">
          <Image
            alt="Hero Banner"
            src={"/assets/posao/posao1.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="mt-10 sm:mt-0 object-contain sm:flex z-10"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="relative sm:p-10 w-full h-full">
            <Image
              alt="Hero Banner"
              src={"/assets/posao/posao2.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mt-10 sm:mt-0 object-contain sm:flex z-10"
            />
          </div>
          <div className="col-span-2 flex justify-center flex-col  h-full">
            <b className="font-bold">Misija</b>
            Tokom godina sa klijentima smo brižljivo gradili odnos poverenja i
            poštovanja. Imajući u vidu ubrzan tempo života i stalni nedostatak
            vremena savremenog čoveka, spoznali smo potrebe naših klijenata i
            omogućili da kupovinu obave brzo, kvalitetno i po povoljnim cenama.
          </div>
        </div>
      </div>
      <div className="mt-10   mx-auto min-h-52 mb-10 pt-5 bg-neutral-100 w-full">
        <p className="text-center font-light text-2xl">Mi nudimo</p>
        <div className="max-w-screen-2xl mx-auto sm:pt-10 grid grid-cols-1 sm:grid-cols-5 ">
          <div className="flex flex-col justify-center items-center mb-0">
            <Image
              alt="Hero Banner"
              src={"/assets/posao/pp1.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mt-10 max-w-28 sm:mt-0 object-contain sm:flex z-10"
            />
            <p className="text-gray-500 font-light mb-10">
              Dinamično radno okruženje
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              alt="Hero Banner"
              src={"/assets/posao/pp2.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mt-10 max-w-28 sm:mt-0 object-contain sm:flex z-10"
            />
            <p className="text-gray-500 font-light mb-10">
              Motivisane kolege i timski duh
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              alt="Hero Banner"
              src={"/assets/posao/pp3.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mt-10 max-w-28 sm:mt-0 object-contain sm:flex z-10"
            />
            <p className="text-gray-500 font-light mb-10">
              Profesionalnu saradnju i mentoring
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              alt="Hero Banner"
              src={"/assets/posao/pp4.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mt-10 max-w-28 sm:mt-0 object-contain sm:flex z-10"
            />
            <p className="text-gray-500 font-light mb-10">
              Moderno radno okruženje
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              alt="Hero Banner"
              src={"/assets/posao/pp5.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mt-10 max-w-28 sm:mt-0 object-contain sm:flex z-10"
            />
            <p className="text-gray-500 font-light mb-10">
              Kompetativnu zaradu i mogućnost napredovanja
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg min-h-52 mb-20 mx-auto grid grid-cols-1 sm:grid-cols-2">
        <Image
          alt="Hero Banner"
          src={"/assets/posao/posao3.png"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="mt-10 sm:mt-0 object-contain sm:flex z-10"
        />
        <div className="h-full flex justify-center sm:pl-10 flex-col text-3xl">
          <p className="font-normal">
            U potrazi smo za <br />
            <span className="text-gray-400 font-light">
              Menadžerom Web Shopa
            </span>
          </p>
          <Link href="/otvorene-pozicije">
            <Button  className="p-5 px-10 mt-4 bg-const_secondary ">Prijavi se</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
