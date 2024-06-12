import Breadcrumb from "@/components/frequent/BreadCrumb";
import StaticWrapper from "@/components/structure/nacini-placanja/WrapperPaymentMethodStatic";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export default function PaymentMethodsPage() {
  return (
    <>
      <div className="max-w-screen-2xl p-5  font-normal mx-auto px-5 my-10">
        <Breadcrumb
          list={[
            { link: "/", name: "Početna strana" },
            { link: "#", name: "Načini plaćanja" },
          ]}
        />
        <h1 className="text-4xl text-center font-light mt-10">
          Svi načini plaćanja u našim prodavnicama i Online shop-u
        </h1>
        <StaticWrapper>
          <div className="p-5 font-light">
            <p className="text-2xl font-light text-const_secondary">
              LAKO I JEDNOSTAVNO PLAĆAJTE VAŠIM PLATNIM KARTICAMA
            </p>
            <br />
            <br />
            <p>
              U Jakov Sistem maloprodajama možete plaćati i platnim karticama –
              VISA, MasterCard, American Express, Maestro i DinaCard. U ovom
              trenutku ne možete plaćati preko interneta, ali radimo na tome da
              Vam što pre obezbedimo ovu uslugu i time još više olakšamo
              kupovinu iz fotelje.
              <br />
              <br />
            </p>

            <div className="relative mb-10 mt-10 h-full">
              <Image
                alt="Hero Banner"
                src={"/assets/nacini-placanja/kartice1.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className=" sm:mt-0    object-contain sm:flex z-10"
              />
            </div>
            <p>
              <b className="font-semibold"> Banca Intesa platne kartice!</b>{" "}
              <br />
              <br />
              Korisnici Banka Intesa MasterCard i Visa platnih kartica tokom
              cele godine mogu uživati u pogodnostima programa: plaćanju na 3 do
              12 mesečnih rata bez kamate na više od 2.000 prodajnih mesta širom
              cele Srbije u brojnim popustima u partnerskim prodavnicama,
              odlozenom placanju itd. Pa tako i Jakov Sistemu možete plaćati
              samo nekom od vaših platnih kartica na 3 do 12 mesečnih rata bez
              kamate.
            </p>
            <div className="relative mb-10 mt-10 h-full">
              <Image
                alt="Hero Banner"
                src={"/assets/nacini-placanja/kartice.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className=" sm:mt-0    object-contain sm:flex z-10"
              />
            </div>
            <p>
              <b className="font-semibold">
                Poštanska štedionica platne kartice!
              </b>{" "}
              <br />
              <br />
              Domaća kartica koja menja ček! <br />
              <br />
              Plaćanje robe bez kamate i naknade na 6 i 10 mesečnih rata na POS
              terminalima Dina karticom. Banke Poštanska štedionica u Jakov
              Sistem prodavnicama.
            </p>
            <div className="relative mb-10 mt-10 h-full">
              <Image
                alt="Hero Banner"
                src={"/assets/nacini-placanja/kartice3.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className=" sm:mt-0    object-contain sm:flex z-10"
              />
            </div>
          </div>
        </StaticWrapper>
      </div>
    </>
  );
}
