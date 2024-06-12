"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { zProduct } from "@/schemas/zFrequent";
import Link from "next/link";

export default function DeliveryPopUp({ product }: { product: zProduct }) {
  //console.log(product);
  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger>
        <div className="bg-zinc-50 pl-3 flex-col flex  justify-center w-full h-full">
          <b className="font-semibold text-sm text-left">DOSTAVA</b>
          <p className="text-xs">na teritoriji cele Srbije</p>
          <Link
            href={"/uslovi-i-cene-isporuke-robe"}
            className="text-xs text-const_secondary"
          >
            Vidi više
          </Link>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="max-h-72 overflow-y-scroll">
        {(() => {
          if (product?.free_delivery === 1 || product?.deliveryPrice === 0) {
            return (
              <div>
                Očekivani rok za isporuku je 1-3 radna dana od datuma
                poručivanja.
                <br />
                <br />
                Troškovi dostave za ovaj proizvod su besplatni.
                <br />
                <br />
                Za sve dodatne informacije kontaktirajte naš tim u Call Centru
                pozivom na brojeve 011/630 50 33, 018/41 55 222, 066/8 220 220.
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
            product?.mainCategory?.[0]?.slug == "rashladne-vinske-vitrine" ||
            product?.mainCategory?.[0]?.slug == "ugradna-rerna" ||
            product?.mainCategory?.[0]?.slug == "ugradna-ploca" ||
            product?.mainCategory?.[0]?.slug == "ugradni-frizideri" ||
            product?.mainCategory?.[0]?.slug == "ugradni-zamrzivaci" ||
            product?.mainCategory?.[0]?.slug == "ugradni-nezavisni-setovi" ||
            product?.mainCategory?.[0]?.slug == "ves-masine" ||
            product?.mainCategory?.[0]?.slug == "masina-za-pranje-vesa" ||
            product?.mainCategory?.[0]?.slug == "masina-za-susenje-vesa" ||
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
            product?.mainCategory?.[0]?.slug == "sporeti-na-cvrsta-goriva" ||
            product?.mainCategory?.[0]?.slug == "sporeti-na-pelet" ||
            product?.mainCategory?.[0]?.slug == "sporeti-za-etazno-grejanje" ||
            product?.mainCategory?.[0]?.slug == "split-pumpe" ||
            product?.mainCategory?.[0]?.slug == "peci-na-pelet" ||
            product?.mainCategory?.[0]?.slug == "kotlovi-na-pelet" ||
            product?.mainCategory?.[0]?.slug == "sporeti" ||
            product?.mainCategory?.[0]?.slug == "elektricni-kotlovi" ||
            product?.mainCategory?.[0]?.slug == "Kotlovi na drva" ||
            product?.mainCategory?.[0]?.slug == "peci-na-cvrsto-gorivo" ||
            product?.mainCategory?.[0]?.slug == "peci-za-etazno-grejanje" ||
            product?.mainCategory?.[0]?.slug == "peci-na-pelet" ||
            product?.mainCategory?.[0]?.slug == "kamini" ||
            product?.mainCategory?.[0]?.slug == "elektricni-kamini" ||
            product?.mainCategory?.[0]?.slug == "ugradni-kamini" ||
            product?.mainCategory?.[0]?.slug == "kamini-za-etazno-grejanje" ||
            product?.mainCategory?.[0]?.slug ==
              "dodatna-oprema-za-kotlove-i-kamine"
          ) {
            return (
              <div>
                Isporuka bele tehnike se vrši 2 puta nedeljno.
                <br />
                <br />
                Za sledeće gradove u Srbiji: Novi Sad, Beograd, Velika Plana,
                Jagodina, Ćuprija, Paraćin, Niš, Aleksinac, Leskovac, Prokuplje,
                isporuku ovih uređaja vršimo koristeći{" "}
                <b>vlastita prevozna sredstva</b> kako bismo osigurali brzu i
                sigurnu dostavu.
                <br />
                <br />
                Akcijska cena isporuke po uređaju iznosi povoljnih {` `}
                {product?.deliveryPrice},00 RSD.
                <br />
                <br />
                Troškovi isporuke za ostale gradove u Srbiji iznose 1990,00 RSD
                i isporuka se vrši brzom poštom.
                <br />
                <br />
                Za sve dodatne informacije kontaktirajte naš tim u Call Centru
                pozivom na brojeve 011/630 50 33, 018/41 55 222, 066/8 220 220.
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
                Ukoliko se odlučite za ugradnju klima uređaja preko naših
                ovlašćenih servisa na teritoriji Beograda i Niša, isporuka klima
                uređaja je besplatana.
                <br />
                <br />
                <b>Beograd</b> - 3d Klima servis Beograd - 060 41 42 624 <br />
                <b>Niš</b> - Klima sistemi Petkovic - 060 50 60 177
                <br />
                <br />
                Akcijska cena isporuke klima uređaja za ostale gradove u Srbiji
                iznosi {product?.deliveryPrice},00 RSD. Isporuka se vrši brzom
                poštom.
                <br />
                <br />
                Za sve dodatne informacije kontaktirajte naš tim u Call Centru
                pozivom na brojeve 011/630 50 33, 018/41 55 222, 066/8 220 220.
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
                Za sve dodatne informacije kontaktirajte naš tim u Call Centru
                pozivom na brojeve 011/630 50 33, 018/41 55 222, 066/8 220 220.
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
      </HoverCardContent>
    </HoverCard>
  );
}
