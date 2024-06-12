import { Hammer, PackageCheck, PackageOpenIcon, Truck } from "lucide-react";

export const cart_related = {
  post_rate: 349, // POSTARINA ( 0 - Ne prikazuje se na sajtu)
  free_after_item_no: 5, // BESPLATNA DOSTAVA NAKON ___ PRODUKTA ( 0 - Ne prikazuje se na sajtu)
  free_after_price: 0, // BESPLATNA DOSTAVA NAKON ___ DINARA ( 0 - Ne prikazuje se na sajtu)
};

export const social_media = {
  facebook: "https://www.facebook.com/OrlySrbija", // FACEBOOK LINK
  instagram: "https://www.instagram.com/orly_srbija", // INSTAGRAM LINK
  skype: "https://www.youtube.com/watch?v=D58VEfW6qLc", // YOUTUBE LINK
};

export const business_details = {
  phoneline_1: "018 41 55 222",
  phoneline_2: "011 630 50 33",
  phone: "066 8 220 220",
  email: "info@jakovsistem.com",
  address: ""
};

export const benefits = [
  {
    icon: (
      <Truck
        strokeWidth={1}
        className="w-7 font-light h-7 flex justify-center items-center text-black"
      />
    ),
    text: "Besplatna Isporuka na teritoriji Srbije",
    link: "/uslovi-i-cene-isporuke-robe",
  },
  {
    icon: <PackageCheck strokeWidth={1} className="w-7 h-7 text-black" />,
    text: "Prati svoju proudžbinu",
    link: "/uslovi-i-cene-isporuke-robe#shipment_tracking",
  },
  {
    icon: <PackageOpenIcon strokeWidth={1} className="w-7 h-7 text-black" />,
    text: "Šta ako želim da vratim proizvod?",
    link: "/pravila-i-uslovi-koriscenja#buyers_right",
  },
  {
    icon: <Hammer strokeWidth={1} className="w-7 h-7 text-black" />,
    text: "Šta u slučaju oštećenja robe?",
    link: "/pravila-i-uslovi-koriscenja#delivery",
  },
];

export const actions_related = {
  top_desc: `Otkrijte ekskluzivne ponude i uživajte u neodoljivim popustima na našem sajtu! <br/>
  Posetite naš sajt redovno kako biste iskoristili najnovije akcije i obradujte sebe ili dragu osobu posebnim proizvodima po pristupačnim cenama, jer lepota treba biti dostupna svima!`,
};

export const SEO = {
  home_page: `| Jakov Sistem`,
  category_page: ` | Jakov Sistem`,
  product_page: ` | Kupite Online na Jakov Sistem`,
  static_page: ` | Online Shop - Jakov Sistem`,
  default_page: ` | Jakov - Vaš dom`,

  homepage_description: `Najkvalitetniji lakovi za nokte ORLY i ENTITY - američki brendovi u Aya Beauty Room Online Shopu. Profesionalna nega noktiju sa najboljim proizvodima. Pronađite širok asortiman boja i proizvoda za savršene nokte `,
  nacin_placanja_description:
    "Upoznajte različite načine plaćanja na našem sajtu. Bezbedni i jednostavni metodi plaćanja za vašu udobnost. Informacije o opcijama plaćanja, transakcijama i sigurnosti.",
  akcije_description:
    "AKCIJE - Otkrijte ekskluzivne ponude i uživajte u neodoljivim popustima na našem sajtu! Posetite naš sajt redovno kako biste iskoristili najnovije akcije i obradujte sebe ili dragu osobu posebnim proizvodima po pristupačnim cenama, jer lepota treba biti dostupna svima!",
  kontakt_description:
    "Stupite u kontakt sa nama! Imamo otvorena vrata za vaša pitanja, sugestije i saradnju. Popunite obrazac ili nas pozovite direktno. Vaša povratna informacija je ključ našeg uspeha. Radujemo se što ćemo biti u kontaktu s vama!",
  politika_desckription:
    "Otkrijte našu Politiku privatnosti i prava potrošača. Vaša bezbednost i zadovoljstvo su naš prioritet. Saznajte kako tretiramo vaše podatke, štitimo vašu privatnost i obezbeđujemo transparentnost u poslovanju. Pročitajte o vašim pravima kao potrošača i saznajte kako možete ostvariti svoje privilegije. Vaše poverenje nam je od velikog značaja.",
  uslovi_description:
    "Pročitajte naše Uslove korišćenja kako biste razumeli pravila i odredbe vezane za upotrebu našeg sajta. Obećavamo transparentnost i fer pristup našim uslugama. Ako imate pitanja, slobodno nas kontaktirajte.",
};
