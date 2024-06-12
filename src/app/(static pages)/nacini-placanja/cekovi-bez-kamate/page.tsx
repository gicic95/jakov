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
              ČEKOVIMA NA 10 RATA BEZ KAMATE I UČEŠĆA
            </p>
            <br /><br />
            <p>
              Pored ostalih načina plaćanja Jakov Sistem Online Shop Vam
              omogućava i odloženo plaćanje čekovima na 10 rata bez kamate i bez
              učešća.
              <br /><br />
              <b className="font-bold">
                Naručite robu online i kada vam stigne na vrata predajte
                potpisane čekove kuriru.
              </b>
            </p>
            <br />
            <div className="relative mb-10 mt-10 h-full">
              <Image
                alt="Hero Banner"
                src={"/assets/nacini-placanja/cekovi.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className=" sm:mt-0    object-contain sm:flex z-10"
              />
            </div>
            <p>
            Ovakvim načinom plaćanja izašli smo u susret našim vernim kupcima, sada već dosta odavno i pokazalo se kao veoma dobar potez, jer možete kupiti bilo koji proizvod iz naše ponude i platiti ga odloženo na 10 mesečnih rata bez učešća i sa kamatom od 0%.
              <br /><br />
              <span className="text-const_highlight font-bold">Kupi, koristi, plati prvu ratu tek kroz mesec dana.</span>
            </p>
          </div>
        </StaticWrapper>
      </div>
    </>
  );
}
