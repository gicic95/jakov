import Breadcrumb from "@/components/frequent/BreadCrumb";
import { Metadata } from "next";
import { SEO } from "../../../../CONFIGURE_HERE";
import Image from "next/image";
import Link from "next/link";

export default function PaymentMethodsPage() {
  return (
    <div className="max-w-screen-2xl p-5 font-normal mx-auto px-5 my-10">
      <Breadcrumb
        list={[
          { link: "/", name: "Početna strana" },
          { link: "#", name: "Pomoć" },
        ]}
      />

      <h1 className="text  uppercase text-4xl text-center mt-10">Pomoć</h1>

      <div className="border mt-10 font-light p-2 sm:p-10">
        <p>
          <span className="text-2xl ">
            KAKO OBAVITI KUPOVINU NA JAKOVSISTEM ONLINE SHOPU
          </span>{" "}
          <br />
          <br />
          Kupovinu na Jakov Sistem Online Shopu možete obaviti na dva
          jednostavna načina: “Naruči telefonom” ili “Dodaj u korpu“. <br />
          <br />
          <span className="text-xl">A) Naruči telefonom</span> <br />
          <br />
          Da bi ste naručili željeni proizvod telefonom potrebno je samo da
          prevučete kursor preko dugmeta “Naruči telefonom” (vidi sliku 1.1) gde
          će Vam se ispisati broj telefona naše službe prodaje. Ukoliko kupovinu
          obavljate svojim pametnim telefonom dovoljno je samo da kliknete na
          pomenuto dugme i vaš telefon će vas automatski odvesti u sistemsku
          aplikaciju za pozivanje.
        </p>
        <div className="relative sm:p-10 w-full h-full">
          <Image
            alt="Hero Banner"
            src={"/assets/pomoc/pomoc1.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="mt-10 sm:mt-0  border border-black object-contain sm:flex z-10"
          />
        </div>
        <p>
          <br />
          <br />
          <span className="text-xl">B) Dodaj u korpu</span> <br />
          <br />
          Željeni proizvod možete dodati u korpu klikom na dugme “Dodaj u
          korpu”. Nakon toga pojaviće se na Vašem ekranu obaveštenje da je
          proizvod dodat u korpu, odakle možete izvršiti i pregled korpe (Slika
          2.1).
        </p>
        <div className="relative sm:p-10 w-full h-full">
          <Image
            alt="Hero Banner"
            src={"/assets/pomoc/pomoc2.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="mt-10 sm:mt-0  border border-black object-contain sm:flex z-10"
          />
        </div>
        <p>
          Kada ste izabrali željene proizvode i želite da završite kupovinu,
          prevucite kursor preko ikonice “Korpa” (Slika 2.2). Pojaviće se prozor
          sa dvema opcijama: “Pregled korpe” i “Završite kupovinu”. Kliknite na
          dugme “Završite kupovinu” (Slika 2.3)
        </p>
        <div className="relative min-h-80 sm:p-10 w-full h-full">
          <Image
            alt="Hero Banner"
            src={"/assets/pomoc/pomoc3.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "100%" }}
            className="mt-10 sm:mt-0  border border-black object-contain sm:flex z-10"
          />
        </div>
        <p>
          (Slika 2.3) U sledećem koraku otvoriće se Formular za završetak
          kupovine (Slika 2.4). Polja označena zvezdicom (*) jesu polja čije je
          popunjavanje obavezno. Nakon popunjavanja obaveznih i željenih polja,
          odabira načina plaćanja i prihvatanja uslova veb mesta, kliknite na
          dugme “Naruči”.
        </p>
        <div className="relative min-h-80 sm:p-10 w-full h-full">
          <Image
            alt="Hero Banner"
            src={"/assets/pomoc/pomoc4.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "100%" }}
            className="mt-10 sm:mt-0  border border-black object-contain sm:flex z-10"
          />
        </div>
        <p>Ukoliko ste pravilno popunili sva obavezna polja, na Vašem ekranu pojaviće se Potvrda porudžbine (Slika 2.5), čime je Vaša online kupovina uspešno završena.</p>
        <div className="relative min-h-80 sm:p-10 w-full h-full">
          <Image
            alt="Hero Banner"
            src={"/assets/pomoc/primer5.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "100%" }}
            className="mt-10 sm:mt-0  border border-black object-contain sm:flex z-10"
          />
        </div>
        <p>Hvala što ste izabrali Jakov Sistem. Tu smo da opravdamo Vaše poverenje.</p>
      </div>
    </div>
  );
}
