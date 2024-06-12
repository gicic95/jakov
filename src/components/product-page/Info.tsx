import { zAction, zProduct } from "@/schemas/zFrequent";
import ImagePreview from "./Images";
import Details from "./Details";
import More from "./More";
import Specification from "./details/Specification";
import DescriptionTab from "./details/Description";
import Declaration from "./details/Declaration";
import Link from "next/link";
import Image from "next/image";
import Kredit from "./details/Kredit";
import LoadOnScrollComponent from "../frequent/LoadOnScrollComponent";
import QnA from "./details/QnA";

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

export default function ProductInfo({
  product,
  stickers,
}: {
  product: zProduct;
  stickers?: zAction[];
}) {
  return (
    <>
      <div className="w-full flex flex-col sm:pr-2 sm:flex-row px-0 sm:px-3 gap-3 2xl:px-0  justify-center">
        <div className="w-full sm:w-5/12 ">
          <ImagePreview
            product={product}
            mainImageIndex={product?.images?.findIndex((item) => item.main)}
          />
        </div>

        <div className="w-full bg-white p-5 flex justify-center items-center sm:w-7/12  rounded-xl border">
          <Details product={product} stickers={stickers} />
        </div>
      </div>

      <LoadOnScrollComponent>
        <More
          items={[
            product?.supplier_description || product?.description ? <DescriptionTab
              supplier_description={product?.supplier_description || null}
              key={"first"}
              description={product?.description || null}
              image={product?.images?.[0]?.large || ""}
            /> : null,
            <Specification product={product} key={"second"} />,
            <Declaration product={product} key={"third"} />,
            <div
              className="text-sm sm:w-3/5 mt-10"
              key={"kako_poruciti"}
              dangerouslySetInnerHTML={{
                __html: `<div>
            <h5 class="text-lg font-bold" style={{ fontSize: '28px', marginBottom: '20px' }}>
              Kako poručiti proizvod
            </h5>
            <br/>
            <h6 className="font-bold" style={{ fontSize: '14px', marginBottom: '20px' }}>
              <b>Putem sajta</b>
            </h6>
            <p style={{ fontSize: '14px', marginBottom: '20px' }}>
              Narudžbina proizvoda putem sajta Jakov.RS je jednostavan i
              efikasan proces. Evo koraka koje treba pratiti kako biste
              uspešno poručili proizvod:
              <br />
              <br />
              1. Dodavanje proizvoda u korpu Pretražujte sajt i
              pronađite željeni proizvod. Kada ga pronađete, kliknite na
              dugme "Dodaj u korpu". Proizvod će automatski biti smešten
              u vašu korpu.
              <br />
              <br />
              2. Provera korpe Kada završite sa dodavanjem proizvoda u
              korpu, idite na opciju "Pregled korpe". Tu možete
              pregledati sve proizvode koje ste dodali, proveriti
              količine i cene.
              <br />
              <br />
              3. Unos podataka za dostavu Nakon pregleda korpe,
              nastavite sa procesom naručivanja i kliknite na dugme
              "Završite kupovinu". Unesite podatke potrebne za dostavu,
              uključujući adresu isporuke, kontakt informacije i način
              plaćanja. Obezbedite tačne informacije kako biste
              osigurali uspešnu isporuku.
              <br />
              <br />
              4. Provera porudžbine Pre nego što potvrdite porudžbinu,
              pregledajte unete podatke. Proverite da li su svi
              proizvodi tačni, količine odgovaraju i da li su adresa i
              kontakt podaci ispravni.
              <br />
              <br />
              5. Potvrda porudžbine Kada ste zadovoljni svim detaljima,
              potvrdite porudžbinu na dugme "Naručite".
              <br />
              <br />
              Nakon potvrde porudžbine stićiće vam mail potvrde, i
              očekujte poziv našeg komercijaliste.
            </p>
            <br/>
            <br/>
            <h6 className="font-bold" style={{ fontWeight:'900', fontSize: '14px', marginBottom: '20px' }}>
              <b>Uz pomoć Call Centar podrške</b>
            </h6>
            <p style={{ fontSize: '14px', marginBottom: '20px' }}>
              Poručivanje putem Jakov Call Centra omogućava vam da brzo
              i jednostavno dobijete željene proizvode uz pomoć stručnog
              osoblja. Pratite uputstva operatera i budite spremni
              pružiti sve potrebne informacije kako biste olakšali
              proces poručivanja.
              <br />
              <br />
              1. Poziv Jakov Call Centra Započnite proces pozivanjem
              Jakov Call Centra na jedan od ponuđenih brojeva telefona:
              011 630 50 33; 018 41 55 222; 066 8 220 220.
              <br />
              <br />
              2. Identifikacija i Postavljanje Pitanja Nakon što se javi
              operater, identifikujte se i iznesite svoje zahteve.
              Operater će vam možda postaviti neka dodatna pitanja kako
              bi bolje razumeo vaše potrebe.
              <br />
              <br />
              3. Izbor Proizvoda Recite operateru koji proizvod želite
              poručiti. Možda će vam biti postavljena dodatna pitanja o
              specifikacijama, boji, veličini ili drugim
              karakteristikama proizvoda.
              <br />
              <br />
              4. Unos Podataka za Dostavu Nakon odabira proizvoda,
              operater će zatražiti podatke potrebne za dostavu. To
              obično uključuje vašu adresu isporuke, kontakt telefon i
              eventualno druge relevantne informacije.
              <br />
              <br />
              5. Potvrda Porudžbine Operater će ponoviti detalje
              porudžbine kako biste bili sigurni da su tačni. Potvrdite
              ili ispravite informacije pre nego što završite
              porudžbinu.
              <br />
              <br />
              6. Način Plaćanja Operater će vam pružiti informacije o
              različitim načinima plaćanja. Odlučite se za željeni način
              i pružite potrebne informacije kako biste završili
              transakciju.
              <br />
              <br />
              7. Pratite Status Porudžbine Na kraju razgovora, pitajte
              operatera kako možete pratiti status svoje porudžbine. Ovo
              uključuje informacije o isporuci i očekivanom vremenu
              dostave.
            </p>
          </div>`,
              }}
            />,
            <QnA key={2} slug={product?.slug || ""} />,
            <div key={"promos"} className="grid max-w-[500px] mx-auto sm:gap-0 gap-2 grid-cols-2">
              {stickers?.map((item, index) => {
                return (
                  <div key={index} className=" items-center pt-2 sm:p-2 mt-3">
                    <Link
                      href={"/sve-akcije/" + item?.slug}
                      className="w-full aspect-square  bg-zinc-50 relative  flex justify-center items-center"
                    >
                      <Image
                        src={STORAGE_URL + (item?.desktop_image || "")}
                        alt={"sticker"}
                        fill
                        className="rounded-lg"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>,
          ]}
          names={[
            (product?.description || product?.supplier_description) ? "Opis proizvoda" : "",
            product?.attributes?.length ? "Specifikacije proizvoda":"",
            "Deklaracija",
            "Kako poručiti proizvod",
            "Pitanja i odgovori",
            "Promocije",
          ]}
        />
      </LoadOnScrollComponent>

      <Kredit product={product} />
    </>
  );
}
