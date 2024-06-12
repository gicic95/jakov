import { fetchNews } from "@/app/actions/newsActions";
import NewsPreview from "@/components/home/NewsPreview";
import { zNews } from "@/schemas/zFrequent";
import Image from "next/image";

export default async function Vesti() {
  const news = await getData();

  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-5 min-h-52">
        <div className="relative sm:p-10 w-full h-full">
          <Image
            alt="Hero Banner"
            src={"/assets/vesti/levovo.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="mt-10 sm:mt-0 object-contain sm:flex z-10"
          />
        </div>
        <div className="min-h-52">
          <NewsPreview news={news?.data as zNews[]} />
        </div>
        <div className="min-h-72 w-full grid grid-cols-1 sm:grid-cols-3">
          <div className="w-full p-5">
            <Image
              alt="Hero Banner"
              src={"/assets/vesti/decije-igracke.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mt-10 sm:mt-0 object-contain sm:flex z-10"
            />
            <div className="pl-5 text-sm text-neutral-600  mt-5">
              <ul className="list-disc">
                <li>Rastar RC automobili za nezaboravnu vožnju</li>
                <li>MAGIČNA NEDELJA SNIŽENJA</li>
                <li>Odaberi savršen božićni poklon!</li>
                <li>Poklon vaučer</li>
                <li>VIGA Igračke za sva vremena</li>
              </ul>
            </div>
          </div>
          <div className="w-full p-5">
            <Image
              alt="Hero Banner"
              src={"/assets/vesti/moja-bicikla.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mt-10 sm:mt-0 object-contain sm:flex z-10"
            />
            <div className="pl-5 text-sm text-neutral-600  mt-5">
              <ul className="list-disc">
                <li>8. mart AKCIJA</li>
                <li>ABUS Kacige</li>
                <li>Trening u zatvorenom prostoru</li>
                <li>Velika jesenja akcija</li>
                <li>Voliš biti aktivan i zimi? Kapa glavu čuva</li>
              </ul>
            </div>
          </div>
          <div className="w-full p-5">
            <Image
              alt="Hero Banner"
              src={"/assets/vesti/alati-online.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mt-10 sm:mt-0 object-contain sm:flex z-10"
            />
            <div className="pl-5 mb-10 text-sm text-neutral-600  mt-5">
              <ul className="list-disc">
                <li>Česta pitanja vezana za Li-ion akumulatore</li>
                <li>Alаti kompаnije Einhell zа sve primene</li>
                <li>Motorna testera W-KS 2200 B</li>
                <li>Bušilica zavrtač W-SB 400</li>
                <li>Metabo – Profesionalni alati po akcijskim cenama</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function getData() {
  const res = fetchNews();
  return res;
}
