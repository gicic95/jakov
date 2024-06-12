"use client";
import {
  ArrowBigDown,
  ArrowDown,
  ChevronUp,
  FacebookIcon,
  InstagramIcon,
  Mail,
  MapPinIcon,
  Phone,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { business_details, social_media } from "../../../CONFIGURE_HERE";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { FaceIcon } from "@radix-ui/react-icons";
import { useInView } from "react-intersection-observer";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function Footer() {
  const [email, setEmail] = useState("");

  const submitNewsletter = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Unesite validan email");
      return;
    }
    axios
      .post(API_URL + "/newsletter/subscribe", {
        email: email,
      })
      .then((res) => {
        toast(res?.data?.message || "Uspesno ste se prijavili na newsletter!");
        setEmail("");
      })
      .catch((err) => {
        ////console.log(err);
      });
  };
  return (
    <div className=" w-full bg-black ">
      <div
        onClick={() => {
          window?.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
        className="w-full sm:hidden flex py-5 justify-center items-center bg-neutral-200"
      >
        <p>Nazad na vrh</p> <ChevronUp />
      </div>
      <>
        <div className="w-full sm:gap-10  px-3 2xl:px-0  sm:grid mx-auto  max-w-screen-2xl flex flex-col justify-center items-start py-10 sm:grid-cols-2 lg:grid-cols-4  text-white">
          <div className="w-full ">
            <div className=" mb-10 w-3/6 sm:w-4/6 flex sm:block sm:justify-start justify-center sm:ml-0 mx-auto relative">
              <Image
                src={"/assets/footer_logo.webp"}
                alt="24 rate"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className=" object-contain sm:flex z-10"
              />
            </div>
            <div className="hidden sm:block text-sm">
              <p>
                Firma Jakov Sistem D.O.O. osnovana je 2003. godine i bavi se
                online i tradicionalnom prodajom. U svojoj ponudi ima preko
                60,000 proizvoda renomiranih svetskih brendova.
                <br />
                <br />
                Bulevar Nemanjića 25a, PC Zona III, lokal 69, 18000 Niš, Srbija
                <br />
                <br />
                PIB: 104184749 <br />
                <br />
                Matični broj: 20103299
              </p>
            </div>

            <p className="mt-10 text-center text-sm sm:hidden">
              Prijavi se za Newsletter!
            </p>
            <div className="w-full sm:hidden mt-3 relative mb-5">
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Vaš email"
                className=" sm:mb-5 h-10 rounded-lg text-black sm:h-full bg-white"
              />
              <Button
                type="submit"
                onClick={() => submitNewsletter()}
                className="text-white absolute rounded-l-none rounded-r-lg top-0 right-0 bg-const_secondary h-full "
              >
                Prijavi se
              </Button>
            </div>
          </div>

          <div className="w-full flex flex-col justify-start items-start h-full">
            <div className="w-full sm:flex flex-col justify-start items-start h-full hidden">
              <h1 className="text-xl">Kontakt</h1>
              <hr className="border-white w-full mt-3 pt-3" />
              <div className="mt-10 w-full flex flex-col">
                <div className="w-full flex items-center text-sm">
                  <Phone width={17} height={17} />
                  <Link href={"tel:" + business_details.phoneline_1}>
                    <p className="mx-3">{business_details.phoneline_1}</p>
                  </Link>
                  |
                  <Link href={"tel:" + business_details.phoneline_2}>
                    <p className="ml-3">{business_details.phoneline_2}</p>
                  </Link>
                </div>
                <div className="w-full mt-5 flex items-center text-sm">
                  <Smartphone width={17} height={17} />
                  <Link href={"tel:" + business_details.phone}>
                    <p className="mx-3">{business_details.phone}</p>
                  </Link>
                </div>
                <div className="w-full mt-5 flex items-center text-sm">
                  <Mail width={17} height={17} />
                  <Link href={"mailto:" + business_details.email}>
                    <p className="mx-3">{business_details.email}</p>
                  </Link>
                </div>
                <div className="w-full mt-5 flex items-center text-sm">
                  <MapPinIcon width={17} height={17} />
                  <Link href={"/kontakt"}>
                    <p className="mx-3">Kontakt</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Accordion
                defaultValue="item-1"
                type="single"
                className="w-full "
                collapsible
              >
                <AccordionItem value="item-1" className="w-full sm:hidden ">
                  <AccordionTrigger className="flex items-start flex- w-full">
                    <h1 className="text-xl flex justify-between w-full">
                      Kontakt
                    </h1>
                    <ArrowDown />
                  </AccordionTrigger>

                  <hr className="border-white w-full mt-3 pt-3" />
                  <AccordionContent>
                    <div className="mt-5 bg-sky-800 p-4 rounded-lg w-full flex flex-col">
                      <div className="w-full flex items-center text-sm">
                        <Phone width={17} height={17} />
                        <Link href={"tel:" + business_details.phoneline_1}>
                          <p className="mx-3">{business_details.phoneline_1}</p>
                        </Link>
                        |
                        <Link href={"tel:" + business_details.phoneline_2}>
                          <p className="ml-3">{business_details.phoneline_2}</p>
                        </Link>
                      </div>
                      <div className="w-full mt-5 flex items-center text-sm">
                        <Smartphone width={17} height={17} />
                        <Link href={"tel:" + business_details.phone}>
                          <p className="mx-3">{business_details.phone}</p>
                        </Link>
                      </div>
                      <div className="w-full mt-5 flex items-center text-sm">
                        <Mail width={17} height={17} />
                        <Link href={"mailto:" + business_details.email}>
                          <p className="mx-3">{business_details.email}</p>
                        </Link>
                      </div>
                      <div className="w-full mt-5 flex items-center text-sm">
                        <MapPinIcon width={17} height={17} />
                        <Link href={"/kontakt"}>
                          <p className="mx-3">Kontakt</p>
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="w-full flex flex-col justify-start items-start h-full">
            <div className="w-full hidden sm:flex flex-col justify-start items-start h-full">
              <h1 className="text-xl">Korisni Linkovi</h1>
              <hr className="border-white w-full mt-3 pt-3" />

              <Link
                href="/pravila-i-uslovi-koriscenja"
                className="text-sm mt-10"
              >
                Uslovi korišćenja web shop-a
              </Link>
              <Link href="/politika-privatnosti" className="text-sm mt-1">
                Politika privatnosti
              </Link>
              <Link
                href="/pravila-i-uslovi-koriscenja"
                className="text-sm mt-1"
              >
                Prava potrošača
              </Link>
              <Link
                href="/pravila-i-uslovi-koriscenja"
                className="text-sm mt-1"
              >
                Reklamacioni list
              </Link>
              <Link
                href="/pravila-i-uslovi-koriscenja"
                className="text-sm mt-1"
              >
                Raskid ugovora
              </Link>
              <Link href="/pomoc" className="text-sm mt-1">
                Online naručivanje
              </Link>
              <Link href="/nacini-placanja/krediti" className="text-sm mt-1">
                Svi načini plaćanja
              </Link>
              <Link
                href="/uslovi-i-cene-isporuke-robe"
                className="text-sm mt-1"
              >
                Isporuka robe
              </Link>
              <Link href="/posao" className="text-sm mt-1">
                Posao u Jakov Sistemu
              </Link>
            </div>
            <div className="sm:hidden w-full">
              <Accordion type="single" className="w-full" collapsible>
                <AccordionItem value="item-1" className="w-full">
                  <AccordionTrigger className="flex items-start flex- w-full">
                    <h1 className="text-xl flex justify-between w-full">
                      Korisni Linkovi
                    </h1>
                    <ArrowDown />
                  </AccordionTrigger>

                  <hr className="border-white w-full mt-3 pt-3" />
                  <AccordionContent>
                    <div className="flex flex-col bg-sky-800 p-4 rounded-lg">
                      <Link
                        href="/pravila-i-uslovi-koriscenja"
                        className="text-sm"
                      >
                        Uslovi korišćenja web shop-a
                      </Link>
                      <Link
                        href="/politika-privatnosti"
                        className="text-sm mt-1"
                      >
                        Politika privatnosti
                      </Link>
                      <Link
                        href="/pravila-i-uslovi-koriscenja"
                        className="text-sm mt-1"
                      >
                        Prava potrošača
                      </Link>
                      <Link
                        href="/pravila-i-uslovi-koriscenja"
                        className="text-sm mt-1"
                      >
                        Reklamacioni list
                      </Link>
                      <Link
                        href="/pravila-i-uslovi-koriscenja"
                        className="text-sm mt-1"
                      >
                        Raskid ugovora
                      </Link>
                      <Link href="/pomoc" className="text-sm mt-1">
                        Online naručivanje
                      </Link>
                      <Link
                        href="/nacini-placanja/krediti"
                        className="text-sm mt-1"
                      >
                        Svi načini plaćanja
                      </Link>
                      <Link
                        href="/uslovi-i-cene-isporuke-robe"
                        className="text-sm mt-1"
                      >
                        Isporuka robe
                      </Link>
                      <Link href="/posao" className="text-sm mt-1">
                        Posao u Jakov Sistemu
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="w-full flex flex-col justify-start sm:items-start items-center h-full">
            <h1 className="text-xl hidden sm:flex">
              Prijavi se za Newsletter!
            </h1>
            <hr className="border-white hidden sm:flex w-full mt-3 mb-10 pt-3" />
            <div className="w-full hidden sm:flex relative mb-5">
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Vaš email"
                className=" sm:mb-5 h-10 rounded-lg text-black sm:h-full bg-white"
              />
              <Button
                type="submit"
                onClick={() => submitNewsletter()}
                className="text-white absolute rounded-l-none rounded-r-lg top-0 right-0 bg-const_secondary h-full "
              >
                Prijavi se
              </Button>
            </div>
            <p className="mx-auto sm:mx-0 text-sm text-center sm:text-left">
              <span className="font-semibold text-base">
                Radno vreme Call Centra
              </span>
              <br />
              <br />
              Ponedeljak – Petak: od 08h do 19h
              <br />
              Subota: od 09 do 15h
              <br />
              <br />
              <span className="text-xl font-semibold">
                Radno vreme u Beogradu
              </span>{" "}
              <br />
              <br />
              Ponedeljak – Petak: od 08h do 17h
              <br />
              Subota: od 09 do 15h
              <br />
              <br />
              <span className="text-2xl font-semibold">Servis</span> <br />
              <br />
              Ponedeljak – Petak: od 08h do 17h
            </p>
            <br />

            <Link href="http://b2b.jakovsistem.com:8085/">
              <Button className="mx-auto sm:mx-0  text-white bg-const_secondary py-5 px-7 text-lg">
                Prijava za B2B
              </Button>
            </Link>
          </div>
        </div>
        <div className="  w-full flex-col   sm:flex sm:bg-neutral-950">
          <div className="flex justify-center pb-5 gap-3 text-xs text-white items-center">
            <Link href="/sve-akcije">Akcije</Link> |
            <Link href="/nacini-placanja/krediti">24 rate</Link> |
            <Link href="/pravo">Pravna lica</Link> |
            <Link href="/vesti">Vesti</Link> |<Link href="/o-nama">O nama</Link>
          </div>
          <div className="flex w-full mx-auto px-3 sm:px-10 2xl:px-32 pt-5 sm:pt-0 bg-white sm:pb-0 justify-between  items-center sm:flex-row flex-col-reverse gap-5 pb-3">
            <div>
              <p className="text-xs  text-black ">
                Copyright© 2024 Jakov Sistem d.o.o. <br />
                Powered by{" "}
                <span>
                  {" "}
                  <Link
                    href="https://jakovsmartsolutions.com"
                    className="text-const_secondary font-bold"
                  >
                    Jakov Smart Solutions
                  </Link>
                </span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5 items-center">
              <Link href={'/trust'} className="w-[200px] max-h-10 sm:max-h-none flex  justify-center sm:mx-0 mx-auto relative">
                <Image
                  src={"https://verify.etrustmark.rs/cert/image.php"}
                  alt="eTrustmark"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className=" object-contain bg-white py-1 sm:flex z-10"
                />
              </Link>
              <div className="w-full  sm:h-[30px] my-auto gap-4   flex sm:flex-row flex-col justify-center items-center ">
                <div className="flex w-fit h-[20px] justify-center items-center gap-4 sm:h-full">
                  <Image
                    src={"/assets/cards/visa.png"}
                    alt={"card1"}
                    className="object-scale-down w-full "
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "100%", width: "auto" }} // optional
                  />
                  <Image
                    src={"/assets/cards/master.png"}
                    alt={"card2"}
                    className="object-scale-down w-full "
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "100%", width: "auto" }} // optional
                  />
                  <Image
                    src={"/assets/cards/maestro.png"}
                    alt={"card3"}
                    className="object-scale-down w-full  "
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "100%", width: "auto" }} // optional
                  />
                  <Image
                    src={"/assets/cards/dina.png"}
                    alt={"card1"}
                    className="object-scale-down w-full "
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "100%", width: "auto" }} // optional
                  />
                  <Image
                    src={"/assets/cards/american.png"}
                    alt={"card2"}
                    className="object-scale-down w-full "
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "100%", width: "auto" }} // optional
                  />
                </div>
                <Link href={"https://www.bancaintesa.rs/"} className="h-full">
                  {" "}
                  <Image
                    src={"/assets/cards/intesa.png"}
                    alt={"card1"}
                    className=" object-fill w-full "
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "100%", width: "auto" }} // optional
                  />
                </Link>
                <div className="flex h-[36px] w-fit justify-center items-center gap-4 sm:h-full">
                  <Link
                    href={
                      " https://www.mastercard.rs/sr-rs/korisnici/pronadite-karticu.html"
                    }
                    className="h-full"
                  >
                    {" "}
                    <Image
                      src={"/assets/cards/master-check.png"}
                      alt={"card1"}
                      className=" object-scale-down w-full  "
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ height: "100%", width: "auto" }} // optional
                    />
                  </Link>
                  <Link
                    href={
                      " https://rs.visa.com/pay-with-visa/security-and-assistance/protected-everywhere.html "
                    }
                    className="h-full"
                  >
                    {" "}
                    <Image
                      src={"/assets/cards/visa-secure.png"}
                      alt={"card1"}
                      className=" object-scale-down w-full "
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ height: "100%", width: "auto" }} // optional
                    />
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </>
    </div>
  );
}
