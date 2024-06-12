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
              UŠTEDITE NOVAC KUPUJUĆI IZ FOTELJE
            </p>
            <br />
            <p>
              Ukoliko odlučite da odmah kupite jedan od naših proizvoda i
              platite u gotovom, pripremili smo Vam fenomenalno iznenađenje –
              POPUST I SJAJNE POKLONE
              <br />
              <br />
              Za svaku Vašu online narudžbinu koju platite u gotovom, Jakov
              Sistem Vam odobrava popust koji je uračunat u Web Cenu. Dakle,
              kući iz udobne fotelje, naručite jedan od proizvoda iz naše
              ogromne ponude i u roku od jednog dana poštar će Vam isporučiti
              Vašeg novog digitalnog kućnog ljubimca, a Vi platite manje u
              odnosu na punu cenu proizvoda
            </p>
            <p className="mt-5 font-bold text-const_highlight">*dodatni popust se ne odnosi na akcijske proizvode</p><br />
            <Link href={"/pomoc"} className="text-const_secondary mt-10">Kako naručiti online?</Link><br />
            <Link href={"/uslovi-i-cene-isporuke-robe"} className="text-const_secondary mt-2">Isporuka na kućnu adresu</Link>
            <br />
            <div className="relative mb-10 mt-10 h-full">
                <Image
                  alt="Hero Banner"
                  src={"/assets/nacini-placanja/gotovina.png"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className=" sm:mt-0    object-contain sm:flex z-10"
                />
              </div>
              <p>
              Ukoliko imate neko pitanje, kontaktirajte nas <Link href="mailto:info@jakov.rs" className="text-const_secondary">ovde</Link> ili na naše brojeve telefona.
<br /><br />
Jakov Sistem misli na Vas
              </p>
          </div>
        </StaticWrapper>
      </div>
    </>
  );
}
