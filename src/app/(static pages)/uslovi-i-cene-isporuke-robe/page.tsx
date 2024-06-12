import Breadcrumb from "@/components/frequent/BreadCrumb";
import { Metadata } from "next";
import { SEO } from "../../../../CONFIGURE_HERE";
import Image from "next/image";
import Link from "next/link";


export default function PaymentMethodsPage() {
  return (
    <div className="max-w-screen-2xl font-normal mx-auto px-5 my-10">
      <Breadcrumb
        list={[
          { link: "/", name: "Početna strana" },
          { link: "#", name: "Pravila i Uslovi korišćenja" },
        ]}
      />

      <h1 className="text uppercase text-4xl text-center mt-10">
        Uslovi i cene isporuke robe
      </h1>

      <div className="w-full  grid grid-cols-1 my-20 sm:grid-cols-3">
        <div className="text-justify h-full items-center flex sm:mr-20 col-span-2">
          <p>
            <span className="text-const_secondary  text-2xl">
              Besplatna dostava na vašu kućnu adresu:
            </span>{" "}
            <br />
            <br />
            Ako vaša narudžbina prelazi vrednost od 25.000 dinara i ne uključuje
            proizvode iz kategorija Bela Tehnika, Televizori i Klima Uređaji,
            imate pravo na besplatnu isporuku na vašu kućnu adresu. Nakon
            potvrde narudžbine od strane naših komercijalista, vaši poručeni
            proizvodi će biti isporučeni na navedenu adresu putem kurirskih
            službi CityExpress, Bex ili Post Express, sa kojima Jakov Sistem
            d.o.o. ima sklopljen Ugovor o saradnji.
            <br />
            <br />
            Uobičajeno vreme isporuke je 1 do 3 radna dana, ali tačno vreme
            isporuke zavisi od trenutka kada je narudžbina potvrđena i uplata
            evidentirana (ukoliko plaćate unapred ili virmanskim putem).
            <br />
            <br />
            Molimo vas da imate na umu da vreme isporuke može da bude podložno
            promenama zbog faktora kao što su vremenski uslovi na putevima,
            neradni dani i državni praznici, pa budite svesni ovih okolnosti pri
            naručivanju.
          </p>
        </div>
        <div className="relative w-full h-full">
          <Image
            alt="Hero Banner"
            src={"/assets/isporuka/orders1.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="mt-10 sm:mt-0 object-contain sm:flex z-10"
          />
        </div>
      </div>

      <div className="w-full  grid grid-cols-1 my-20 sm:grid-cols-3">
        <div className="relative w-full h-full">
          <Image
            alt="Hero Banner"
            src={"/assets/isporuka/orders2.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="hidden object-contain sm:flex z-10"
          />
        </div>
        <div className="text-justify h-full items-center flex sm:ml-20 col-span-2">
          <p>
            <span className="text-const_secondary  text-2xl">
              Troškovi isporuke variraju u zavisnosti od kategorije proizvoda:
            </span>{" "}
            <br />
            <br />
            <ul className="pl-10 list-disc">
              <li>
                Naručeni proizvod koji ne ispunjava uslove za besplatnu isporuku
                (izuzev izdvojenih kategorija): Cena isporuke iznosi 350 RSD.
              </li>
              <li>
                Proizvodi iz kategorije Bela Tehnika: Poštarina iznosi 1490 RSD.
              </li>
              <li>
                Proizvodi iz kategorije Televizori: Cena isporuke za proizvode
                iz kategorije Televizori varira u zavisnosti od težine
                proizvoda. Troškovi se kreću od 350 RSD do 1200 RSD, a tačan
                iznos će biti prikazan prilikom poručivanja, uzimajući u obzir
                težinu vašeg uređaja.
              </li>
              <li>
                Proizvodi iz kategorije Klima Uređaji: : Za proizvode iz
                kategorije Klima Uređaji, trošak isporuke iznosi 900 RSD.
              </li>
            </ul>
            <br />
            <br />
            Napomena: Prilikom naručivanja, biće vam jasno naznačeno u koju
            grupu proizvoda spada uređaj za koji ste zainteresovani, kao i tačan
            iznos troškova isporuke.
            <br />
            <br />
            <span className="text-const_secondary  text-2xl">
              Isporuka sa dva izvršioca
            </span>{" "}
            <br />
            Za gabaritne pošiljke, uključujući Belu Tehniku i veće kućne
            aparate, isporuka će biti obavljena od strane dva izvršioca. Oni će
            se pobrinuti za unos uređaja preko praga primaoca, obaviti vizuelni
            pregled uređaja zajedno sa vama, i izneti ambalažu u kojoj je uređaj
            isporučen. Ovo osigurava sigurnu i pažljivu dostavu vaših proizvoda.
          </p>
        </div>
      </div>

      <div className="w-full  grid grid-cols-1 my-20 sm:grid-cols-3">
        <div className="text-justify h-full items-center flex sm:mr-20 col-span-2">
          <p>
            <span className="text-const_secondary  text-2xl">
              Praćenje pošiljke
            </span>{" "}
            <br />
            <br />
            Za praćenje vaše pošiljke nudimo jednostavan proces:
            <br />
            <br />
            Na broj mobilnog telefona koji ste ostavili za kontakt, dobićete SMS
            poruku sa brojem vaše pošiljke i informacijom o kurirskoj službi
            koja će vam je isporučiti.
            <br />
            <br />
            Da biste pratili status vaše pošiljke i imali uvid u njen tok,
            posetite portal brze pošte, odnosno web stranicu kurirske službe.
            <br />
            <br />
            Ukoliko je pošiljka poslata BEX-om kliknite na sledeći link:{" "}
            <Link
              href={"https://www.bex.rs/onlinepracenjeposiljke.php"}
              className="text-const_secondary"
            >
              https://www.bex.rs/onlinepracenjeposiljke.php
            </Link>{" "}
            <br />
            Ukoliko je pošiljka poslata CITY EXPRESS-om kliknite na sledeći
            link:{" "}
            <Link
              href={"https://www.cityexpress.rs/pracenje-posiljaka"}
              className="text-const_secondary"
            >
              {" "}
              https://www.cityexpress.rs/pracenje-posiljaka
            </Link>
            <br />
            <br />
            Unesite broj pošiljke koji ste dobili putem SMS poruke.
            <br />
            <br />
            Na taj način možete lako pratiti kretanje vaše pošiljke i biti
            informisani o njenom trenutnom statusu.
          </p>
        </div>
        <div className="relative w-full h-full">
          <Image
            alt="Hero Banner"
            src={"/assets/isporuka/orders3.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="mt-10 sm:mt-0 object-contain sm:flex z-10"
          />
        </div>
      </div>
      <div className="relative flex justify-center w-full h-full">
          <Image
            alt="Hero Banner"
            src={"/assets/isporuka/orders4.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "200px" }}
            className="mt-10 sm:mt-0 object-contain sm:flex z-10"
          />
        </div>
    </div>
  );
}
