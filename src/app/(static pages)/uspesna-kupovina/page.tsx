import Image from "next/image";
import succ_img from "../../../../public/assets/uspesna_kupovina.png";
import sigurna_kupovina from "../../../../public/assets/sigurna_kupovina.png";
import { Lock, LockIcon } from "lucide-react";
import Link from "next/link";
import { SEO, social_media } from "../../../../CONFIGURE_HERE";

export default function SuccessfulOrder() {
  return (
    <>
      {" "}
      <div className="w-full h-14 hidden sm:block  bg-white">
        <div className="max-w-screen-2xl  h-full  flex justify-end items-center m-auto ">
          <Image
            src={sigurna_kupovina}
            width={20}
            height={20}
            className="mr-3"
            alt="successful order"
          />{" "}
          Sigurna kupovina
        </div>
      </div>
      <div className="max-w-screen-xl my-20  flex-col h-fit flex justify-center items-center mx-auto ">
        <Image src={succ_img} width={400} height={400} alt="successful order" />
        <br />
        <br />
        <div className="max-w-screen-lg  mx-auto w-full">
          <p className="px-3 2xl:px-0">
            Poštovani, <br />
            <br />
            Hvala Vam što ste izabrali Jakov.RS za svoju kupovinu!
            <br />
            <br />
            Pobrinućemo se da je obradimo što je brže moguće.
            <br />
            <br />
            <b>NAPOMENA ZA PRAVNA LICA</b>: Uplatu je potrebno izvršiti nalogom
            za prenos na osnovu ove profakture. Račun će Vam biti dostavljen
            prilikom isporuke naručene robe. Molimo Vas da ne vršite uplatu dok
            Vas ne kontaktira naš komercijalista.
          </p>
          <br />
          <div className="p-5 bg-neutral-100">
            <p className="">
              <span className="text-xl font-bold">Šta dalje?</span>
              <br />
              <br />
              <b>Potvrda narudžbine</b>: Uskoro ćete dobiti email sa potvrdom
              narudžbine i detaljima o Vašoj kupovini. <br />
              <br />
              <b>Pratite nas na društvenim mrežama</b>: Budite u toku sa
              najnovijim vestima, ponudama i inspiracijama prateći nas na{" "}
              <Link href={social_media.facebook} className="underline">
                Facebooku
              </Link>
              ,{" "}
              <Link href={social_media.instagram} className="underline">
                Instagramu
              </Link>
              . <br />
              <br />
              <b>Podelite svoje iskustvo</b>: Vaše mišljenje nam je važno!
              Ostavite recenziju ili ocenu kako bismo mogli da unapredimo našu
              uslugu i proizvode. <br />
            </p>
          </div>
          <br />
          <p className="px-3 2xl:px-0">
            Još jednom, hvala što ste izabrali Jakov.RS. Radujemo se budućim
            susretima <br /> i nadamo se da će Vam naši proizvodi doneti radost
            i zadovoljstvo.
          </p>
          <br />

          <p className="px-3 2xl:px-0">
            S poštovanjem, <br />
            <b>Vaš Jakov.RS tim!</b>
          </p>
          <br />
          <br />
          <div className="p-5 bg-neutral-100">
            <p className="">
              Ne zaboravite da redovno posećujete naš online shop, jer možete
              kupiti određene proizvode, koji su u tom trenutku na sniženju, po
              izuzetno povoljnim cenama, a spremili smo Vam i popust i poklone
              za svaku sledeću narudžbinu!
            </p>
          </div>
          <br />
          <br />
          <div className="m-auto w-full px-3 2xl:px-0 justify-center flex p-4">
            <Link href="/" className=" p-3 rounded-md py-4 text-white text-center bg-const_secondary">
              Nazad na početnu stranu
            </Link>
          </div>
          <p className="text-center mx-auto text-sm">
            Ukoliko imate bilo kakva pitanja ili Vam je potrebna dodatna
            podrška, slobodno nas kontaktirajte putem email adrese {' '}
            <Link href={"mailto:info@jakovsistem.com"} className="underline">info@jakovsistem.com</Link> ili na telefon 011 630 50 33, 018 41 55 222,
            066 8 220 220.
          </p>
        </div>
      </div>
    </>
  );
}
 {}