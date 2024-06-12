import Breadcrumb from "@/components/frequent/BreadCrumb";
import { Metadata } from "next";
import { SEO } from "../../../../CONFIGURE_HERE";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PaymentMethodsPage() {
  return (
    <>
      <div className=" px-5 font-normal mx-auto flex justify-center flex-col  2xl:px-0 mb-10">
        <div className="w-full bg-white h-full py-10">
          <div className="max-w-screen-2xl w-full mx-auto">
            <Breadcrumb
              list={[
                { link: "/", name: "Početna strana" },
                { link: "#", name: "O nama" },
              ]}
            />
          </div>
        </div>
        <div className="relative sm:pb-10 w-full h-full">
          <Image
            alt="Hero Banner"
            src={"/assets/onama/main.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="mt-10 sm:mt-0 object-contain sm:flex z-10"
          />
        </div>
        <br />

        <div className="col-span-2 max-w-screen-2xl mx-auto flex justify-center flex-col  h-full">
          <b className="font-light text-center mb-10 text-3xl">O nama</b>
          Od firme koja se bavila prodajom računara i računarske opreme,
          osnovane 2003. godine, kompanija Jakov Sistem d.o.o. je značajno
          proširila asortiman svoje ponude i postala lider na tržištu sa velikim
          brojem stalnih klijenata. Kompanija se bavi prodajom IT uređaja,
          televizora, audio i video opreme, bele tehnike, malih kućnih aparata,
          telefonije, sportske opreme, auto opreme i dečjih igračaka.
          <br />
          <br />
          Tokom godina sa klijentima smo brižljivo gradili odnos poverenja i
          poštovanja. Imajući u vidu ubrzan tempo života i stalni nedostatak
          vremena savremenog čoveka, spoznali smo potrebe naših klijenata i
          omogućili da kupovinu obave brzo, kvalitetno i po povoljnim cenama.
          <br />
          <br />
          Pored klasičnih prodavnica omogućilim smo i kupovinu preko web shopa.
          Na taj način, uz pomoć ljubaznog osoblja ili pak jednostavnim klikom,
          klijent dolazi do željenog proizvoda. Istražite našu ponudu i
          postanite jedan od brojnih zadovoljnih kupaca Jakov Sistema.
        </div>

        <div className="w-full grid bg-const_secondary text-white my-10">
          <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-2 xl:grid-cols-4">
            <p className=" font-bold text-3xl flex flex-col py-10 justify-center items-center">
              21
              <span className="text-base font-light">godina sa vama</span>
            </p>

            <p className=" font-bold text-3xl flex flex-col py-10 justify-center items-center">
              2
              <span className="text-base font-light">maloprodajna objekta</span>
            </p>

            <p className=" font-bold text-3xl flex flex-col py-10 justify-center items-center">
              100.000+
              <span className="text-base font-light">proizvoda</span>
            </p>

            <p className=" font-bold text-3xl flex flex-col py-10 justify-center items-center">
              10.000+
              <span className="text-base font-light">
                zadovoljnih klijenata
              </span>
            </p>
          </div>
        </div>

        <b className="font-light mx-auto text-center mb-10 text-3xl">
          Partneri
        </b>

        <div className="max-w-screen-2xl mx-auto grid gap-5 w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
          {parners?.map((parner, index) => {
            return (
              <div key={index} className="w-full group aspect-square relative">
                <Image
                  src={"/" + parner.image}
                  fill
                  className="w-fill h-full object-cover"
                  alt={parner.name}
                />
                <p className="hidden group-hover:block absolute  text-white bottom-0 left-1/2 -translate-x-1/2 bg-neutral-400 w-full text-center">
                  {parner.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const parners = [
  {
    name: "Johnson Electric",
    image: "assets/images/partners/JohnsonElectric.png",
  },
  {
    name: "BizLink",
    image: "assets/images/partners/Bizlink.png",
  },
  {
    name: "Leoni",
    image: "assets/images/partners/Leoni.png",
  },
  {
    name: "Shinwon",
    image: "assets/images/partners/Shinwon.png",
  },
  {
    name: "Fazi",
    image: "assets/images/partners/Fazi.png",
  },
  {
    name: "Mladost",
    image: "assets/images/partners/Mladost.png",
  },
  {
    name: "Niš Ekspres",
    image: "assets/images/partners/Nis-Ekspres.png",
  },
  {
    name: "Ergomade",
    image: "assets/images/partners/Ergomade.png",
  },
  {
    name: "DMV",
    image: "assets/images/partners/DMV.png",
  },
  {
    name: "Pro-Tent",
    image: "assets/images/partners/Pro-Tent.png",
  },
  {
    name: "Olimpias",
    image: "assets/images/partners/olimpias.jpg",
  },
  {
    name: "As Veleprodaja",
    image: "assets/images/partners/As-Veleprodaja.png",
  },
  {
    name: "Jakov Smart Solutions",
    image: "assets/images/partners/Jakov-Smart-Solutions.png",
  },
  {
    name: "IngSoftware",
    image: "assets/images/partners/IngSoftware.png",
  },
  {
    name: "Horisen",
    image: "assets/images/partners/Horisen.png",
  },
  {
    name: "Seavus",
    image: "assets/images/partners/Seavus.png",
  },
  {
    name: "Netico",
    image: "assets/images/partners/Netico.png",
  },
  {
    name: "Tng",
    image: "assets/images/partners/Tng.png",
  },
  {
    name: "Filozofski Fakultet Niš",
    image: "assets/images/partners/Filozofski-Fakultet-Nis.png",
  },
  {
    name: "Medicinski Fakultet Niš",
    image: "assets/images/partners/MedicinskiFakultetNis.png",
  },
  {
    name: "GAF",
    image: "assets/images/partners/GAF.png",
  },
  {
    name: "Poljoprivredni Fakultet Beograd",
    image: "assets/images/partners/Poljoprivredni-Fakultet-Beograd.png",
  },
  {
    name: "PMF Novi Sad",
    image: "assets/images/partners/PMF-Novi-Sad.png",
  },
  {
    name: "Saobraćajni Fakultet Beograd",
    image: "assets/images/partners/Saobracajni-Fakultet-Beograd.png",
  },
  {
    name: "GU Niš",
    image: "assets/images/partners/GU-Nis.jpg",
  },
  {
    name: "GU Bor",
    image: "assets/images/partners/GU-Bor.jpg",
  },
  {
    name: "GU Pirot",
    image: "assets/images/partners/GU-Pirot.jpg",
  },
  {
    name: "GU Sombor",
    image: "assets/images/partners/GU-Sombor.jpg",
  },
  {
    name: "GU Zrenjanin",
    image: "assets/images/partners/GU-Zrenjanin.jpg",
  },
  {
    name: "Opština Bajina Basta",
    image: "assets/images/partners/Opstina-Bajina-Basta.jpg",
  },
  {
    name: "Gradska Biblioteka grada Beograda",
    image: "assets/images/partners/Biblioteka-grada-Beograda.jpg",
  },
  {
    name: "Dom Ućenika Srednjih Škola Beograd",
    image: "assets/images/partners/DomUcenikaSsrednjihSkolaBeograd.jpg",
  },
  {
    name: "Dom Ućenika Srednjih Škola Niš",
    image: "assets/images/partners/DomUcenikaSsrednjihSkolaNis.jpg",
  },
  {
    name: "Gimnazija Bora Stanković Niš",
    image: "assets/images/partners/GimnazijaBoraStankovicNis.jpg",
  },
  {
    name: "SKC Niš",
    image: "assets/images/partners/SKC-Nis.jpg",
  },
  {
    name: "Srednja Tehnička Škola PTT Beograd",
    image: "assets/images/partners/SrednjaTehnickaSkola-PTT-Beograd.jpg",
  },
  {
    name: "Bolnica Prokuplje",
    image: "assets/images/partners/Bolnica-Prokuplje.jpg",
  },
  {
    name: "Dom Zdravlja-Niš",
    image: "assets/images/partners/DomZdravlja-Nis.jpg",
  },
  {
    name: "Dom Zdravlja-Prokuplje",
    image: "assets/images/partners/DomZdravlja-Prokuplje.jpg",
  },
  {
    name: "Institut Niška Banja",
    image: "assets/images/partners/Institut-Niska-Banja.jpg",
  },
  {
    name: "Očna Klinika Maja",
    image: "assets/images/partners/Ocna-klinika-Maja.jpg",
  },
  {
    name: "Vojna Ustanova Dedinje",
    image: "assets/images/partners/Vojna-Ustanova-Dedinje.jpg",
  },
  {
    name: "Dom Kulture Prokuplje",
    image: "assets/images/partners/Dom-Kulture-Prokuplje.jpg",
  },
  {
    name: "GO Crveni Krst Niš",
    image: "assets/images/partners/GO-Crveni-Krst-Nis.jpg",
  },
  {
    name: "Gradska Toplana",
    image: "assets/images/partners/GO-Crveni-Krst-Nis.jpg",
  },
  {
    name: "Nezavisni Sindikat Policije",
    image: "assets/images/partners/NezavisniSindikatPolicije.jpg",
  },
  {
    name: "TZR",
    image: "assets/images/partners/TZR.jpg",
  },
  {
    name: "Vodovod Leskovac",
    image: "assets/images/partners/Vodovod-Leskovac.jpg",
  },
  {
    name: "Agro Top",
    image: "assets/images/partners/AgroTop.jpg",
  },
  {
    name: "Čutura",
    image: "assets/images/partners/Cutura.jpg",
  },
  {
    name: "DynTech",
    image: "assets/images/partners/DynTech.jpg",
  },
  {
    name: "Progetti",
    image: "assets/images/partners/Progetti.jpg",
  },
  {
    name: "Rič",
    image: "assets/images/partners/RIC.jpg",
  },
  {
    name: "Sentronis",
    image: "assets/images/partners/Sentronis.jpg",
  },
];
