import Breadcrumb from "@/components/frequent/BreadCrumb";
import StaticWrapper from "@/components/structure/nacini-placanja/WrapperPaymentMethodStatic";
import { Metadata } from "next";
import Image from "next/image";

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
          <div className="w-full p-5 ">
            <div className="flex justify-start">
              <div className="relative aspect-square min-h-32 h-full">
                <Image
                  alt="Hero Banner"
                  src={"/assets/otp.png"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className=" sm:mt-0    object-contain sm:flex z-10"
                />
              </div>
              <div className="flex flex-col pl-5 ">
                <p className="text-2xl text-const_secondary font-light">
                  KREDIT PREKO OTP BANKE
                </p>
                <br />
                <p>
                  Obavite Vašu kupovinu u maloprodajama Jakov Sistema brzo i
                  jednostavno, bez odlaska u Banku samo uz ličnu kartu i uz
                  mogućnost otplate kredita na24 mesečnih rata bez kamate i
                  učešća.
                </p>
              </div>
            </div>

            <br />

            <div className="grid grid-cols-1 sm:grid-cols-2 px-10">
              <div>
                <p className="font-bold">
                  Neophodni uslovi za dobijaje kredita:
                </p>{" "}
                <br />
                <ul className="list-disc text-sm">
                  <li>
                    Zaposleni mora biti zaposlen na neodređeno ili na određeno
                    ako period kreditiranja ne prelazi period radnog odnosa koji
                    piše u ugovoru između kupca i poslodavca. Mora biti zaposlen
                    minimum 3 meseca na trenutnom radnom mestu radi određivanje
                    proseka plate i utrvrđivanja redovnih primanja.
                  </li>
                  <li>Penzioner mora biti u penziji minimum 3 meseca.</li>
                  <li>
                    Starosna granica penzionera je 70 godina u trenutku
                    izmirenja poslednje rate kredita.
                  </li>
                </ul>
              </div>
              <div className=" mt-10 sm:mt-0 sm:pl-10">
                <p className="font-bold">
                  <h4>Potrebna dokumentacija:</h4>
                </p>{" "}
                <br />
                <ul className="list-disc text-sm">
                  <li>Fotokopija LK prva i druga strana.</li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/static/media/potvrda-o-zaposlenju-i-visini-primanja.5b3aa2e1.pdf"
                    >
                      Potvrda o zaposlenju i visini primanja
                    </a>
                    ,{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/static/media/zahtev-za-kredit.1ab35e94.pdf"
                    >
                      zahtev za kredit
                    </a>
                    ,{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/static/media/administrativna-zabrana.d556e2e5.pdf"
                    >
                      administrativna zabrana
                    </a>
                    , koju popunjava poslodavac –{" "}
                    <strong>za zaposlena lica</strong>.
                  </li>
                  <li>
                    2 poslednja penziona čeka (za poslednja 2 meseca) ili
                    potvrda o visini primanja iz PIO fonda –{" "}
                    <strong>za penzionere</strong>.
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-10 my-20 sm:my-0 flex justify-center items-center min-h-52">
              <table className="w-full text-sm  border-collapse border border-slate-400">
                <tbody>
                  <tr className="font-bold">
                    <td className="border p-2 border-slate-300">
                      Rok otplate : 12 meseci
                    </td>
                    <td className="border p-2 border-slate-300">
                      Rok otplate : 24 meseci
                    </td>
                  </tr>
                  <tr className="text-gray-500">
                    <td className="border p-2 border-slate-300">
                      Nominalna kamatna stopa, fiksna godišnja: 0%
                    </td>
                    <td className="border p-2 border-slate-300">
                      Nominalna kamatna stopa, fiksna godišnja: 0%
                    </td>
                  </tr>
                  <tr className="text-gray-500">
                    <td className="border p-2 border-slate-300">
                      Bez obaveznog učešća
                    </td>
                    <td className="border p-2 border-slate-300">
                      Bez obaveznog učešća
                    </td>
                  </tr>
                  <tr className="text-gray-500">
                    <td className="border p-2 border-slate-300">
                      Bez obaveznog prenosa plate
                    </td>
                    <td className="border p-2 border-slate-300">
                      Bez obaveznog prenosa plate
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-start">
              <div className="relative aspect-square min-h-32 h-full">
                <Image
                  alt="Hero Banner"
                  src={"/assets/stedionica.png"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className=" sm:mt-0    object-contain sm:flex z-10"
                />
              </div>
              <div className="flex flex-col pl-5 ">
                <p className="text-2xl text-const_secondary font-light">
                  KREDIT PREKO BANKE POŠTANSKE ŠTEDIONICE
                </p>
                <br />
                <p>
                  Obavite Vašu kupovinu u Jakov Sistemu brzo i najjednostavnije
                  bilo gde u Srbiji, uz mogućnost otplate kredita na24 mesečnih
                  rata bez kamate i bez učešća.
                </p>
              </div>
            </div>
            <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 px-10">
              <div>
                <p className="font-bold">
                  Neophodni uslovi za dobijaje kredita:
                </p>{" "}
                <br />
                <ul className="list-disc text-sm">
                  <li>
                    Da je u radnom odnosu ili je korisnik prava
                    penzijsko-invalidskog osiguranja (penzioner)
                  </li>
                  <li>Da je korisnik tekućeg računa u Banci</li>
                </ul>
              </div>
              <div>
                <p className="font-bold">Potrebna dokumentacija:</p> <br />
                <ul className="list-disc text-sm">
                  <li>Profaktura izdata od strane Jakov sistema</li>
                </ul>
                <p className="font-bold mt-5">Rok otplate:</p> <br />
                <ul className="list-disc text-sm">
                  <li>6, 12, 18, 24 mesečnih rata bez kamate.</li>
                </ul>
              </div>
            </div>
          </div>
        </StaticWrapper>
      </div>
    </>
  );
}
