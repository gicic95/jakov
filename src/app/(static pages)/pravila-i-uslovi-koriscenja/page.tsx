import Breadcrumb from "@/components/frequent/BreadCrumb";
import Link from "next/link";
import { Metadata } from "next";
import { SEO } from "../../../../CONFIGURE_HERE";



export default function TermsPage() {
  return (
    <div className="max-w-screen-2xl font-normal mx-auto px-5 my-10">
      <Breadcrumb
        list={[
          { link: "/", name: "Početna strana" },
          { link: "#", name: "Pravila i Uslovi korišćenja" },
        ]}
      />

      <h1 className="text-4xl text-center mt-10">
        OPŠTI USLOVI KORIŠĆENJA WEB SHOP-a JAKOV SISTEM D.O.O.
      </h1>

      <div className="font-normal mt-10">
        <p>
          <b>Pun naziv pravnog subjekta:</b> Jakov Sistem d.o.o. <br />
          <b>Poštanska adresa:</b> Bulevar Nemanjića 25a TPC Zona 3 lok 69,
          18000 Niš <br />
          <b>Delatnost i šifra delatnosti:</b> 2620 Proizvodnja računara i
          periferne opreme <br />
          <b>Matični broj:</b> 20103299 <br />
          <b>Poreski broj (PIB):</b> 104184749 <br />
          <b>Web adresa:</b>{" "}
          <a className="text-const_secondary" href="https://jakov.rs/">
            {" "}
            www.jakov.rs
          </a>{" "}
          <br />
          <b>Kontakt telefon:</b>{" "}
          <a className="text-const_secondary" href="tel:0184155222">
            {" "}
            018 41 55 222
          </a>{" "}
          <br />
          <b>Kontakt e-mail:</b> info@jakovsistem.com
        </p>
      </div>

      <div className="font-light mt-10  text-justify  text-neutral-700 text-sm">
        <p className="">
          Ovim Opštim uslovima korišćenja Web shop-a Jakov Sistem Online Shop (u
          daljem tekstu: Opšti uslovi) utvrđuju se uslovi pod kojima se
          ostvaruje pravo na kupovinu i plaćanje proizvoda i usluga iz ponude
          Preduzeća Jakov Sistem d.o.o. putem Web shop-a. <br /> <br /> Web shop
          omogućava punoletnim fizičkim i pravnim licima (u daljem tekstu:
          Korisnici) izbor proizvoda/artikala, uvid u cenu i karakteristike
          istih kao i online kupovinu.
        </p>

        <br />

        <h1 className="text-3xl  font-normal text-left">
          1. REGISTRACIJA KORISNIKA
        </h1>
        <br />
        <p>
          Korisnik se registracijom i kreiranjem naloga prijavljuje za
          korišćenje Web shop-a i ostvaruje pravo da putem Web shop-a vrši
          online kupovinu Proizvoda/Usluga. Korisnik je u postupku kreiranja
          naloga i prilikom svakog kasnijeg unošenja podataka u obavezi da unese
          tačne i potpune osnovne lične podatke, a u vezi sa tim podacima, u
          skladu sa Zakonom o zaštiti podataka o ličnosti, daje izričitu
          saglasnost Jakov Sistem-u da iste obrađuje i čuva za potrebe izvršenja
          njegovih obaveza u vezi sa Proizvodima/Uslugama naručenim putem Web
          shop-a ili njegovih na zakonu zasnovanih obaveza, naplate
          potraživanja, razvoja njegovih usluga i sprečavanja potencijalnih
          zloupotreba.
          <br />
          <br />
          Jakov Sistem d.o.o. će, u skladu sa važećim propisima, preduzeti sve
          raspoložive mere u cilju zaštite podataka o Korisniku, kao i o
          podacima o izvršenoj kupovini. Navedeni podaci će se smatrati
          poslovnom tajnom i nad njima se primenjuje Politika privatnosti ličnih
          podataka.
          <br />
          <br />
          Podaci o Korisniku koje Korisnik dostavi Jakov Sistem-u neće biti
          korišćeni u cilju dostave reklamnih obaveštenja, osim ukoliko Korisnik
          za to prethodno ne da izričitu saglasnost.
          <br />
          <br />
          <h1 className="text-3xl  font-normal">2. CENE</h1>
          <br />
        </p>
        <p>
          Cene Proizvoda/Usluga su izražene u dinarima i iskazane su u bruto
          iznosu (sa svim pripadajućim porezima). Za većinu proizvoda na sajtu
          Korisnik može videti 2 vrste cena.
          <br />
          <br />
          WEB cena – Ova cena važi isključivo za gotovinsko plaćanje u dinarima
          i nije važeća za plaćenje čekovima, platnim karticama ili preko
          kredita, za odloženo plaćanje primenjuje se MP cena.
          <br />
          <br />
          MP cena – Ova cena važi za odloženo plaćenje čekovima, platnim
          karticama ili preko kredita, za gotovinsko plaćanje primenjuje se WEB
          cena.
          <br />
          <br />
          Jakov Sistem d.o.o. može promeniti sadržaj ovog sajta ili proizvode i
          cene navedene na sajtu u bilo koje vreme i bez prethodnog upozorenja.
          <br />
          <br />
          Dostava Proizvoda/Usluga kupljenih putem Web shop-a, a u iznosu preko
          25.000 dinara na adresu Korisnika vrši se o trošku Jakov Sistema. Sve
          naručene proizvode ispod 25.000 dinara, šalju se kurirskom službom a
          trokovi isporuke padaju na teret kupaca. Cene isporuke možete videti
          <Link
            href={"/uslovi-i-cene-isporuke-robe"}
            className="text-const_secondary"
          >
            {" "}
            ovde
          </Link>
          .
        </p>
        <br />
        <br />
        <h1 className="text-3xl  font-normal">3. NAČIN PLAĆANJA</h1>
        <br />
        <p>
          Plaćanje Proizvoda/Usluga može se izvršiti pouzećem ili uplatom na
          račun (pravna lica) Jakov Sistem-a, s tim da u slučaju plaćanja
          naručenih Proizvoda/Usluga pouzećem, Korisnik vrši uplatu porudžbine
          kurirskoj službi, prilikom preuzimanja paketa. Detalje o načinima
          plaćanja možete videti
          <Link
            href={"/nacini-placanja/krediti"}
            className="text-const_secondary"
          >
            {" "}
            ovde
          </Link>
          .
        </p>

        <br />
        <br />
        <h1 className="text-3xl  text-left font-normal">
          4. Pravo kupca/potrošača na “odustanak od ugovora/kupovine”
        </h1>
        <br />
        <p>
          Kupac/Potrošač po Zakonu o zaštiti potrošača ima rok od 14 dana od
          preuzimanja robe da se predomisli i odustane od kupovine a da pritom
          ne mora ni da odgovori zašto. Kupac/Potrošač robu može da vratiti samo
          UZ FISKALNI RAČUN i napisan razlog vraćanja (predomislio se, ne
          odgovara, neispravno primljeno ili bez ikakvog komentara ukoliko ne
          želi da komentariše razlog vraćanja). Ako kupac/potrošač u navedenom
          roku ne želi da zadrži robu, može da izjavi odustanak bez negativnih
          posledica, odnosno samo uz pokrivanje troškova vraćanja/transporta
          robe.
          <br />
          <br />
          Zaključenjem ugovora odnosno kupovinom, kupac se slaže da isključivo
          snosi sve troškove vezane za slanje robe u slučaju servisa,
          reklamacije ili povrata, dok prodavac ne snosi nikakve troškove slanja
          robe radi servisa, reklamacije ili povrata. Roba se upućuje ka adresi
          prodavca ili ovlašćenog servisa/dobavljača. Trgovac nije odgovoran za
          oštećenja nastala usled neadekvatnog pakovanja robe i oštećenja u
          transportu robe (prilikom vraćanja) do mesta kupovine, tu odgovornost
          snosi sam kupac/potrošač.
          <br />
          <br />
          Kupac/Potrošač je u obavezi da robu vrati u originalnu ambalažu uz
          obavezan fiskalni račun, a preporuka je da se napravi kopija fiskalnog
          računa i prateće dokumentacije. Kupac/Potrošač je isključivo odgovoran
          za umanjenu vrednost robe koja nastane kao posledica rukovanja robom
          na način koji nije adekvatan, odnosno prevazilazi ono što je neophodno
          da bi se ustanovili priroda, karakteristike i funkcionalnost robe.
          <br />
          <br />
          Trgovac (Jakov Sistem d.o.o.) je u tom slučaju dužan da bez odlaganja
          izvrši povraćaj uplata koje je primio od potrošača, ne uključujući
          troškove isporuke, a najkasnije u roku od 14 dana od dana kada je
          primio obrazac za odustanak. Osim toga, trgovac mora da mu, bilo
          elektronskom poštom ili na kućnu adresu, dostavi i obrazac za
          odustanak, a dužan je i da mu objasni svu proceduru. Povraćaj
          sredstava vrši se u zavisnosti od načina plaćanja i to: Plaćenih
          pouzećem u gotovini kuriru - u slučaju vraćanja robe i povraćaja
          sredstava kupcu koji je prethodno platio u gotovini kuriru prilikom
          isporuke, delimično ili u celosti, a bez obzira na razlog vraćanja,
          firma Jakov Sistem d.o.o. je u obavezi da povraćaj vrši isključivo
          preko uplate na račun kupcu. Plaćenih nalogom za prenos - u slučaju
          vraćanja robe i povraćaja sredstava kupcu koji je prethodno platio u
          gotovini kuriru prilikom isporuke, delimično ili u celosti, a bez
          obzira na razlog vraćanja, firma Jakov Sistem d.o.o. je u obavezi da
          povraćaj vrši isključivo uplatom na račun kupca.
          <br />
          <br />
          Pravilnik o obliku i sadržini obrasca, kao i sam obrazac možete
          pogledati i preuzeti sa sajta Ministarstva trgovine, turizma i
          telekomunikacija, sa sektora za zaštitu potrošača na{" "}
          <Link
            href={"https://zastitapotrosaca.gov.rs/zakonodavstvo"}
            className="text-const_secondary"
          >
            ovom linku
          </Link>{" "}
          . Formular za raskid ugovora možete preuzeti sa{" "}
          <Link
            href={
              "https://www.jakov.rs/static/media/formular_za_raskid_ugovora.44c03559.pdf"
            }
            className="text-const_secondary"
          >
            ovog linka
          </Link>{" "}
          dostavljanjem na našu adresu:{" "}
          <b>Bulevar Nemanjića 25a, PC Zona III, lokal 69, 18000 Niš, Srbija</b>{" "}
          ili slanjem na mail <b>info@jakovsistem.com</b>
          <br />
          <br />
          Potrošač nema pravo da odustane od ugovora/kupovine u slučaju:
          <br />
          <br />
          • pružanja usluga, nakon što je usluga u potpunosti izvršena, ako je
          pružanje usluge počelo nakon izričite prethodne saglasnosti potrošača
          i uz njegovu potvrdu da zna da gubi pravo na odustanak od ugovora kada
          trgovac u potpunosti izvrši ugovor;
          <br />
          <br />• isporuke robe proizvedene prema posebnim zahtevima potrošača
          ili jasno personalizovane;
          <br />
          <br />• isporuke robe koja je podložna pogoršanju kvaliteta ili ima
          kratak rok trajanja;
          <br />
          <br />• isporuke zapečaćene robe koja se ne može vratiti zbog zaštite
          osetljivih informacija (serijskih brojeva, aktivacionih kodova),
          zaštite zdravlja ili higijenskih razloga i koja je otpečaćena nakon
          isporuke.
        </p>

        <br />
        <br />
        <h1 className="text-3xl  text-left font-normal">
          5. SERVIS i REKLAMACIJA ROBE
        </h1>
        <br />
        <p>
          Reklamacija robe se vrši u objektu prodavca na mestu obeleženom za
          prijem reklamacija. U slučaju da potrošač reklamira artikal nakon
          isteka 14 dana od preuzimanja robe (zakonskog roka za odustanak od
          kupovine), zbog nedostatka ili kvara, kupac se upućuje na redovnu
          proceduru RMA (da artikal sam odnese u ovlašćeni servis naveden na
          garantnom listu ili da artikal donese u najbližu Jakov Sistem d.o.o.
          radnju). U slučaju reklamacije robe, prodavac (Jakov Sistem d.o.o.)
          mora da odgovori za najviše 8 dana, a onda ima dodatnih 30 dana za
          rešavanje reklamacije.
          <br />
          <br />
          Potrošač može da izjavi reklamaciju radi ostvarivanja svojih prava
          usled nesaobraznosti robe po ugovoru i prava po osnovu garancije, kao
          i zbog pogrešno obračunate cene i drugih nedostataka.
          <br />
          <br />
          Ukoliko potrošač šalje robu na reklamaciju kurirskom službom, u
          obavezi je da robu adekvatno i bezbedno upakuje za slanje ako je
          moguće u originalnoj ambalaži. Trgovac nije odgovoran za oštećenja
          nastala usled neadekvatnog pakovanja robe i oštećenja u transportu
          robe (prilikom vraćanja) do mesta reklamacije, tu odgovornost snosi
          sam kupac/potrošač.
          <br />
          <br />
          Potrošač može da izjavi reklamaciju prodavcu radi ostvarivanja svojih
          prava iz čl. 52, 54. i 81. ovog zakona, kao i zbog pogrešno obračunate
          cene i drugih nedostataka.
          <br />
          <br />
          Prodavac je dužan da na prodajnom mestu vidno istakne obaveštenje o
          načinu i mestu prijema reklamacija, kao i da obezbedi prisustvo lica
          ovlašćenog za prijem reklamacija u toku radnog vremena.
          <br />
          <br />
          Potrošač može da izjavi reklamaciju usmeno na prodajnom mestu gde je
          roba kupljena, odnosno drugom mestu koje je određeno za prijem
          reklamacija, telefonom, pisanim putem, elektronskim putem, odnosno na
          trajnom nosaču zapisa, uz dostavu računa na uvid ili drugog dokaza o
          kupovini (kopija računa, slip i sl.)
          <br />
          <br />
          Prodavac je dužan da vodi evidenciju primljenih reklamacija i da je
          čuva najmanje dve godine od dana podnošenja reklamacija potrošača.
          <br />
          <br />
          Prodavac je dužan da potrošaču izda pisanu potvrdu ili elektronskim
          putem potvrdi prijem reklamacije, odnosno saopšti broj pod kojim je
          zavedena njegova reklamacija u evidenciji primljenih reklamacija.
          <br />
          <br />
          Evidencija o primljenim reklamacijama vodi se u obliku ukoričene
          knjige ili u elektronskom obliku i sadrži naročito podatke o
          podnosiocu i datumu prijema reklamacije, podatke o robi, kratkom opisu
          nesaobraznosti i zahtevu iz reklamacije, datumu izdavanja potvrde o
          prijemu reklamacije, odluci o odgovoru kupcu, datumu dostavljanja te
          odluke, ugovorenom primerenom roku za rešavanje na koji se saglasio
          potrošač, načinu i datumu rešavanja reklamacije, kao i informacije o
          produžavanju roka za rešavanje reklamacije.
          <br />
          <br />
          Prodavac je dužan da bez odlaganja, a najkasnije u roku od osam dana
          od dana prijema reklamacije, pisanim ili elektronskim putem odgovori
          potrošaču na izjavljenu reklamaciju. Odgovor prodavca na reklamaciju
          potrošača mora da sadrži odluku da li prihvata reklamaciju,
          izjašnjenje o zahtevu potrošača i konkretan predlog i rok za rešavanje
          reklamacije. Rok ne može da bude duži od 15 dana, odnosno 30 dana za
          tehničku robu i nameštaj, od dana podnošenja reklamacije.
          <br />
          <br />
          Rok za rešavanje reklamacije prekida se kada potrošač primi odgovor
          prodavca i počinje da teče iznova kada prodavac primi izjašnjenje
          potrošača na odgovor prodavca. Potrošač je dužan da se izjasni na
          odgovor prodavca najkasnije u roku od tri dana od prijema odgovora
          prodavca. Smatraće se da potrošač nije saglasan sa predlogom prodavca
          ukoliko se ne izjasni u roku od tri dana.
          <br />
          <br />
          Prodavac je dužan da postupi u skladu sa odlukom, predlogom i rokom za
          rešavanje reklamacije, ukoliko je dobio prethodnu saglasnost
          potrošača.
          <br />
          <br />
          Ukoliko prodavac iz objektivnih razloga nije u mogućnosti da udovolji
          zahtevu potrošača u roku koji je dogovoren, dužan je da o produžavanju
          roka za rešavanje reklamacije obavesti potrošača i navede rok u kome
          će je rešiti, kao i da dobije njegovu saglasnost, što je u obavezi da
          evidentira u evidenciji primljenih reklamacija. Produžavanje roka za
          rešavanje reklamacija moguće je samo jednom.
          <br />
          <br />
          Ukoliko prodavac odbije reklamaciju,
          <br />
          <ul className="list-disc pl-10">
            <li>
              dužan je da pruži odgovarajuće obaveštenje potrošaču u slučaju
              odnijanja reklamacije (obrazloženje prodavca u slučaju
              neprihvatanja reklamacije)
            </li>
            <li>
              dužan je da potrošača sveobuhvatno obavesti o mogućnosti rešavanja
              spora vansudskim putem, ka oi o nadležnim telima za vansudsko
              rešavanje potrošačkih sporova
            </li>
          </ul>
          <br />
          <br />
          Potrošački spor može se rešitipostupkom vansudskog rešavanja
          potrošačkih sporova. Kao trgovac smo dužni da vas obavestimo da smo po
          zakonu obavezni da učestvujemo u ovakvom postupku. Vansudsko rešavanje
          potrošačkih sporova obavlja se na transparentan, efikasan, brz i
          pravičan način pred telom za vansudsko rešavanje potrošačkih sporova.
          Ministrarstvo sačinjava listu tela i javno je objavljuje. Dostupna je
          na adresi www.zastitapotrosaca.gov.rs/ТЕЛА-ЗА-ВРС.
          <br />
          <br />
          Postupak pred telom može da pokrene potrošač samo ukoliko je prethodno
          izjavio reklamaciju ili prigovor trgovcu. Potrošač protekom jedne
          godine od dana (bezuspešnog) podnošenja reklamacije gubi parvo na
          podnošenja predloga za vansudsko rešavanje spora.
          <br />
          <br />
          Vansudsko rešavanje potrošačkog spora može da traje najduže 90 dana od
          dana podnošenja predloga.
          <br />
          <br />
          Vansudsko rešavanje potrošačkih sporova, ne primenjuje se, pored
          ostalog:
          <br />
          <ul className="list-disc pl-10">
            <li>
              U potrošačkim sporovima koji su predmet Zakona o zaštiti
              potrošača, ako je vansudsko rešavanje sporova urađeno posebnim
              zakonom, a naročito u oblasti pružanja elektronskih komunikacionih
              usluga, poštanskih usluga, finansijskih usluga, osim finansijskih
              pogodbi, usluga putovanja;
            </li>
            <li>
              za rešavanje sporova po procedurama koje je ustanovio sam trgovac;
            </li>
            <li>na neposredne pregovore između potrošača i trgovca;</li>
            <li>
              na pokušaj mirenja strana povodom spora u parničnom postupku;
            </li>
            <li>u postupcima koje je trgovac pokrenuo protiv potrošača.</li>
          </ul>
          <br />
          <br />
          Svaka strana u postupku vansudskog rešavanja potrošačkog spora plaća
          svoje troškove (troškovi zastupanja, putni troškovi, i sl.). Rad tela
          za vansudsko rešavanje potrošačkog spora je besplatan za stranke u
          postupku vansudskog rešavanja potrošačkog spora.
          <br />
          <br />
          Prodavac je dužan da isporuči robu koja je saobrazna ugovoru (Član 50.
          stav 1. Zakona o zaštiti potrošača). Pretpostavlja se da je isporučena
          roba saobrazna ugovoru ako odgovara opisu koji je dao prodavac i ako
          ima svojstva robe koju je prodavac pokazao potrošaču kao uzorak ili
          model.
          <br />
          <br />
          Prodavac odgovara za nesaobraznosti isporučene robe (Član 51. stav 1.
          Zakona o zaštiti potrošača) ako je postojala u času prelaska rizika na
          potrošača, bez obzira na to da li je za tu nesaobraznost prodavac
          znao.
          <br />
          <br />
          Prodavac je odgovoran i za nesaobraznost nastalu zbog nepravilnog
          pakovanja, nepravilne instalacije ili montaže koju je izvršio on ili
          lice pod njegovim nadzorom, kao i kada je nepravilna instalacija ili
          montaža robe posledica nedostatka u uputstvu koje je predao potrošaču
          radi samostalne instalacije ili montaže.
          <br />
          <br />
          Prodavac ne odgovara za nesaobraznost ako je u trenutku zaključenja
          ugovora potrošaču bilo poznato ili mu nije moglo ostati nepoznato da
          roba nije saobrazna ugovoru ili ako je uzrok nesaobraznosti u
          materijalu koji je dao potrošač.
          <br />
          <br />
          Prodavac je odgovoran za nesaobraznost robe koja se pojavi u roku od
          dve godine od dana prelaska rizika na potrošača (Član 53. stav 1.
          Zakona o zaštiti potrošača). Ako nesaobraznost nastane u roku od šest
          meseci od dana prelaska rizika na potrošača, pretpostavlja se da je
          nesaobraznost postojala u trenutku prelaska rizika, osim ako je to u
          suprotnosti sa prirodom robe i prirodom određene nesaobraznosti.
          <br />
          <br />
          Nemogućnost potrošača da dostavi prodavcu ambalažu robe ne može biti
          uslov za rešavanje reklamacije niti razlog za odbijanje otklanjanja
          nesaobraznosti.
          <br />
          <br />
          <b className="font-semibold">
            Otklanjanje nesaobraznosti posle isteka zakonskog roka
          </b>
          <br />
          <br />
          Posle isteka zakonskog roka saobraznosti robe (2 godine), potrošač je
          sam odgovoran za slanje robe na servis. U tom slučaju samo on snosi
          troškove slanja i primanja robe i troškove popravke. Spisak servisa
          isporučuje se zajedno sa dokumentacijom koja ide uz robu, a pojedini
          proizvođači daju samo podatke o centralnom ovlašćenom servisu koji
          kupca dalje preusmerava na njemu najbliži ovlašćeni servis. Digi Town
          d.o.o. će rado izaći u susret potrošačima i pomoći im oko informacija
          o dostupnim servisima posle isteka zakonskog perioda saobraznosti.
          <br />
          <br />
          Ukoliko je potrošač za kupljeni proizvod dobio garanciju i ako se
          reklamacija izjavljuje nakon proteka 2 godine od dana kupovine,
          potrošač je dužan da reklamaciju izjavi davaocu garancije.
          <br />
          <br />
          <br />
          <br />
        </p>

        <h1 className="text-3xl  text-left font-normal">
          6. DOSTAVA
        </h1>
        <br />
        <p>
        Dostava naručenih Proizvoda/Usluga putem Web shop-a vrši se na adresu Korisnika koju je Korisnik naveo prilikom prijavljivanja. Dostava je moguća isključivo na teritoriji Republike Srbije.
<br /><br />
Po evidentiranju naručenih Proizvoda/Usluga, vrši se provera podataka za koje trgovac (Jakov Sistem d.o.o.) smatra da su potrebni, poštujući pozitivnopravne propise, i to putem provere kroz bazu podataka ovlašćenih službi Jakov Sistema ili pozivanjem Korisnika, a sve u cilju provere ispunjenosti uslova za izvršenje kupovine. Po izvršenoj proveri podataka i evidentiranju porudžbine, Jakov Sistem d.o.o. dostavlja Korisniku potvrdu o mogućnosti kupovine Proizvoda/Usluga, nakon čega se naručeni Proizvod/Usluga isporučuje Korisniku u roku od dva radna dana.
<br /><br />
Jakov Sistem d.o.o. će kontaktirati Korisnika na dostavljeni kontakt telefon i/ili e-mail adresu, proveriti tačnost adrese na koju je pokušana isporuka i ponoviti postupak isporuke.
<br /><br />
Ukoliko Vam je pošiljka stigla oštećena, neophodno je da u roku od 24 sata kontaktirate kurirsku službu koja je isporučila paket, kako bi napravili zapisnik.
<br /><br />
Ukoliko je roba stigla neoštećena, ali je neispravna, kontaktirajte naš servis kako bismo utvrdili dalje korake u rešavanju problema. Detalje o dostavi i isporuci robe možete pogledati <Link href={"/uslovi-i-cene-isporuke-robe"} className="text-const_secondary">ovde</Link>.
<br /><br />

        </p>
      </div>
    </div>
  );
}
