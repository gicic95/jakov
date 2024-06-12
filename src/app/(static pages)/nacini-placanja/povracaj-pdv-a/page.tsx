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
              INFORMACIJE O PRAVU NA POVRAĆAJ PDV PUTNIKA STRANIH DRŽAVLJANA
            </p>
            <br />
            <div className="relative mb-10 mt-10 h-full">
              <Image
                alt="Hero Banner"
                src={"/assets/nacini-placanja/pdv.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className=" sm:mt-0    object-contain sm:flex z-10"
              />
            </div>
            <br />
            <p className="text-lg font-semibold">
              Povraćaj PDV može se ostvariti pod sledećim uslovima:
            </p>
            <ul className=" sm:pl-10">
              <li>
                1. da kupac – putnik koji nema prebivalište ni boravište u
                Republici Srbiji poseduje popunjen zahtev putnika za povraćaj
                PDV,
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/static/media/Obrazac_ZPPPDV_srp-eng.f098a758.pdf"
                >
                  Obrazac ZPPPDV preuzmite ovde;
                </a>
              </li>
              <li>
                2. da su podaci iz putne isprave istovetni sa podacima iz
                zahteva putnika za povraćaj PDV;
              </li>
              <li>
                3. da su dobra data na uvid carinskom organu istovetna sa
                dobrima iz zahteva putnika za povraćaj PDV i iz računa;
              </li>
              <li>4. da dobra nisu korišćena u Republici Srbiji;</li>
              <li>
                5. da se dobra otpremaju u ličnom prtljagu putnika, za
                nekomercijalne svrhe, pre isteka tri kalendarska meseca po
                isteku kalendarskog mesesca u kojem je izvršen promet dobara;
              </li>
              <li>
                6. da je ukupna vrednost isporučenih dobara iskazana u jednom
                računu ili u više računa istog prodavca izdatih u vremenskom
                periodu koji nije duži od tri kalendarska meseca, veća od 100
                EUR, u dinarskoj protivvrednosti po srednjem kursu Narodne banke
                Srbije, uključujući PDV;
              </li>
              <li>
                7. da su dobra otpremljena sa carinske teritorije Republike
                Srbije;
              </li>
              <li>
                8. da je carinski organ potpisom i pečatom potvrdio ispunjenost
                uslova za za povraćaj PDV i upisao datum otpremanja dobara sa
                carinske teritorije Republike Srbije;
              </li>
              <li>
                9. da je zahtev putnika za povraćaj PDV podnet prodavcu ili
                operatoru u roku od šest meseci od dana izdavanja računa za
                izvršeni promet dobara.
              </li>
            </ul>
            <br />
            <p>
              Putnik podnosi zahtev za povraćaj PDV tako što prodavcu ili
              operatoru dostavlja račun, odnosno račune potpisane i overene
              pečatom carinskog organa i original zahteva putnika za povraćaj
              PDV potpisan i overen pečatom carinskog organa, na kojem je
              carinski organ potvrdio da su ispunjeni uslovi za povraćaj PDV i
              upisao datum otpremanja dobara sa carinske teritorije Republike
              Srbije.
              <br />
              <br />
              Zahtev putnika za povraćaj PDV može se podneti lično, poštom ili
              preko drugog lica.
              <br />
              <br />
              Pravo na povraćaj PDV ne može se ostvariti za akcizne proizvode
              (npr. derivati nafte, alkoholna pića, cigarete i kafa) i dobra
              namenjena opremanju prevoznih sredstava za privatne potrebe.
              <br />
              <br />
              Zahtev za povraćaj PDV putnik može da dostavi lično, poštom ili
              preko drugog lica.Ako se zahtev za povraćaj PDV dostavlja poštom,
              putnik mora da navede račun na koji će mu se izvršiti povraćaj
              PDV.
              <br />
              <br />
              *Više informacija pogledajte na
              sajtu:http://www.poreskauprava.gov.rs/sr.html
            </p>
            <p className="text-2xl my-10 font-light text-const_secondary">
              INFORMATION ON THE RIGHT TO A PASSENGER VAT REFUND FOREIGN
              NATIONALS
            </p>
            <div className="relative mb-10 mt-10 h-full">
              <Image
                alt="Hero Banner"
                src={"/assets/nacini-placanja/pdv2.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className=" sm:mt-0    object-contain sm:flex z-10"
              />
            </div>
            <p className="text-lg font-semibold">VAT refunds can be made under the following conditions:</p>
            <ul className="sm:pl-10 ">
              <li>
                1. that the buyer – a passenger who does not have a permanent or
                temporary residence in the Republic of Serbia possesses a
                completed passenger request for VAT refund,
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/static/media/Obrazac_ZPPPDV_srp-eng.f098a758.pdf"
                >
                  request form download here;
                </a>
              </li>
              <li>
                2. that the data from the travel document are identical to the
                data from the passenger request for VAT refund;
              </li>
              <li>
                3. that goods that have been submitted for inspection to the
                customs authority are identical to the goods from the passenger
                request for VAT refund and from the receipt;
              </li>
              <li>
                4. that the goods have not been used in the Republic of Serbia;
              </li>
              <li>
                5. that the goods are dispatched in the personal luggage of the
                passenger, for non-commercial purposes, before the expiration of
                three calendar months after the expiration of the calendar month
                in which the turnover of goods has been performed;
              </li>
              <li>
                6. that the total value of the goods delivered is expressed in
                one receipt or in several receipts of the same seller, issued
                over a period not exceeding three calendar months, in the amount
                exceeding EUR 100, in dinar countervalue under the average
                exchange rate of the National Bank of Serbia, including VAT;
              </li>
              <li>
                7. that the goods have been shipped from the customs territory
                of the Republic of Serbia;
              </li>
              <li>
                8. that the customs authority has confirmed the fulfilment of
                the conditions for VAT refund, by signature and seal, and has
                entered the date of dispatch of goods from the customs territory
                of the Republic of Serbia;
              </li>
              <li>
                9. that a request for VAT refund has been submitted to the
                seller or operator within six months from the date of issue of
                the receipt for the performed turnover of goods.
              </li>
            </ul>
            <p>The passenger submits a VAT refund request by submitting to the seller or operator the receipt, or receipts, signed and authenticated by the stamp of the customs authority and the original passenger request for VAT refund, signed and authenticated by the stamp of the customs authority where the customs authority has confirmed that the conditions for VAT refund were fulfilled and has entered the date of dispatch of goods from the customs territory of the Republic of Serbia.
<br /><br />
The passenger request for VAT refund can be submitted in person, by post or through another person.
<br /><br />
The right to VAT refund cannot be realized for excise products (e.g. derivatives of oil, alcoholic beverages, cigarettes and coffee) and goods intended for equipping vehicles for private purposes
<br /><br />
A passenger VAT refund request can be delivered in person, by post or via another person.If the request for VAT refund is delivered by post, the passenger must indicate the account to which his VAT return will be made.
<br /><br />
*For more information go to:http://www.poreskauprava.gov.rs/sr.html</p>
          </div>
        </StaticWrapper>
      </div>
    </>
  );
}
