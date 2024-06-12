"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowDown,
  CreditCard,
  LogIn,
  Store,
  Truck,
  TruckIcon,
} from "lucide-react";
import Link from "next/link";
import { zProduct } from "@/schemas/zFrequent";

export default function Kredit({ product }: { product?: zProduct }) {
  return (
    <>
      <div className="sm:hidden w-full px-5 my-10">
        <Accordion defaultValue="item-1" type="single" className="" collapsible>
          <AccordionItem className="border rounded-md mb-3" value="item-1">
            <AccordionTrigger className="flex font-normal pl-5 relative items-center">
              <ArrowDown
                size={20}
                strokeWidth={1}
                className="absolute right-5"
              />
              <div className="flex justify-center items-center">
                <TruckIcon size={40} strokeWidth={1} color="#0787ea" />
                <p className="text-sm  ml-2">
                  Isporuka na teritoriji cele Srbije
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-5 font-light">
              <p>
                {(() => {
                  if (
                    product?.free_delivery === 1 ||
                    product?.deliveryPrice === 0
                  ) {
                    return (
                      <div>
                        Očekivani rok za isporuku je 1-3 radna dana od datuma
                        poručivanja.
                        <br />
                        <br />
                        Troškovi dostave za ovaj proizvod su besplatni.
                        <br />
                        <br />
                        Za sve dodatne informacije kontaktirajte naš tim u Call
                        Centru pozivom na brojeve 011/630 50 33, 018/41 55 222,
                        066/8 220 220.
                        <br />
                        <br />
                        <Link
                          className="text-const_secondary underline"
                          href={"/uslovi-i-cene-isporuke-robe"}
                        >
                          Saznaj više
                        </Link>
                      </div>
                    );
                  } else if (
                    product?.mainCategory?.[0]?.slug == "frizideri" ||
                    product?.mainCategory?.[0]?.slug == "zamrzivaci" ||
                    product?.mainCategory?.[0]?.slug ==
                      "rashladne-vinske-vitrine" ||
                    product?.mainCategory?.[0]?.slug == "ugradna-rerna" ||
                    product?.mainCategory?.[0]?.slug == "ugradna-ploca" ||
                    product?.mainCategory?.[0]?.slug == "ugradni-frizideri" ||
                    product?.mainCategory?.[0]?.slug == "ugradni-zamrzivaci" ||
                    product?.mainCategory?.[0]?.slug ==
                      "ugradni-nezavisni-setovi" ||
                    product?.mainCategory?.[0]?.slug == "ves-masine" ||
                    product?.mainCategory?.[0]?.slug ==
                      "masina-za-pranje-vesa" ||
                    product?.mainCategory?.[0]?.slug ==
                      "masina-za-susenje-vesa" ||
                    product?.mainCategory?.[0]?.slug ==
                      "masina-za-pranje-i-susenje-vesa" ||
                    product?.mainCategory?.[0]?.slug ==
                      "samostalna-masina-za-pranje-sudova" ||
                    product?.mainCategory?.[0]?.slug ==
                      "ugradna-masina-za-pranje-sudova" ||
                    product?.mainCategory?.[0]?.slug ==
                      "polu-ugradna-masina-za-pranje-sudova" ||
                    product?.mainCategory?.[0]?.slug == "elektricni-sporet" ||
                    product?.mainCategory?.[0]?.slug == "plinski-sporet" ||
                    product?.mainCategory?.[0]?.slug == "kombinovani-sporet" ||
                    product?.mainCategory?.[0]?.slug == "monoblok-pumpe" ||
                    product?.mainCategory?.[0]?.slug ==
                      "sporeti-na-cvrsta-goriva" ||
                    product?.mainCategory?.[0]?.slug == "sporeti-na-pelet" ||
                    product?.mainCategory?.[0]?.slug ==
                      "sporeti-za-etazno-grejanje" ||
                    product?.mainCategory?.[0]?.slug == "split-pumpe" ||
                    product?.mainCategory?.[0]?.slug == "peci-na-pelet" ||
                    product?.mainCategory?.[0]?.slug == "kotlovi-na-pelet" ||
                    product?.mainCategory?.[0]?.slug == "sporeti" ||
                    product?.mainCategory?.[0]?.slug == "elektricni-kotlovi" ||
                    product?.mainCategory?.[0]?.slug == "Kotlovi na drva" ||
                    product?.mainCategory?.[0]?.slug ==
                      "peci-na-cvrsto-gorivo" ||
                    product?.mainCategory?.[0]?.slug ==
                      "peci-za-etazno-grejanje" ||
                    product?.mainCategory?.[0]?.slug == "peci-na-pelet" ||
                    product?.mainCategory?.[0]?.slug == "kamini" ||
                    product?.mainCategory?.[0]?.slug == "elektricni-kamini" ||
                    product?.mainCategory?.[0]?.slug == "ugradni-kamini" ||
                    product?.mainCategory?.[0]?.slug ==
                      "kamini-za-etazno-grejanje" ||
                    product?.mainCategory?.[0]?.slug ==
                      "dodatna-oprema-za-kotlove-i-kamine"
                  ) {
                    return (
                      <div>
                        Isporuka bele tehnike se vrši 2 puta nedeljno.
                        <br />
                        <br />
                        Za sledeće gradove u Srbiji: Novi Sad, Beograd, Velika
                        Plana, Jagodina, Ćuprija, Paraćin, Niš, Aleksinac,
                        Leskovac, Prokuplje, isporuku ovih uređaja vršimo
                        koristeći <b>vlastita prevozna sredstva</b> kako bismo
                        osigurali brzu i sigurnu dostavu.
                        <br />
                        <br />
                        Akcijska cena isporuke po uređaju iznosi povoljnih {` `}
                        {product?.deliveryPrice},00 RSD.
                        <br />
                        <br />
                        Troškovi isporuke za ostale gradove u Srbiji iznose
                        1990,00 RSD i isporuka se vrši brzom poštom.
                        <br />
                        <br />
                        Za sve dodatne informacije kontaktirajte naš tim u Call
                        Centru pozivom na brojeve 011/630 50 33, 018/41 55 222,
                        066/8 220 220.
                        <br />
                        <br />
                      </div>
                    );
                  } else if (
                    product?.mainCategory?.[0]?.slug == "inverter" ||
                    product?.mainCategory?.[0]?.slug == "standardna" ||
                    product?.mainCategory?.[0]?.slug == "pokretne" ||
                    product?.mainCategory?.[0]?.slug == "prozorske" ||
                    product?.mainCategory?.[0]?.slug == "spoljna-jedinica" ||
                    product?.mainCategory?.[0]?.slug == "unutrasnja-jedinica" ||
                    product?.mainCategory?.[0]?.slug == "plafonska" ||
                    product?.mainCategory?.[0]?.slug == "podna" ||
                    product?.mainCategory?.[0]?.slug == "klima-uredaji"
                  ) {
                    return (
                      <div>
                        Očekivani rok za isporuku je 1-3 radna dana od datuma
                        poručivanja.
                        <br />
                        <br />
                        Ukoliko se odlučite za ugradnju klima uređaja preko
                        naših ovlašćenih servisa na teritoriji Beograda i Niša,
                        isporuka klima uređaja je besplatana.
                        <br />
                        <br />
                        <b>Beograd</b> - 3d Klima servis Beograd - 060 41 42 624{" "}
                        <br />
                        <b>Niš</b> - Klima sistemi Petkovic - 060 50 60 177
                        <br />
                        <br />
                        Akcijska cena isporuke klima uređaja za ostale gradove u
                        Srbiji iznosi {product?.deliveryPrice},00 RSD. Isporuka
                        se vrši brzom poštom.
                        <br />
                        <br />
                        Za sve dodatne informacije kontaktirajte naš tim u Call
                        Centru pozivom na brojeve 011/630 50 33, 018/41 55 222,
                        066/8 220 220.
                        <br />
                        <br />
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        Očekivani rok za isporuku je 1-3 radna dana od datuma
                        poručivanja.
                        <br />
                        <br />
                        Troškovi dostave za ovaj proizvod iznose:{" "}
                        {product?.deliveryPrice}.00 RSD
                        <br />
                        <br />
                        Za sve dodatne informacije kontaktirajte naš tim u Call
                        Centru pozivom na brojeve 011/630 50 33, 018/41 55 222,
                        066/8 220 220.
                        <br />
                        <br />
                        <Link
                          className="text-const_secondary underline"
                          href={"/uslovi-i-cene-isporuke-robe"}
                        >
                          Saznaj više
                        </Link>
                      </div>
                    );
                  }
                })()}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="border mb-3 rounded-md" value="item-2">
            <AccordionTrigger className="flex font-normal pl-5 relative items-center">
              <ArrowDown
                size={20}
                strokeWidth={1}
                className="absolute right-5"
              />
              <div className="flex justify-center items-center">
                <CreditCard size={40} strokeWidth={1} color="#0787ea" />
                <p className="text-sm  ml-2">24 RATE BEZ KAMATE</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-5 font-light">
              <p>
                Kupovinom preko kredita do 24 rate bez kamate u bankama
                Poštanske Štedionice i OTP banke.
                <br />
                <br />
                Kupovina kreditnim karticama do 6 ili 12 mesečnih rata u našim
                maloprodajnim centrima.
                <br />
                <br />
                <Link
                  className="font-semibold text-const_secondary"
                  href="/nacini-placanja/krediti"
                >
                  Saznaj više
                </Link>
              </p>
              <br />
              <div className="w-3/5 aspect-square relative">
                <Image
                  src={"/assets/24rate.webp"}
                  sizes="100vw"
                  fill
                  alt="24 rate"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="border mb-3 rounded-md" value="item-3">
            <AccordionTrigger className="flex font-normal pl-5 relative items-center">
              <ArrowDown
                size={20}
                strokeWidth={1}
                className="absolute right-5"
              />
              <div className="flex justify-center items-center">
                <LogIn size={40} strokeWidth={1} color="#0787ea" />
                <p className="text-sm  ml-2">Ulogujte se i ostvarite popust</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-5 font-light">
              <p>
                Ulogujte se na naš sajt i ostvratite popuste i do 20% na
                određene kategorije proizvoda! <br />
                <br /> Za ostvarivanje dodatnih popusta potrebno je da napravite
                Vaš nalog, ostavite svoj mejl i obezbedite sebi najpristupačniju
                cenu. <br />
                <br />
                Za sva dodatna pitanja u vezi sa registracijom na našem sajtu i
                ostvarivanju popusta možete nas kontaktirati pozivom na brojeve
                telefona 011/630 50 33, 018/41 55 222, 066/8 220 220.
              </p>
              <br />
              <Link
                href="/registracija"
                className="w-3/5 flex mx-auto relative"
              >
                <Image
                  src={"/assets/klik_do_popusta.png"}
                  alt="24 rate"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className=" object-contain sm:flex z-10"
                />
              </Link>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem className="border mb-3 rounded-md" value="item-4">
            <AccordionTrigger className="flex font-normal pl-5 relative items-center">
              <ArrowDown
                size={20}
                strokeWidth={1}
                className="absolute right-5"
              />
              <div className="flex justify-center items-center">
                <Store size={40} strokeWidth={1} color="#0787ea" />
                <p className="text-sm  ml-2">Pogledajte naše prodajne centre</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-5 font-light">
              <p>
                <span className="font-bold text-lg text-const_secondary">
                  NIŠ, Zona 3
                </span>
                <br />
                Adresa: Bulevar Nemanjića 25a,
                <br />
                PC Zona 3, lokal 69, 18000 Niš
                <br />
                Email: prodaja@jakovsistem.com
                <br />
                Telefon: 018/41-55-229
                <br />
                Mobilni: 066/8-220-220
                <br />
                <br />
                <span className="font-bold text-lg text-const_secondary">
                  BEOGRAD
                </span>
                <br />
                Adresa: Jurija Gagarina 14g, lokal 13,
                <br />
                naselje Belville, zgrada Maslačak, 11070 Novi Beograd
                <br />
                Email: beograd@jakovsistem.com
                <br />
                Telefon: 011/630-50-33
                <br />
                Mobilni: 066/8-220-220
                <br />
                <br />
                <b className="font-semibold">
                  Dođite na konsultaciju sa našim timom ili da preuzmete željenu
                  pošiljku.
                </b>
                <br />
                <br />
                <Link
                  className="font-semibold text-const_secondary"
                  href="/kontakt"
                >
                  Saznaj više
                </Link>
              </p>
              <br />
              <hr />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="w-full  mt-10 gap-3 px-3 2xl:px-0 grid grid-cols-1 sm:grid-cols-[minmax(200px,_30%)_minmax(35%,_35%)_minmax(35%,_35%)] ">
        <div className=" sm:p-2 rounded-md h-full bg-white border ">
          <div className="h-1/2 pl-3 pt-2 w-full ">
            <p className="text-xs font-semibold">Ne odgovara vam cena?</p>
            <p className="text-xs">
              Upišite cenu koja Vam je odgovarajuća. Potrudićemo sa da Vam damo
              najbolju ponudu.
            </p>
          </div>
          <div className="h-5/12  mt-2 w-full flex  justify-center p-2 gap-3 items-center">
            <div className="w-1/4  h-full">
              <Input
                className="w-full h-full border placeholder:text-[0.7rem]  border-gray-400 bg-white rounded-full"
                placeholder="Cena"
              />
            </div>
            <div className="w-3/4 h-full relative">
              <Input
                className="w-full h-full border placeholder:text-[0.7rem] border-gray-400 bg-white rounded-full"
                placeholder="Email"
              />
              <Button className="w-1/3 absolute top-0 right-0 h-full bg-const_secondary text-white rounded-full">
                Pošalji
              </Button>
            </div>
          </div>
        </div>
        <div className="h-full hidden sm:flex rounded-md ">
          <Image
            alt="Hero Banner"
            src={"/assets/banka-postanska1.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "100%" }}
            className="hidden object-contain sm:flex z-10"
          />
        </div>
        <div className="h-full sm:hidden rounded-md bg-neutral-50 ">
          <Image
            alt="Hero Banner"
            src={"/assets/banka-postanska1.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            objectFit="contain"
            className=" sm:flex z-10"
          />
        </div>
        <div className="h-full  rounded-md  ">
          <Image
            alt="Hero Banner"
            src={"/assets/banka-raiff1.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "100%" }}
            objectFit="contain"
            className="hidden object-contain sm:flex z-10"
          />
        </div>
        <div className="h-full sm:hidden rounded-md bg-neutral-50 ">
          <Image
            alt="Hero Banner"
            src={"/assets/banka-raiff1.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            objectFit="contain"
            className=" sm:flex z-10"
          />
        </div>
      </div>
    </>
  );
}
