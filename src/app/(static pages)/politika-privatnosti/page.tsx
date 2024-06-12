import Breadcrumb from "@/components/frequent/BreadCrumb";
import { Metadata } from "next";
import Link from "next/link";
import { SEO } from "../../../../CONFIGURE_HERE";


export default function TermsPage() {
  return (
    <div className="max-w-screen-2xl font-normal mx-auto px-5 my-10">
      <Breadcrumb
        list={[
          { link: "/", name: "Početna strana" },
          { link: "#", name: "Politika privatnosti" },
        ]}
      />

      <h1 className="text-4xl text-center mt-10">
        OBAVEŠTENJE - POLITIKA PRIVATNOSTI I ZAŠTITA PODATAKA
      </h1>

      <div className="font-light mt-10  text-justify  text-neutral-700 text-sm">
        <h1 className="text-3xl  font-normal text-left">
          1. Osnovne informacije o prikupljanju i obradi podataka o ličnosti
        </h1>
        <br />
        <p>
          Jakov Sistem d.o.o. Niš (u daljem tekstu označen kao: „Jakov Sistem“)
          u cilju izvršavanja obaveza prikupljamo i obrađujemo podatke o
          ličnosti kupaca „Jakov Sistem“ proizvoda na veb portalu www.Jakov.RS
          (u daljem tekstu: “Kupci”).
          <br />
          <br />
          Sve podatke o ličnosti Kupaca prikupljamo i obrađujemo u skladu sa
          načelima obrade kako su ova načela propisana Zakonom o zaštiti
          podataka o ličnosti („Sl. glasnik RS“, br. 87/2018) (u daljem tekstu:
          „Zakon“).
          <br />
          <br />
          <br />
          <br />
        </p>

        <h1 className="text-3xl  font-normal text-left">
          2. Rukovalac podacima o ličnosti
        </h1>
        <br />
        <p>
          Jakov Sistem je rukovalac Vaših podataka o ličnosti prema važećem
          Zakonu koji se primenjuje na teritoriji Republike Srbije, te u tom
          svojstvu određuje svrhu i način obrade Vaših podataka o ličnosti i
          odgovoran je za zakonito prikupljanje i obradu Vaših podataka o
          ličnosti kao Kupaca.
          <br />
          <br />
          Podaci o Jakov Sistemu-u:
          <br />
          <br />
          a. Informacije o identitetu <br />
          <ul className="pl-10 list-disc">
            <li>
              Puno poslovno ime Jakov Sistem-a glasi: Preduzeće za proizvodnju,
              trgovinu na veliko i malo i spoljnu trgovinu Jakov Sistem doo Niš
            </li>
            <li>Matični broj Jakov Sistem-a je: 20103299</li>
            <li>PIB Jakov Sistem-a je: 104184749</li>
            <li>
              Sedište Jakov Sistem-a se nalazi na adresi: Bulevar Nemanjića 25a,
              TPC Zona 3, lok 69, Niš, Republika Srbija.
            </li>
          </ul>
          <br />
          <br />
          b. Kontakt podaci
          <br />
          <ul className="pl-10 list-disc">
            <li>Kontakt telefon: +381 18 41 55 222</li>
            <li>E-mail adresa: info@jakovsistem.com</li>
          </ul>
        </p>
        <br />
        <br />
        <h1 className="text-3xl  font-normal text-left">
          3. Svrha prikupljanja i obrade podataka o ličnosti
        </h1>
        <br />
        <p>
          Svrha prikupljanja i obrade Vaših podataka o ličnosti se odnosi na
          izvršenje ugovornih obaveza iz ugovora o kupovini proizvoda na veb
          portalu www.jakov.rs.
        </p>

        <br />
        <br />
        <h1 className="text-3xl  font-normal text-left">
          4. Pravni osnov prikupljanja i obrade podataka o ličnosti
        </h1>
        <br />
        <p>
          Jakov Sistem prikuplja i obrađuje Vaše podatke o ličnosti na osnovu
          važećih propisa radi ispunjenja napred navedene svrhe iz tačke 3.
          <br />
          <br />
          <ul className="list-disc pl-10">
            <li>
              Pravni osnov prikupljanja i obrade podataka o ličnosti
              <br />
              Jakov Sistem vrši prikupljanje i obradu podataka o ličnosti Kupaca
              u skladu sa članom 12 stav 1 tačka 2) kada je prikupljanje i
              obrada podataka o ličnosti radi izvršenja ugovora zaključenog
              između Jakov Sistem-a i lica na koje se podaci o ličnosti odnose –
              kupca.
            </li>
            <li>
              Vrste podataka o ličnosti koje prikupljamo i obrađujemo
              <br />
              Radi preglednosti, u nastavku Obaveštenja ukazujemo na pregled
              svih vrsta Vaših podataka o ličnosti koje prikupljamo radi
              izvršenja ugovora zaključenog između Jakov Sistem-a i lica na koje
              se podaci o ličnosti odnose – kupca.
              <br />
              Radi izvršenja ugovornih obaveza prikupljamo i obrađujemo Vaše
              podatke o ličnosti poput imena i prezimena, e-mail adrese., broja
              telefona, adrese prebivališta, u slučaju plaćanja preko Jakov
              Sistem veb portala i IP adresa koja, u zavisnosti od toga da li se
              radi o statičkoj ili dinamičkoj IP adresi, može biti podatak o
              ličnosti.
            </li>
          </ul>
        </p>
        <br />

        <br />

        <h1 className="text-3xl  font-normal text-left">
          5. Rok čuvanja podataka o ličnosti
        </h1>
        <br />
        <p>
          Vaši podaci o ličnosti biće čuvani onoliko dugo koliko je potrebno
          radi ispunjenja svrhe iz tačke 3. ovog Obaveštenja, za koju se podaci
          obrađuju, kao i u skladu sa rokovima propisanim važećim propisima.
          <br />
          <br />
          Podaci koji se prikupljaju radi izvršenja zaključenog ugovora sa
          kupcima čuvaju se u periodu od 10 godina (opšti rok za zastarelost
          potraživanja u skladu sa zakonom koji uređuje obligacione odnose), ili
          u drugom roku, ukoliko je drugačiji rok propisan zakonom.
        </p>

        <br />
        <br />

        <h1 className="text-3xl  font-normal text-left">
          6. Kategorije primalaca i obrađivača Vaših podataka o ličnosti
        </h1>
        <br />
        <p>
          Vaši podaci o ličnosti će biti predmet obrade od strane za to
          ovlašćenih lica Jakov Sistem-a.
          <br />
          <br />
          Kategorije obrađivača koje mogu imati pristup podacima o ličnosti mogu
          biti:
          <br />
          <br />
          <ul className="pl-10 list-disc">
            <li>
              lica koja u ime i za račun Rukovaca vrše određene radnje obrade
              (kurirskim službama koje vrše isporuku Jakov Sistem proizvoda,
              računovodstvene agencije koje vrši različite radnje obrada
              računa).
            </li>
            <li>
              privredna društva koja se bave pružanjem IT usluga (održavanje
              informaciono-komunikacionih sistema Jakov Sistem ili koje
              razvijaju internet prezentaciju Jakov Sistem-a);
            </li>
          </ul>
        </p>
        <br />
        <br />

        <h1 className="text-3xl  font-normal text-left">
          7. Vaša prava povodom obrade podataka o ličnosti
        </h1>
        <br />
        <p>
          U skladu sa odredbama Zakona informišemo Vas da imate sledeća prava
          povodom obrade podataka o ličnosti, i to:
          <br />
          <br />
          a. Pravo na pristup Vašim podacima o ličnosti <br />
          Ovo pravo možete ostvariti ukoliko su Vam potrebne informacije:
          <br />
          <br />
          <ul className="pl-10 list-disc">
            <li>o tome da li Jakov Sistem obrađuje Vaše podatke o ličnosti,</li>
            <li>o svrsi obrade,</li>
            <li>o vrstama podataka o ličnosti koji se obrađuju,</li>
            <li>
              o primaocu ili vrstama primalaca kojima su podaci o ličnosti
              otkriveni ili će im biti otkriveni, a posebno primaocima u drugim
              državama ili međunarodnim organizacijama;
            </li>
            <li>
              o predviđenom roku čuvanja podataka o ličnosti, ili ako to nije
              moguće, o kriterijumima za određivanje tog roka;
            </li>
            <li>
              o postojanju prava da se od Jakov Sistem-a zahteva ispravka ili
              brisanje Vaših podataka o ličnosti, prava na ograničenje i prava
              na prigovor na obradu;
            </li>
            <li>
              o pravu da se podnese pritužba Povereniku za informacije od javnog
              značaja i zaštitu podataka o ličnosti (u daljem tekstu označen
              kao: „Poverenik“);
            </li>
            <li>
              o odgovarajućim merama zaštite ukoliko se Vaši podaci o ličnosti
              prenose u drugu državu ili međunarodnu organizaciju.
            </li>
          </ul>
          <br />
          <br />
          b. Pravo na ispravku i dopunu Vaših podataka o ličnosti Ovo pravo
          podrazumeva da se Vaši netačni podaci o ličnosti bez nepotrebnog
          odlaganja isprave, odnosno, da se Vaši nepotpuni podaci o ličnosti
          dopune.
          <br />
          <br />
          c. Pravo na brisanje Vaših podataka o ličnosti Ovo pravo možete
          ostvariti pod uslovom da Vaši podaci o ličnosti više nisu neophodni za
          ostvarivanje svrhe iz tačke 3. ovog Obaveštenja, za koju su
          prikupljeni i obrađivani.
          <br />
          <br />
          d. Pravo na ograničenje obrade Vaših podataka o ličnosti <br />
          Ovo pravo možete ostvariti u sledećim situacijama, i to:
          <br />
          <br />
          <ul className="pl-10 list-disc">
            <li>
              ukoliko osporavate tačnost Vaših podataka o ličnosti, i to u roku
              koji omogućava Jakov Sistem-u proveru tačnosti podataka o
              ličnosti; i
            </li>
            <li>
              Ukoliko Jakov Sistem-u više nisu potrebni Vaši podaci o ličnosti
              za ostvarivanje svrhe obrade iz tačke 3. Obaveštenja, ali ste Vaše
              podatke o ličnosti zatražili u cilju podnošenja, ostvarivanja ili
              odbrane pravnog zahteva. <br />
              Ukoliko obrada Vaših podataka o ličnosti bude ograničena, ti
              podaci se mogu dalje obrađivati samo na osnovu Vašeg pristanka,
              osim ako se radi o njihovom pohranjivanju ili u cilju podnošenja,
              ostvarivanja ili odbrane pravnog zahteva ili zbog zaštite prava
              drugih fizičkih, odnosno pravnih lica ili zbog ostvarivanja
              značajnih javnih interesa.
              <br />
              Pre nego što ograničenje obrade Vaših podataka o ličnosti prestane
              da važi, Jakov Sistem će Vas informisati o prestanku tog
              ograničenja
            </li>
          </ul>
          <br />
          <br />
          e. Pravo na prenosivost podataka o ličnosti <br />
          Ovo pravo Vam omogućava da primite od Jakov Sistem-a sopstvene podatke
          o ličnosti u strukturisanom, uobičajeno korišćenom i elektronski
          čitljivom obliku i da ove podatke prenesete drugom rukovaocu bez
          ometanja od strane Jakov Sistem-a. Ovo pravo podrazumeva i da Vaši
          podaci o ličnosti budu neposredno preneti drugom rukovaocu od strane
          Jakov Sistem-a, ako je to tehnički izvodljivo.
          <br />
          <br />
          f. Pravo da podnesete pritužbu Povereniku <br />
          U cilju zaštite svojih osnovnih prava i sloboda, ovo pravo možete
          ostvariti ukoliko smatrate da se obrada Vaših podataka o ličnosti vrši
          suprotno odredbama Zakona.
          <br />
          <br />
          g. Pravo da zahtevate kopiju podataka o ličnosti koji su predmet
          obrade <br />
          Ovo pravo možete da ostvarite bez plaćanja naknade, osim ukoliko
          zahtevate da Jakov Sistem izradi dodatne kopije kada je Jakov Sistem
          ovlašćen da zahteva naknadu nužnih troškova prouzrokovanih takvih
          zahtevom. Ukoliko zahtev za kopiju dostavite elektronskim putem,
          informacije će Vam biti dostavljene u uobičajeno korišćenom
          elektronskom obliku, osim ako ne zahtevate drugačije dostavljanje.
          <br />
          <br />
        </p>
        <br />
        <br />

        <h1 className="text-3xl  font-normal text-left">
          8. Način ostvarivanja Vaših prava
        </h1>
        <br />
        <p>
          Sva prava navedena u tački 8. ovog Obaveštenja, osim prava na
          podnošenje pritužbe Povereniku, možete ostvariti podnošenjem Zahteva
          za ostvarivanje prava (u daljem tekstu označen kao: „Zahtev“), i to
          tako što ćete Zahtev dostaviti na adresu Jakov Sistem-a: Bulevar
          Nemanjića 25a, TPC Zona 3, Lok 69, Niš, Republika Srbija ili na e-mail
          adresu: info@jakovsistem.com.
          <br />
          <br />
          Jakov Sistem je dužan da Vam pruži informacije o postupanju po Vašem
          Zahtevu bez odlaganja, a najkasnije u roku od 30 dana od dana prijema
          Zahteva. Ovaj rok može biti produžen za još 60 dana ako je to
          neophodno, uzimajući u obzir složenost i broj Zahteva, a u kom slučaju
          ćete o takvom produženju biti blagovremeno obavešteni.
          <br />
          <br />
          U cilju zaštite osnovnih prava i sloboda, možete ostvarivati i pravo
          na podnošenje pritužbe Povereniku Republike Srbije, čiji su kontakt
          podaci:
          <br />
          <ul className="pl-10 list-disc">
            <li>
              Adresa: Bulevar Kralja Aleksandra 15, grad Beograd, Republika
              Srbija
            </li>
            <li>E-mail: office@poverenik.rs</li>
            <li>Kontakt telefon: +381 11 34 08 900</li>
          </ul>
        </p>

        <br />
        <br />

        <h1 className="text-3xl  font-normal text-left">
          9. Prenos Vaših podataka u druge države i/ili međunarodne organizacije
        </h1>
        <br />
        <p>
          Jakov Sistem predstavlja deo grupe privrednih subjekata u skladu sa
          Zakonom i drugim propisima kojima su regulisani privredni subjekti i
          može vršiti prenos Vaših podataka u druge države i/ili međunarodne
          organizacije u skladu sa Zakonom, pri čemu se prenos vrši u skladu sa
          svrhom iz tačke 3. Obaveštenja u druge države i/ili međunarodne
          organizacije u kojima je obezbeđen primereni nivo zaštite Vaših
          podataka o ličnosti i to u državama i međunarodnim organizacijama:{" "}
          <br />
          <ul className="pl-10 list-disc">
            <li>
              koje su članice Konvencije Saveta Evrope o zaštiti lica u odnosu
              na automatsku obradu ličnih podataka;
            </li>
            <li>
              za koje je od strane Evropske Unije utvrđeno da obezbeđuju
              primereni nivo zaštite;
            </li>
            <li>
              sa kojima Republika Srbija ima zaključene međunarodne sporazume o
              prenosu podataka o ličnosti; i
            </li>
            <li>
              koje se nalaze na listi koju utvrđuje Vlada Republike Srbije na
              osnovu kriterijuma i pravila propisanih Zakonom i koja se
              objavljuje u „Službenom glasniku Republike Srbije“.
            </li>
          </ul>
        </p>

        <br />
        <br />
        <h1 className="text-3xl  font-normal text-left">
          10. Posebne mere zaštite podataka
        </h1>
        <br />
        <p>
          U skladu sa Zakonom, Jakov Sistem je preduzeo odgovorajuće tehničke,
          organizacione i kadrovske mere kako bi se dostigli odgovorajući nivoi
          bezbednosti u odnosu na rizike u postupku prikupljanja i obrade Vaših
          podataka o ličnosti.
          <ul className="pl-10 list-disc">
            <li>
              Kontrola pristupa podacima <br />
              Elektronski pristup Vašim podacima o ličnosti koji se čuvaju na
              računarima imaju samo ona lica čiji poslovi zahtevaju pristup
              evidencijama i samo u meri u kojoj to takvi poslovi zahtevaju.
              Elektronski pristup Vašim podacima o ličnosti je dodatno zaštićen
              kontrolom pristupa evidencijama na računaru samo uz poznavanje
              lozinke koja se periodično menja i koja je osmišljena u
              saglasnosti sa važećim standardima i preporukama koji se odnose na
              formiranje lozinke (kombinacija malih i velikih slova, znakova,
              odgovarajuće dužine i sl.)
            </li>

            <li>
              Ograničenje fizičkog pristupa <br />
              Poslovne prostorije u kojima se čuvaju Vaši podaci o ličnosti u za
              te svrhe predviđenim registratorima takođe podležu ograničenju
              pristupa, te su dostupne samo licima ovlašćenim za pristup Vašim
              podacima o ličnosti u meri u kojoj je to neophodno za obavljanje
              njihovog posla.
            </li>
          </ul>
        </p>

        <h1 className="text-3xl  font-normal text-left">
          11. Obrada u druge svrhe
        </h1>
        <br />
        <p>
          Ukoliko nameravamo da Vaše podatke o ličnosti obrađujemo u svrhu koja
          je različita od svrhe iz tačke 3. ovog Obaveštenja, dužni smo da Vam
          pre započinjanja dalje obrade pružimo informacije o toj drugoj svrsi,
          kao i sve ostale bitne informacije koje smo naveli i u ovom
          Obaveštenju.
          <br />
          <br />
          Sve promene Politike privatnosti biće javno dostupne na za to
          predviđenom mestu na veb prezentaciji Jakov Sistem-a, i to adresi
          www.jakov.rs/politika-privatnosti
          <br />
          <br />
        </p>
        <br />
        <br />

        <h1 className="text-3xl  font-normal text-left">
          12. PRAVO KOJE SE PRIMENJUJE I SUDSKA NADLEŽNOST
        </h1>
        <br />
        <p>
          Materijalno pravo koje se primenjuje na obradu podataka o ličnosti
          Kupca, a u vezi obrade od strane Rukovaoca je pravo Republike Srbije,
          Zakon o zaštiti podataka o ličnosti kao i GDPR gde je primenljivo.
          <br />
          <br />
          Za upravne i sudske postupke, mesno su nadležni organi i nadležni
          sudovi Republike Srbije u skladu sa pozitivnim zakonodavstvom te
          države.
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}
