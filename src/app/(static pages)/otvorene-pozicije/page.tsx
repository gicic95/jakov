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
            { link: "#", name: "Otvorene pozicije" },
          ]}
        />
        <div className="relative sm:p-10 w-full h-full">
          <Image
            alt="Hero Banner"
            src={"/assets/pozicije/pozicije1.jpg"}
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
              src={"/assets/pozicije/pozicije2.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mt-10 sm:mt-0 object-contain sm:flex z-10"
            />
          </div>
          <div className="col-span-2 flex justify-center flex-col  h-full">
            <b className="font-light mb-10 text-3xl">Tvoj profil</b>
            <ul className="list-disc font-light pl-5 sm:pl-10">
              <li>Univerzitetska diploma iz oblasti ekonomije</li>
              <li>Praktično iskustvo u prodaji minimum 3 godine</li>
              <li>MS Office (posebno Internet i Exel)</li>
              <li>Engleski jezik srednji nivo (B2)</li>
              <li>Proaktivan, timski igrač</li>
              <li>Samostalnost u radu, okrenutost ka cilju</li>
              <li>Odlične komunikacione veštine</li>
              <li>
                Odlične organizacione sposobnosti (sposobnost vođenja više
                poslova odjednom)
              </li>
              <li>Vozačka dozvola B kategorije</li>
              <li>Da niste krivično osuđivani</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="col-span-2 flex justify-center flex-col  h-full">
            <b className="font-light mb-10 text-3xl">Tvoj posao</b>
            <ul className="list-disc font-light pl-5 sm:pl-10">
              <li>Osmišljavanje prodajne strategije, akcija i vesti</li>
              <li>Rad sa dobavljačima</li>
              <li>Kontrola prodavaca</li>
              <li>Praćenje prodaje, asortimana, kupaca</li>
              <li>
                Organizacija, rukovođenje, koordinacija i kontrola rada webshopa
              </li>
              <li>Praćenje razvoja tržišta i aktivnosti konkurencije</li>
              <li>Komunikacija i koordinacija sa marketing timom</li>
            </ul>
          </div>
          <div className="relative sm:p-10 w-full h-full">
            <Image
              alt="Hero Banner"
              src={"/assets/pozicije/pozicije2.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mt-10 sm:mt-0 object-contain sm:flex z-10"
            />
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
      <p className="text-center font-light text-lg mb-20">Vašu biografiju sa motivacionim pismom možete poslati na sledeću adresu:
<br /><br />
<Link href="mailto:info@jakovsistem.com" className="text-const_secondary ">info@jakovsistem.com</Link>
</p>
    </>
  );
}
