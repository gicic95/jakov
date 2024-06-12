"use server";

import { zAction, zProduct } from "@/schemas/zFrequent";
import { zSearch, zSearchResults } from "@/schemas/zSearchBar";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


const test_first_click = JSON.stringify({
  data: {
    results: {
      product: {
        items: [
          {
            image:
              "https://api.jakov.rs/storage/images/products/amd-konfiguracije-medium-9MZYhOL7zTTsTdKuzTrTZPR0UCOFR8d7KI8DmfzT.png.webp",
            price: {
              regular_price: 17490,
              regular_price_with_currency: " RSD17,490.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/amd-konfiguracijei/racunar-ugd-pc-amd-athlon-200ge8gb240gb-notm-symphony-a317",
            name: "Računar UGD PC AMD Athlon 200GE/8GB/240GB no/TM Symphony A317",
            category_names: ["AMD konfiguracije"],
            id: 457075,
            product_type_id: "simple",
            highlighted_name: null,
            sku: "RPC005945A00000",
            short_description: null,
          },
          {
            image:
              "https://api.jakov.rs/storage/images/products/klima-uredjaj-gree-muse-evo-12k-gwh12acc-k6dna-medium-20221216080613000000",
            price: {
              regular_price: 59990,
              regular_price_with_currency: " RSD59,990.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/inverteri/klima-uredaj-comfort-gree-muse-evo-12k",
            name: "Klima uređaj Comfort Gree Muse Evo 12k",
            category_names: ["Inverter"],
            id: 294747,
            product_type_id: "simple",
            highlighted_name: null,
            sku: "BLT004924A00000",
            short_description: null,
          },
          {
            image:
              "https://api.jakov.rs/storage/images/products/samsung-ves-masina-ww80t4020ee1le-medium-20230125134518000000",
            price: {
              regular_price: 42470,
              regular_price_with_currency: " RSD42,470.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/masina-za-pranje-vesai/samsung-ves-masina-ww80t4020ee1le",
            name: "Samsung veš mašina WW80T4020EE1LE",
            category_names: ["Mašina za pranje veša"],
            id: 335270,
            product_type_id: "simple",
            highlighted_name: null,
            sku: "BLT006616A00000",
            short_description: null,
          },
          {
            image:
              "https://api.jakov.rs/storage/images/products/samsung-usisivac-vcc4320s3abol-medium-20230216013350000000",
            price: {
              regular_price: 8790,
              regular_price_with_currency: " RSD8,790.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/usisivacii/samsung-usisivac-vcc4320s3abol",
            name: "SAMSUNG Usisivac VCC4320S3A/BOL",
            category_names: ["Usisivači"],
            id: 346252,
            product_type_id: "simple",
            highlighted_name: null,
            sku: "BLT029158A00000",
            short_description: null,
          },
          {
            image:
              "https://api.jakov.rs/storage/images/products/bojler-termorad-bt-80-beli-vertikalni-prohromski-kazanzapremina-80l-medium-20230509112720000000NyZqN",
            price: {
              regular_price: 21960,
              regular_price_with_currency: " RSD21,960.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/bojleri-za-kupatiloi/bojler-termorad-bt-80-beli-vertikalni-prohromski-kazanzapremina-80l",
            name: "Bojler Termorad BT-80 Beli vertikalni Prohromski kazan/zapremina 80l",
            category_names: ["Bojleri za kupatilo"],
            id: 421062,
            product_type_id: "simple",
            highlighted_name: null,
            sku: "BLT007166A00000",
            short_description: null,
          },
          {
            image:
              "https://api.jakov.rs/storage/images/products/auto-gume-medium-50r0LRH6BC4ijgQxWj7QxckwvcYh9LUMoWrV18sC.png",
            price: {
              regular_price: 6130,
              regular_price_with_currency: " RSD6,130.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/letnje-gume-putnicka-vozilai/auto-gume-tigar-195-65-r15-91v-high-performance-tg",
            name: "Auto gume Tigar 195 / 65 R15 91V HIGH PERFORMANCE TG",
            category_names: ["Letnje gume - Putnička vozila"],
            id: 437251,
            product_type_id: "simple",
            highlighted_name: null,
            sku: "AG005258A00000",
            short_description: null,
          },
          {
            image:
              "https://api.jakov.rs/storage/images/products/hp-laser-107a-printer-medium-20230717114142000000vjDXx",
            price: {
              regular_price: 12570,
              regular_price_with_currency: " RSD12,570.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/laserski-crno-belii/hp-laser-107a-printer",
            name: "HP Laser 107a Printer",
            category_names: ["Laserski crno-beli"],
            id: 444643,
            product_type_id: "simple",
            highlighted_name: null,
            sku: "PRL008725A00000",
            short_description: null,
          },
          {
            image:
              "https://api.jakov.rs/storage/images/products/fen-za-kosu-singer-hd-1711-profesional-snaga-2000w-medium-20221209113406000000",
            price: {
              regular_price: 5110,
              regular_price_with_currency: " RSD5,110.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/fenovi-za-kosui/fen-za-kosu-singer-hd-1711-profesional-snaga-2000w",
            name: "Fen za kosu Singer HD-1711 Profesional snaga 2000W",
            category_names: ["Fenovi za kosu"],
            id: 292108,
            product_type_id: "simple",
            highlighted_name: null,
            sku: "MKA009677A00000",
            short_description: null,
          },
          {
            image:
              "https://api.jakov.rs/storage/images/products/razvodna-kutija-sa-gumenom-zaptivkom-me-k255x200x80mm-12-uvodnica-ip65-40280-medium-20221118143710000000",
            link: "https://jakov.rs/kutije-i-organizatori-za-alati/razvodna-kutija-sa-gumenom-zaptivkom-me-k255x200x80mm-12-uvodnica-ip65-40280",
            discount_percentage: 14,
            category_names: ["Kutije i organizatori za alat"],
            product_type_id: "simple",
            price: {
              regular_price: 1190,
              regular_price_with_currency: " RSD1,190.00",
              special_price: 1020,
              special_price_with_currency: " RSD1,020.00",
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 14,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            name: "Razvodna kutija sa gumenom zaptivkom ME-K255x200x80mm (12 uvodnica) IP65 40280",
            id: 239098,
            highlighted_name: null,
            sku: "TUL011120A00000",
            short_description: null,
          },
          {
            image:
              "https://api.jakov.rs/storage/images/products/video-balun-utp-av-12e-bncutp-na-sraf-40282-medium-20221118143712000000",
            price: {
              regular_price: 230,
              regular_price_with_currency: " RSD230.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/video-nadzori/video-signal-balun-av-12e",
            name: "Video signal balun AV-12E",
            category_names: ["Video nadzor"],
            id: 239100,
            product_type_id: "simple",
            highlighted_name: null,
            sku: "VN001446A00000",
            short_description: null,
          },
          {
            image:
              "https://api.jakov.rs/storage/images/products/ta-u2qc3-car-01-gembird-qc30-brzi-auto-punjac-2xusb-36w-36-65v3a-65-9v2a-9-12v15a-40302-medium-20221118143726000000",
            price: {
              regular_price: 720,
              regular_price_with_currency: " RSD720.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/punjaci-i-baterijei/ta-u2qc3-car-01-gembird-qc30-brzi-auto-punjac-2xusb-36w-36-65v3a-65-9v2a-9-12v15a-40302",
            name: "TA-U2QC3-CAR-01 Gembird QC3.0 brzi auto punjac 2xUSB, 36W 3.6-6.5V/3A, 6.5-9V/2A, 9-12V/1.5A 40302",
            category_names: ["Punjači i baterije"],
            id: 239112,
            product_type_id: "simple",
            highlighted_name: null,
            sku: "BTA001348A00000",
            short_description: null,
          },
          {
            image:
              "https://api.jakov.rs/storage/images/products/pvc-letva-za-klizne-kapije-duzine-1m-40334-medium-20221118143752000000",
            price: {
              regular_price: 1500,
              regular_price_with_currency: " RSD1,500.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/ograde-i-kapijei/pvc-letva-za-klizne-kapije-duzine-1m-40334",
            name: "Pvc letva za klizne kapije duzine 1m 40334",
            category_names: ["Ograde i kapije"],
            id: 239132,
            product_type_id: "simple",
            highlighted_name: null,
            sku: "HA008495A00000",
            short_description: null,
          },
        ],
        title: "Najtraženiji proizvodi",
        position: 1,
      },
    },
  },
});

const test_query = JSON.stringify({
  data: {
    results: {
      popular: {
        items: [
          {
            id: 7,
            name: "As",
            highlighted_name: "<span class='highlightSearchFont'>A</span>s",
            link: "https://www.jakov.rs/athena/?q=as",
            name_urlencoded: "as",
          },
          {
            id: 57,
            name: "Aspirator",
            highlighted_name:
              "<span class='highlightSearchFont'>A</span>spir<span class='highlightSearchFont'>a</span>tor",
            link: "https://www.jakov.rs/athena/?q=Aspirator",
            name_urlencoded: "Aspirator",
          },
          {
            id: 165,
            name: "Am4",
            highlighted_name: "<span class='highlightSearchFont'>A</span>m4",
            link: "https://www.jakov.rs/athena/?q=am4",
            name_urlencoded: "am4",
          },
        ],
        title: "Popular Searches",
        position: 1,
      },
      product: {
        items: [
          {
            short_description: "",
            image:
              "https://api.jakov.rs/storage/images/products/zicni-usb-mikrofon-beli-ap-wumic-w1-medium-20221226134603000000",
            price: {
              regular_price: 14870,
              regular_price_with_currency: " RSD14,870.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/mikrofonii/nzxt-zicni-usb-mikrofon-beli-ap-wumic-w1-nzxt-zicni-usb-mikrofon-beli-ap-wumic-w1",
            name: "NZXT Žični USB mikrofon beli (AP-WUMIC-W1) NZXT Žični USB mikrofon beli (AP-WUMIC-W1) ",
            category_names: ["Mikrofoni"],
            id: 305428,
            product_type_id: "simple",
            highlighted_name:
              "NZXT Žični USB mikrofon beli (<span class='highlightSearchFont'>A</span>P-WUMIC-W1) NZXT Žični USB mikrofon beli (<span class='highlightSearchFont'>A</span>P-WUMIC-W1) ",
            sku: "AG004571A00000",
          },
          {
            short_description: "",
            image:
              "https://api.jakov.rs/storage/images/products/drzac-za-mikrofon-boom-arm-ap-booma-b1-medium-20221226134638000000",
            price: {
              regular_price: 11150,
              regular_price_with_currency: " RSD11,150.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/mikrofonii/drzac-za-mikrofon-boom-arm-ap-booma-b1",
            name: "Držač za mikrofon Boom Arm (AP-BOOMA-B1)",
            category_names: ["Mikrofoni"],
            id: 305434,
            product_type_id: "simple",
            highlighted_name:
              "Drž<span class='highlightSearchFont'>a</span>č z<span class='highlightSearchFont'>a</span> mikrofon Boom <span class='highlightSearchFont'>A</span>rm (<span class='highlightSearchFont'>A</span>P-BOOM<span class='highlightSearchFont'>A</span>-B1)",
            sku: "AG004577A00000",
          },
          {
            short_description: "",
            image:
              "https://api.jakov.rs/storage/images/products/energy-style-1-crne-bubice-sa-mikrofonom-medium-20221226134712000000",
            price: {
              regular_price: 990,
              regular_price_with_currency: " RSD990.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/bubicei/energy-sistem-energy-style-1-crne-bubice-sa-mikrofonom",
            name: "ENERGY SISTEM Energy Style 1+ crne bubice sa mikrofonom",
            category_names: ["Bubice"],
            id: 305439,
            product_type_id: "simple",
            highlighted_name:
              "ENERGY SISTEM Energy Style 1+ crne bubice s<span class='highlightSearchFont'>a</span> mikrofonom",
            sku: "AG004582A00000",
          },
          {
            short_description: "",
            image:
              "https://api.jakov.rs/storage/images/products/expansion-microphones-for-logitech-group-video-conferencing-web-camera-medium-20221226134740000000",
            price: {
              regular_price: 50730,
              regular_price_with_currency: " RSD50,730.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/mikrofonii/expansion-microphones-for-logitech-group-video-conferencing-web-camera",
            name: "Expansion Microphones for Logitech Group Video Conferencing Web camera",
            category_names: ["Mikrofoni"],
            id: 305446,
            product_type_id: "simple",
            highlighted_name:
              "Exp<span class='highlightSearchFont'>a</span>nsion Microphones for Logitech Group Video Conferencing Web c<span class='highlightSearchFont'>a</span>mer<span class='highlightSearchFont'>a</span>",
            sku: "AG004589A00000",
          },
          {
            short_description: "",
            image:
              "https://api.jakov.rs/storage/images/products/energy-urban-3-crvene-bubice-sa-mikrofonom-medium-20221226134814000000",
            price: {
              regular_price: 1420,
              regular_price_with_currency: " RSD1,420.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/bubicei/energy-sistem-energy-urban-3-crvene-bubice-sa-mikrofonom",
            name: "ENERGY SISTEM Energy Urban 3 crvene bubice sa mikrofonom",
            category_names: ["Bubice"],
            id: 305452,
            product_type_id: "simple",
            highlighted_name:
              "ENERGY SISTEM Energy Urb<span class='highlightSearchFont'>a</span>n 3 crvene bubice s<span class='highlightSearchFont'>a</span> mikrofonom",
            sku: "AG004595A00000",
          },
          {
            short_description: "",
            image:
              "https://api.jakov.rs/storage/images/products/h151-stereo-headset-single-jack-slusalice-sa-mikrofonom-crne-medium-20221226134836000000",
            price: {
              regular_price: 2890,
              regular_price_with_currency: " RSD2,890.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/slusalicei/logitech-h151-stereo-headset-single-jack-slusalice-sa-mikrofonom-crne",
            name: "LOGITECH H151 Stereo Headset single jack slušalice sa mikrofonom crne ",
            category_names: ["Slušalice"],
            id: 305456,
            product_type_id: "simple",
            highlighted_name:
              "LOGITECH H151 Stereo He<span class='highlightSearchFont'>a</span>dset single j<span class='highlightSearchFont'>a</span>ck sluš<span class='highlightSearchFont'>a</span>lice s<span class='highlightSearchFont'>a</span> mikrofonom crne ",
            sku: "AG004599A00000",
          },
          {
            short_description: "",
            image:
              "https://api.jakov.rs/storage/images/products/energy-urban-2-crne-bubice-medium-20221226134849000000",
            price: {
              regular_price: 940,
              regular_price_with_currency: " RSD940.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/bubicei/energy-sistem-energy-urban-2-crne-bubice",
            name: "ENERGY SISTEM Energy Urban 2 crne bubice",
            category_names: ["Bubice"],
            id: 305458,
            product_type_id: "simple",
            highlighted_name:
              "ENERGY SISTEM Energy Urb<span class='highlightSearchFont'>a</span>n 2 crne bubice",
            sku: "AG004601A00000",
          },
          {
            short_description: "",
            image:
              "https://api.jakov.rs/storage/images/products/hs-04su-slusalice-sa-mikrofonom-medium-20221226134928000000",
            price: {
              regular_price: 1420,
              regular_price_with_currency: " RSD1,420.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/slusalicei/genius-hs-04su-slusalice-sa-mikrofonom-slusalice-i-mikrofoni",
            name: "GENIUS HS-04SU slušalice sa mikrofonom Slušalice i mikrofoni",
            category_names: ["Slušalice"],
            id: 305464,
            product_type_id: "simple",
            highlighted_name:
              "GENIUS HS-04SU sluš<span class='highlightSearchFont'>a</span>lice s<span class='highlightSearchFont'>a</span> mikrofonom Sluš<span class='highlightSearchFont'>a</span>lice i mikrofoni",
            sku: "AG004607A00000",
          },
          {
            short_description: "",
            image:
              "https://api.jakov.rs/storage/images/products/hs-400a-slusalice-sa-mikrofonom-medium-20221226134944000000",
            price: {
              regular_price: 1180,
              regular_price_with_currency: " RSD1,180.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/slusalicei/hs-400a-slusalice-sa-mikrofonom",
            name: "HS-400A slušalice sa mikrofonom",
            category_names: ["Slušalice"],
            id: 305466,
            product_type_id: "simple",
            highlighted_name:
              "HS-400<span class='highlightSearchFont'>A</span> sluš<span class='highlightSearchFont'>a</span>lice s<span class='highlightSearchFont'>a</span> mikrofonom",
            sku: "AG004609A00000",
          },
          {
            short_description: "",
            image:
              "https://api.jakov.rs/storage/images/products/zone-wireless-bt-slusalice-sa-mikrofonom-medium-20221226135037000000",
            price: {
              regular_price: 40010,
              regular_price_with_currency: " RSD40,010.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/slusalicei/zone-wireless-bt-slusalice-sa-mikrofonom",
            name: "Zone Wireless BT slušalice sa mikrofonom",
            category_names: ["Slušalice"],
            id: 305479,
            product_type_id: "simple",
            highlighted_name:
              "Zone Wireless BT sluš<span class='highlightSearchFont'>a</span>lice s<span class='highlightSearchFont'>a</span> mikrofonom",
            sku: "AG004622A00000",
          },
          {
            short_description: "",
            image:
              "https://api.jakov.rs/storage/images/products/fh200i-fstyler-crnesive-slusalice-sa-mikrofonom-medium-20221226135138000000",
            price: {
              regular_price: 1890,
              regular_price_with_currency: " RSD1,890.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/slusalicei/a4-tech-fh200i-fstyler-crnesive-slusalice-sa-mikrofonom",
            name: "A4 TECH FH200i FSTYLER crne/sive slušalice sa mikrofonom ",
            category_names: ["Slušalice"],
            id: 305488,
            product_type_id: "simple",
            highlighted_name:
              "<span class='highlightSearchFont'>A</span>4 TECH FH200i FSTYLER crne/sive sluš<span class='highlightSearchFont'>a</span>lice s<span class='highlightSearchFont'>a</span> mikrofonom ",
            sku: "AG004631A00000",
          },
          {
            short_description: "",
            image:
              "https://api.jakov.rs/storage/images/products/h150-stereo-headset-slusalice-sa-mikrofonom-bele-medium-20221226135159000000",
            price: {
              regular_price: 2980,
              regular_price_with_currency: " RSD2,980.00",
              special_price: null,
              special_price_with_currency: null,
              loyalty_price: null,
              loyalty_price_with_currency: null,
              discount_percentage: 0,
              custom_field_prices: null,
              best_month_price: null,
              best_month_price_with_currency: null,
            },
            link: "https://jakov.rs/slusalicei/h150-stereo-headset-slusalice-sa-mikrofonom-bele",
            name: "H150 Stereo Headset slušalice sa mikrofonom bele",
            category_names: ["Slušalice"],
            id: 305492,
            product_type_id: "simple",
            highlighted_name:
              "H150 Stereo He<span class='highlightSearchFont'>a</span>dset sluš<span class='highlightSearchFont'>a</span>lice s<span class='highlightSearchFont'>a</span> mikrofonom bele",
            sku: "AG004635A00000",
          },
        ],
        title: "Najtraženiji proizvodi",
        position: 2,
      },
      category: {
        items: [
          {
            id: 999,
            name: "Auto i Moto oprema > Auto oprema > Punjači akumulatora",
            highlighted_name:
              "<span class='highlightSearchFont'>A</span>uto i Moto oprem<span class='highlightSearchFont'>a</span> > <span class='highlightSearchFont'>A</span>uto oprem<span class='highlightSearchFont'>a</span> > Punj<span class='highlightSearchFont'>a</span>či <span class='highlightSearchFont'>a</span>kumul<span class='highlightSearchFont'>a</span>tor<span class='highlightSearchFont'>a</span>",
            link: "https://jakov.rs/punjaci-akumulatora",
            image: null,
          },
          {
            id: 96,
            name: "IT Shop > Desktop računari > All-in-One",
            highlighted_name:
              "IT Shop > Desktop r<span class='highlightSearchFont'>a</span>čun<span class='highlightSearchFont'>a</span>ri > <span class='highlightSearchFont'>A</span>ll-in-One",
            link: "https://jakov.rs/all-in-one",
            image: null,
          },
          {
            id: 93,
            name: "IT Shop > Desktop računari > AMD konfiguracije",
            highlighted_name:
              "IT Shop > Desktop r<span class='highlightSearchFont'>a</span>čun<span class='highlightSearchFont'>a</span>ri > <span class='highlightSearchFont'>A</span>MD konfigur<span class='highlightSearchFont'>a</span>cije",
            link: "https://jakov.rs/amd-konfiguracije",
            image: null,
          },
          {
            id: 86,
            name: "Audio oprema",
            highlighted_name:
              "<span class='highlightSearchFont'>A</span>udio oprem<span class='highlightSearchFont'>a</span>",
            link: "https://jakov.rs/audio-oprema",
            image: null,
          },
        ],
        title: "Popular Categories",
        position: 3,
      },
    },
    tabs: {
      count: {
        "45": 0,
        "46": 0,
        "69": 0,
        "71": 0,
      },
      preselected: 0,
    },
  },
});

const test_search = JSON.stringify({
  "products": {
      "results": [
          {
              "short_description": "",
              "link": "https://jakov.rs/pci-express-nvidiai/svga-afox-geforce-gtx1650-4gb-ddr6-af1650-4096d6h3-v4",
              "description": "",
              "availability": 1,
              "category_names": [
                  "PCI Express nVidia"
              ],
              "price": {
                  "regular_price": 19470,
                  "regular_price_with_currency": " RSD19,470.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 498838,
              "sku": "GRV002990A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/svga-afox-geforce-gtx1650-4gb-ddr6-af1650-4096d6h3-v4-medium-20240319115340000000gQpRu.webp",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "SVGA AFOX Geforce GTX1650 4GB DDR6 AF1650-4096D6H3-V4",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  130
              ],
              "highlighted_name": "SVGA <span class='highlightSearchFont'>AF</span>OX Geforce GTX1650 4GB DDR6 <span class='highlightSearchFont'>AF</span>1650-4096D6H3-V4"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/pci-express-nvidiai/svga-afox-geforce-gt710-2gb-ddr3-af710-2048d3l5-v3",
              "description": "",
              "availability": 1,
              "category_names": [
                  "PCI Express nVidia"
              ],
              "price": {
                  "regular_price": 5200,
                  "regular_price_with_currency": " RSD5,200.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 498841,
              "sku": "GRV002993A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/svga-afox-geforce-gt710-2gb-ddr3-af710-2048d3l5-v3-medium-20240319115347000000ttyiG.webp",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "SVGA AFOX Geforce GT710 2GB DDR3, AF710-2048D3L5-V3",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  130
              ],
              "highlighted_name": "SVGA <span class='highlightSearchFont'>AF</span>OX Geforce GT710 2GB DDR3, <span class='highlightSearchFont'>AF</span>710-2048D3L5-V3"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/pci-express-nvidiai/svga-afox-geforce-g210-1gb-ddr3-lowprofile-af210-1024d3l5",
              "description": "",
              "availability": 1,
              "category_names": [
                  "PCI Express nVidia"
              ],
              "price": {
                  "regular_price": 4000,
                  "regular_price_with_currency": " RSD4,000.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 498839,
              "sku": "GRV002991A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/svga-afox-geforce-g210-1gb-ddr3-lowprofile-af210-1024d3l5-medium-20240319115342000000OFNPN.webp",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "SVGA AFOX Geforce G210 1GB DDR3 LowProfile, AF210-1024D3L5",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  130
              ],
              "highlighted_name": "SVGA <span class='highlightSearchFont'>AF</span>OX Geforce G210 1GB DDR3 LowProfile, <span class='highlightSearchFont'>AF</span>210-1024D3L5"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/pci-express-amdi/svga-afox-radeon-rx580-8gb-256bit-afrx580-8192d5h3-v3",
              "description": "",
              "availability": 1,
              "category_names": [
                  "PCI Express AMD",
                  "PCI Express nVidia"
              ],
              "price": {
                  "regular_price": 14750,
                  "regular_price_with_currency": " RSD14,750.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 498840,
              "sku": "GRV002992A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/svga-afox-radeon-rx580-8gb-256bit-afrx580-8192d5h3-v3-medium-20240319115344000000IQZQk.webp",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "SVGA AFOX Radeon RX580 8GB 256bit, AFRX580-8192D5H3-V3",
              "attributes": [
                  {
                      "seo_url": "8-gb",
                      "hash_code": "",
                      "original_value": "2425",
                      "name": "kapacitet_memorije",
                      "label": "8 GB",
                      "value": "2425"
                  }
              ],
              "type": "product",
              "category_ids": [
                  128,
                  130
              ],
              "highlighted_name": "SVGA <span class='highlightSearchFont'>AF</span>OX Radeon RX580 8GB 256bit, <span class='highlightSearchFont'>AF</span>RX580-8192D5H3-V3"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/klestai/klesta-za-blankiranje-af6-zd",
              "description": "",
              "availability": 1,
              "discount_percentage": 16,
              "category_names": [
                  "Klešta"
              ],
              "price": {
                  "regular_price": 450,
                  "regular_price_with_currency": " RSD450.00",
                  "special_price": 380,
                  "special_price_with_currency": " RSD380.00",
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 16,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 219337,
              "sku": "TUL010439A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/klesta-za-blankiranje-af6-zd-medium-20221116122512000000",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "Klešta za blankiranje AF6-ZD",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  478
              ],
              "highlighted_name": "Klešta za blankiranje <span class='highlightSearchFont'>AF</span>6-ZD"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/preciscivaci-vazduhai/af-30-preciscivac-vazduha",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Prečišćivači vazduha"
              ],
              "price": {
                  "regular_price": 34480,
                  "regular_price_with_currency": " RSD34,480.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 481533,
              "sku": "BLT036944A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/af-30-preciscivac-vazduha-medium-20240110190329000000UQlZw.webp",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "AF 30 - Prečišćivač vazduha",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  371
              ],
              "highlighted_name": "<span class='highlightSearchFont'>AF</span> 30 - Prečišćivač vazduha"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/preciscivaci-vazduhai/af-50-preciscivac-vazduha",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Prečišćivači vazduha"
              ],
              "price": {
                  "regular_price": 57790,
                  "regular_price_with_currency": " RSD57,790.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 481534,
              "sku": "BLT036945A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/af-50-preciscivac-vazduha-medium-20240110190344000000nhGNQ.webp",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "AF 50 - Prečišćivač vazduha",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  371
              ],
              "highlighted_name": "<span class='highlightSearchFont'>AF</span> 50 - Prečišćivač vazduha"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/preciscivaci-vazduhai/preciscivac-vazduha-karcher-af20",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Prečišćivači vazduha"
              ],
              "price": {
                  "regular_price": 18220,
                  "regular_price_with_currency": " RSD18,220.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 488448,
              "sku": "BLT037478A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/preciscivaci-vazduha-medium-E63FuJE9CLfEfmw3z4z6Kjxzhi6OhYTB74PhAA7t.jpg.webp",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "Prečišćivač vazduha Karcher AF20",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  371
              ],
              "highlighted_name": "Prečišćivač vazduha Karcher <span class='highlightSearchFont'>AF</span>20"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/nintendoi/switch-world-war-z-aftermath",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Nintendo"
              ],
              "price": {
                  "regular_price": 2290,
                  "regular_price_with_currency": " RSD2,290.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 349897,
              "sku": "JP003229A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/switch-world-war-z-aftermath-medium-20230224091329000000",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "Switch World War Z: Aftermath",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  219
              ],
              "highlighted_name": "Switch World War Z: <span class='highlightSearchFont'>Af</span>termath"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/ostalo-mrezna-opremai/maxlink-afa-2-passive-poe-extractor",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Ostalo - mrežna oprema"
              ],
              "price": {
                  "regular_price": 270,
                  "regular_price_with_currency": " RSD270.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 448436,
              "sku": "NDP006744A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/maxlink-afa-2-passive-poe-extractor-medium-20230810065132000000EvIwV",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "MaxLink AFA-2 Passive PoE extractor",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  250
              ],
              "highlighted_name": "MaxLink <span class='highlightSearchFont'>AF</span>A-2 Passive PoE extractor"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/toneri-i-kertridzii/orink-toner-af-1220d",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Toneri i kertridži"
              ],
              "price": {
                  "regular_price": 610,
                  "regular_price_with_currency": " RSD610.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 408684,
              "sku": "PRL007456A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/orink-toner-af-1220d-medium-20230414182211000000tZHBz",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "ORINK Toner AF-1220D",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  179
              ],
              "highlighted_name": "ORINK Toner <span class='highlightSearchFont'>AF</span>-1220D"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/edukativne-igrackei/miniland-porodica-afrika",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Edukativne igračke"
              ],
              "price": {
                  "regular_price": 7280,
                  "regular_price_with_currency": " RSD7,280.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 436913,
              "sku": "IGR000966A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/miniland-porodica-afrika-medium-20230620025348000000lXbMs",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "Miniland Porodica Afrika",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  653
              ],
              "highlighted_name": "Miniland Porodica <span class='highlightSearchFont'>Af</span>rika"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/toneri-i-kertridzii/orink-toner-af-3210d",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Toneri i kertridži"
              ],
              "price": {
                  "regular_price": 1260,
                  "regular_price_with_currency": " RSD1,260.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 408685,
              "sku": "PRL007457A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/orink-toner-af-3210d-medium-20230414182212000000SWETH",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "ORINK Toner AF- 3210D",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  179
              ],
              "highlighted_name": "ORINK Toner <span class='highlightSearchFont'>AF</span>- 3210D"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/preciscivaci-vazduhai/af-20-preciscivac-vazduha",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Prečišćivači vazduha"
              ],
              "price": {
                  "regular_price": 20110,
                  "regular_price_with_currency": " RSD20,110.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 481532,
              "sku": "BLT036943A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/af-20-preciscivac-vazduha-medium-20240110190316000000hdmEd.webp",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "AF 20 - Prečišćivač vazduha",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  371
              ],
              "highlighted_name": "<span class='highlightSearchFont'>AF</span> 20 - Prečišćivač vazduha"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/jonizatori-vazduhai/karcher-af-50-komplet-filtera",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Jonizatori vazduha"
              ],
              "price": {
                  "regular_price": 36050,
                  "regular_price_with_currency": " RSD36,050.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 306944,
              "sku": "MKA010539A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/af-50-komplet-filtera-medium-20221227095858000000",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "KARCHER AF 50 Komplet filtera ",
              "attributes": [
                  {
                      "seo_url": "bela",
                      "hash_code": "",
                      "original_value": "346",
                      "name": "boja",
                      "label": "Bela",
                      "value": "346"
                  },
                  {
                      "seo_url": "karcher",
                      "hash_code": "",
                      "original_value": "16147",
                      "name": "proizvodjac",
                      "label": "Karcher",
                      "value": "16147"
                  }
              ],
              "type": "product",
              "category_ids": [
                  369
              ],
              "highlighted_name": "KARCHER <span class='highlightSearchFont'>AF</span> 50 Komplet filtera "
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/jonizatori-vazduhai/karcher-af-30-komplet-filtera",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Jonizatori vazduha"
              ],
              "price": {
                  "regular_price": 23500,
                  "regular_price_with_currency": " RSD23,500.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 306945,
              "sku": "MKA010540A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/af-30-komplet-filtera-medium-20221227095900000000",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "KARCHER AF 30 Komplet filtera ",
              "attributes": [
                  {
                      "seo_url": "bela",
                      "hash_code": "",
                      "original_value": "346",
                      "name": "boja",
                      "label": "Bela",
                      "value": "346"
                  },
                  {
                      "seo_url": "karcher",
                      "hash_code": "",
                      "original_value": "16147",
                      "name": "proizvodjac",
                      "label": "Karcher",
                      "value": "16147"
                  }
              ],
              "type": "product",
              "category_ids": [
                  369
              ],
              "highlighted_name": "KARCHER <span class='highlightSearchFont'>AF</span> 30 Komplet filtera "
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/hrana-za-bebe-i-opremai/canpol-baby-flasica-120ml-africa-59100-59100",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Hrana za bebe i oprema"
              ],
              "price": {
                  "regular_price": 450,
                  "regular_price_with_currency": " RSD450.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 428326,
              "sku": "BBO008360A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/nega-i-oprema-medium-CWsfcPi9vzvxgyS76ZX3FEO8keH9gAfMoh2J4blQ.jpg",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "CANPOL BABY FLASICA (120ml) - AFRICA 59100 (59100)",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  636
              ],
              "highlighted_name": "CANPOL BABY FLASICA (120ml) - <span class='highlightSearchFont'>AF</span>RICA 59100 (59100)"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/ruterii/ubiquiti-afi-ins-amplifi-instant-mesh-wi-fi-system",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Ruteri"
              ],
              "price": {
                  "regular_price": 30540,
                  "regular_price_with_currency": " RSD30,540.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 448540,
              "sku": "NDP006804A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/ubiquiti-afi-ins-amplifi-instant-mesh-wi-fi-system-medium-20230810065617000000qCmTz",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "Ubiquiti AFI-INS AmpliFi Instant Mesh Wi-Fi system",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  238
              ],
              "highlighted_name": "Ubiquiti <span class='highlightSearchFont'>AF</span>I-INS AmpliFi Instant Mesh Wi-Fi system"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/fritezei/royalty-line-af-31-friteza-na-vruc-vazduh",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Friteze"
              ],
              "price": {
                  "regular_price": 10650,
                  "regular_price_with_currency": " RSD10,650.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 459674,
              "sku": "BLT033293A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/royalty-line-af-31-friteza-na-vruc-vazduh-medium-20230927065112000000ssIRl.webp",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "ROYALTY LINE AF-3.1 Friteza na vruć vazduh",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  322
              ],
              "highlighted_name": "ROYALTY LINE <span class='highlightSearchFont'>AF</span>-3.1 Friteza na vruć vazduh"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/oprema-za-sportske-satove-i-kamerei/gopro-the-handler-floating-hand-grip-afhgm-003",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Oprema za sportske satove i kamere"
              ],
              "price": {
                  "regular_price": 3840,
                  "regular_price_with_currency": " RSD3,840.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 488081,
              "sku": "SKK000504A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/gopro-the-handler-floating-hand-grip-afhgm-003-medium-20240206044222000000SYVXa.webp",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "GoPro The Handler (Floating Hand Grip) AFHGM-003",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  1167
              ],
              "highlighted_name": "GoPro The Handler (Floating Hand Grip) <span class='highlightSearchFont'>AF</span>HGM-003"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/fritezei/friteza-gorenje-af1409db",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Friteze"
              ],
              "price": {
                  "regular_price": 10820,
                  "regular_price_with_currency": " RSD10,820.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 377772,
              "sku": "BLT029878A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/friteza-gorenje-af-1409-db-medium-20230323091520000000zWQOC",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "Friteza Gorenje AF1409DB",
              "attributes": [
                  {
                      "seo_url": "crna",
                      "hash_code": "",
                      "original_value": "52",
                      "name": "boja",
                      "label": "Crna",
                      "value": "52"
                  },
                  {
                      "seo_url": "gorenje",
                      "hash_code": "",
                      "original_value": "935",
                      "name": "proizvodjac",
                      "label": "Gorenje",
                      "value": "935"
                  }
              ],
              "type": "product",
              "category_ids": [
                  322
              ],
              "highlighted_name": "Friteza Gorenje <span class='highlightSearchFont'>AF</span>1409DB"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/playstationi/ps5-world-war-z-aftermath",
              "description": "",
              "availability": 1,
              "category_names": [
                  "PlayStation"
              ],
              "price": {
                  "regular_price": 2290,
                  "regular_price_with_currency": " RSD2,290.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 350170,
              "sku": "JP003408A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/ps5-world-war-z-aftermath-medium-20230224092030000000",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "PS5 World War Z: Aftermath",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  217
              ],
              "highlighted_name": "PS5 World War Z: <span class='highlightSearchFont'>Af</span>termath"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/playstationi/ps4-world-war-z-aftermath",
              "description": "",
              "availability": 1,
              "category_names": [
                  "PlayStation"
              ],
              "price": {
                  "regular_price": 1370,
                  "regular_price_with_currency": " RSD1,370.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 438619,
              "sku": "JP003682A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/playstation-medium-rUjHFIT6xvyBkP9R5GmJBcQFKBtSPsJnZEyFTaI8.jpg",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "PS4 World War Z: Aftermath",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  217
              ],
              "highlighted_name": "PS4 World War Z: <span class='highlightSearchFont'>Af</span>termath"
          },
          {
              "short_description": "",
              "link": "https://jakov.rs/ostalo-mrezna-opremai/maxlink-afa-1-pasivni-poe-set",
              "description": "",
              "availability": 1,
              "category_names": [
                  "Ostalo - mrežna oprema"
              ],
              "price": {
                  "regular_price": 450,
                  "regular_price_with_currency": " RSD450.00",
                  "special_price": null,
                  "special_price_with_currency": null,
                  "loyalty_price": null,
                  "loyalty_price_with_currency": null,
                  "discount_percentage": 0,
                  "custom_field_prices": null,
                  "best_month_price": null,
                  "best_month_price_with_currency": null
              },
              "id": 448362,
              "sku": "NDP006696A00000",
              "views": 0,
              "image": "https://api.jakov.rs/storage/images/products/maxlink-afa-1-pasivni-poe-set-medium-20230810064811000000IpXSC",
              "meta_title": "",
              "product_type_id": "simple",
              "meta_description": "",
              "name": "MaxLink AFA-1 pasivni PoE set",
              "attributes": [],
              "type": "product",
              "category_ids": [
                  250
              ],
              "highlighted_name": "MaxLink <span class='highlightSearchFont'>AF</span>A-1 pasivni PoE set"
          }
      ],
      "amounts": {
          "current_page": 1,
          "last_page": 4,
          "from": 1,
          "to": 24,
          "per_page": 24,
          "next_page": 2,
          "prev_page": null,
          "total": 91
      },
      "active_filters": [],
      "filters": [
          {
              "title": "Proizvođač",
              "type": "proizvodjac",
              "array": [
                  {
                      "option_value": "42644",
                      "option_key": "proizvodjac",
                      "option_label": "CASO Braukmann GmbH",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=42644",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=42644",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "42644"
                      }
                  },
                  {
                      "option_value": "6741",
                      "option_key": "proizvodjac",
                      "option_label": "Cooler Master",
                      "selected": false,
                      "count": 3,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=6741",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=6741",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "6741"
                      }
                  },
                  {
                      "option_value": "21990",
                      "option_key": "proizvodjac",
                      "option_label": "DSC",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=21990",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=21990",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "21990"
                      }
                  },
                  {
                      "option_value": "25739",
                      "option_key": "proizvodjac",
                      "option_label": "DSCL",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=25739",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=25739",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "25739"
                      }
                  },
                  {
                      "option_value": "16700",
                      "option_key": "proizvodjac",
                      "option_label": "ECG",
                      "selected": false,
                      "count": 2,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=16700",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=16700",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "16700"
                      }
                  },
                  {
                      "option_value": "2362",
                      "option_key": "proizvodjac",
                      "option_label": "Esperanza",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=2362",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=2362",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "2362"
                      }
                  },
                  {
                      "option_value": "9473",
                      "option_key": "proizvodjac",
                      "option_label": "Gembird",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=9473",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=9473",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "9473"
                      }
                  },
                  {
                      "option_value": "935",
                      "option_key": "proizvodjac",
                      "option_label": "Gorenje",
                      "selected": false,
                      "count": 2,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=935",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=935",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "935"
                      }
                  },
                  {
                      "option_value": "21878",
                      "option_key": "proizvodjac",
                      "option_label": "Iskra",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=21878",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=21878",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "21878"
                      }
                  },
                  {
                      "option_value": "16147",
                      "option_key": "proizvodjac",
                      "option_label": "Karcher",
                      "selected": false,
                      "count": 3,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=16147",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=16147",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "16147"
                      }
                  },
                  {
                      "option_value": "112",
                      "option_key": "proizvodjac",
                      "option_label": "Lenovo",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=112",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=112",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "112"
                      }
                  },
                  {
                      "option_value": "15688",
                      "option_key": "proizvodjac",
                      "option_label": "Makita",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=15688",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=15688",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "15688"
                      }
                  },
                  {
                      "option_value": "278",
                      "option_key": "proizvodjac",
                      "option_label": "Toshiba",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=278",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=278",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "278"
                      }
                  },
                  {
                      "option_value": "1204",
                      "option_key": "proizvodjac",
                      "option_label": "Union",
                      "selected": false,
                      "count": 3,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=1204",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=1204",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "1204"
                      }
                  },
                  {
                      "option_value": "3661",
                      "option_key": "proizvodjac",
                      "option_label": "Womax",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=3661",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&proizvodjac=3661",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "proizvodjac": "3661"
                      }
                  }
              ]
          },
          {
              "title": "CPU proizvođač",
              "type": "cpu_proizvodjac",
              "array": [
                  {
                      "option_value": "70",
                      "option_key": "cpu_proizvodjac",
                      "option_label": "AMD",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&cpu_proizvodjac=70",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&cpu_proizvodjac=70",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "cpu_proizvodjac": "70"
                      }
                  }
              ]
          },
          {
              "title": "CPU tip",
              "type": "cpu_tip",
              "array": [
                  {
                      "option_value": "4095",
                      "option_key": "cpu_tip",
                      "option_label": "AMD Athlon",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&cpu_tip=4095",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&cpu_tip=4095",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "cpu_tip": "4095"
                      }
                  }
              ]
          },
          {
              "title": "Ram memorija",
              "type": "ram_memorija",
              "array": [
                  {
                      "option_value": "9",
                      "option_key": "ram_memorija",
                      "option_label": "8 GB DDR4",
                      "selected": false,
                      "count": 2,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&ram_memorija=9",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&ram_memorija=9",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "ram_memorija": "9"
                      }
                  }
              ]
          },
          {
              "title": "Grafička kartica model",
              "type": "graficka_kartica_model",
              "array": [
                  {
                      "option_value": "57155",
                      "option_key": "graficka_kartica_model",
                      "option_label": "AFOX GeForce GT610 2GB",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&graficka_kartica_model=57155",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&graficka_kartica_model=57155",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "graficka_kartica_model": "57155"
                      }
                  },
                  {
                      "option_value": "29815",
                      "option_key": "graficka_kartica_model",
                      "option_label": "SVGA AFOX GEFORCE G210 1GB DDR3 64BIT",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&graficka_kartica_model=29815",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&graficka_kartica_model=29815",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "graficka_kartica_model": "29815"
                      }
                  }
              ]
          },
          {
              "title": "Kapacitet hard diska",
              "type": "kapacitet_hard_diska",
              "array": [
                  {
                      "option_value": "5683",
                      "option_key": "kapacitet_hard_diska",
                      "option_label": "2 TB",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&kapacitet_hard_diska=5683",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&kapacitet_hard_diska=5683",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "kapacitet_hard_diska": "5683"
                      }
                  }
              ]
          },
          {
              "title": "Boja",
              "type": "boja",
              "array": [
                  {
                      "option_value": "346",
                      "option_key": "boja",
                      "option_label": "Bela",
                      "selected": false,
                      "count": 2,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&boja=346",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&boja=346",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "boja": "346"
                      }
                  },
                  {
                      "option_value": "52",
                      "option_key": "boja",
                      "option_label": "Crna",
                      "selected": false,
                      "count": 9,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&boja=52",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&boja=52",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "boja": "52"
                      }
                  }
              ]
          },
          {
              "title": "Integrisana grafika",
              "type": "integrisana_grafika",
              "array": [
                  {
                      "option_value": "15",
                      "option_key": "integrisana_grafika",
                      "option_label": "Ne",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&integrisana_grafika=15",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&integrisana_grafika=15",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "integrisana_grafika": "15"
                      }
                  }
              ]
          },
          {
              "title": "Grafička kartica proizvođač",
              "type": "graficka_kartica_proizvodjac",
              "array": [
                  {
                      "option_value": "163",
                      "option_key": "graficka_kartica_proizvodjac",
                      "option_label": "nVidia",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&graficka_kartica_proizvodjac=163",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&graficka_kartica_proizvodjac=163",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "graficka_kartica_proizvodjac": "163"
                      }
                  }
              ]
          },
          {
              "title": "Tip",
              "type": "tip",
              "array": [
                  {
                      "option_value": "2462",
                      "option_key": "tip",
                      "option_label": "Interni",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&tip=2462",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&tip=2462",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "tip": "2462"
                      }
                  },
                  {
                      "option_value": "2494",
                      "option_key": "tip",
                      "option_label": "Modularno",
                      "selected": false,
                      "count": 3,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&tip=2494",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&tip=2494",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "tip": "2494"
                      }
                  },
                  {
                      "option_value": "16217",
                      "option_key": "tip",
                      "option_label": "Pneumatska heftalica",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&tip=16217",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&tip=16217",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "tip": "16217"
                      }
                  },
                  {
                      "option_value": "13345",
                      "option_key": "tip",
                      "option_label": "Usisivači za pepeo",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&tip=13345",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&tip=13345",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "tip": "13345"
                      }
                  }
              ]
          },
          {
              "title": "Kapacitet memorije",
              "type": "kapacitet_memorije",
              "array": [
                  {
                      "option_value": "2425",
                      "option_key": "kapacitet_memorije",
                      "option_label": "8 GB",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&kapacitet_memorije=2425",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&kapacitet_memorije=2425",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "kapacitet_memorije": "2425"
                      }
                  }
              ]
          },
          {
              "title": "Format hdda",
              "type": "format_hdda",
              "array": [
                  {
                      "option_value": "1834",
                      "option_key": "format_hdda",
                      "option_label": "Bez HDD-a",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&format_hdda=1834",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&format_hdda=1834",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "format_hdda": "1834"
                      }
                  }
              ]
          },
          {
              "title": "Format ssda",
              "type": "format_ssda",
              "array": [
                  {
                      "option_value": "1827",
                      "option_key": "format_ssda",
                      "option_label": "2.5\"",
                      "selected": false,
                      "count": 2,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&format_ssda=1827",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&format_ssda=1827",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "format_ssda": "1827"
                      }
                  }
              ]
          },
          {
              "title": "Kapacitet ssda",
              "type": "kapacitet_ssda",
              "array": [
                  {
                      "option_value": "1831",
                      "option_key": "kapacitet_ssda",
                      "option_label": "256 GB",
                      "selected": false,
                      "count": 2,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&kapacitet_ssda=1831",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&kapacitet_ssda=1831",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "kapacitet_ssda": "1831"
                      }
                  }
              ]
          },
          {
              "title": "Tip konfiguracije",
              "type": "tip_konfiguracije",
              "array": [
                  {
                      "option_value": "1815",
                      "option_key": "tip_konfiguracije",
                      "option_label": "AMD konfiguracija bez OS",
                      "selected": false,
                      "count": 1,
                      "type_id": "0",
                      "hax_code": null,
                      "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&tip_konfiguracije=1815",
                      "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&tip_konfiguracije=1815",
                      "url_params": {
                          "q": "af",
                          "product_list_order": "relevance",
                          "product_list_limit": "24",
                          "tip_konfiguracije": "1815"
                      }
                  }
              ]
          }
      ],
      "sorters": [
          {
              "option_key": "product_list_order",
              "option_value": "relevance",
              "option_label": "Relevantnost",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_limit=24&page=1&product_list_order=relevance",
              "url_path": "/?q=af&product_list_limit=24&page=1&product_list_order=relevance",
              "url_params": {
                  "q": "af",
                  "product_list_limit": "24",
                  "page": "1",
                  "product_list_order": "relevance"
              },
              "selected": true
          },
          {
              "option_key": "product_list_order",
              "option_value": "price_asc",
              "option_label": "Cena od najnize ka najvisoj",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_limit=24&page=1&product_list_order=price_asc",
              "url_path": "/?q=af&product_list_limit=24&page=1&product_list_order=price_asc",
              "url_params": {
                  "q": "af",
                  "product_list_limit": "24",
                  "page": "1",
                  "product_list_order": "price_asc"
              },
              "selected": false
          },
          {
              "option_key": "product_list_order",
              "option_value": "price_desc",
              "option_label": "Cena od najvise ka najnizoj",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_limit=24&page=1&product_list_order=price_desc",
              "url_path": "/?q=af&product_list_limit=24&page=1&product_list_order=price_desc",
              "url_params": {
                  "q": "af",
                  "product_list_limit": "24",
                  "page": "1",
                  "product_list_order": "price_desc"
              },
              "selected": false
          },
          {
              "option_key": "product_list_order",
              "option_value": "date_desc",
              "option_label": "Latest",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_limit=24&page=1&product_list_order=date_desc",
              "url_path": "/?q=af&product_list_limit=24&page=1&product_list_order=date_desc",
              "url_params": {
                  "q": "af",
                  "product_list_limit": "24",
                  "page": "1",
                  "product_list_order": "date_desc"
              },
              "selected": false
          }
      ],
      "orders": [
          {
              "option_key": "product_list_limit",
              "option_value": 24,
              "option_label": "24",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24",
              "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24",
              "url_params": {
                  "q": "af",
                  "product_list_order": "relevance",
                  "product_list_limit": "24"
              },
              "selected": true
          },
          {
              "option_key": "product_list_limit",
              "option_value": 48,
              "option_label": "48",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=48",
              "url_path": "/?q=af&product_list_order=relevance&product_list_limit=48",
              "url_params": {
                  "q": "af",
                  "product_list_order": "relevance",
                  "product_list_limit": "48"
              },
              "selected": false
          },
          {
              "option_key": "product_list_limit",
              "option_value": 72,
              "option_label": "72",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=72",
              "url_path": "/?q=af&product_list_order=relevance&product_list_limit=72",
              "url_params": {
                  "q": "af",
                  "product_list_order": "relevance",
                  "product_list_limit": "72"
              },
              "selected": false
          },
          {
              "option_key": "product_list_limit",
              "option_value": 96,
              "option_label": "96",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=96",
              "url_path": "/?q=af&product_list_order=relevance&product_list_limit=96",
              "url_params": {
                  "q": "af",
                  "product_list_order": "relevance",
                  "product_list_limit": "96"
              },
              "selected": false
          }
      ],
      "pager": [
          {
              "option_key": "page",
              "option_value": 1,
              "option_label": "1",
              "selected": true
          },
          {
              "option_key": "page",
              "option_value": 2,
              "option_label": "2",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&page=2",
              "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&page=2",
              "url_params": {
                  "q": "af",
                  "product_list_order": "relevance",
                  "product_list_limit": "24",
                  "page": "2"
              },
              "selected": false,
              "type": "2"
          },
          {
              "option_key": "page",
              "option_value": 3,
              "option_label": "3",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&page=3",
              "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&page=3",
              "url_params": {
                  "q": "af",
                  "product_list_order": "relevance",
                  "product_list_limit": "24",
                  "page": "3"
              },
              "selected": false,
              "type": "3"
          },
          {
              "option_key": "page",
              "option_value": 4,
              "option_label": "4",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&page=4",
              "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&page=4",
              "url_params": {
                  "q": "af",
                  "product_list_order": "relevance",
                  "product_list_limit": "24",
                  "page": "4"
              },
              "selected": false,
              "type": "4"
          },
          {
              "option_key": "page",
              "option_value": 2,
              "option_label": "Next",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&page=2",
              "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&page=2",
              "url_params": {
                  "q": "af",
                  "product_list_order": "relevance",
                  "product_list_limit": "24",
                  "page": "2"
              },
              "selected": false,
              "type": "next"
          },
          {
              "option_key": "page",
              "option_value": 4,
              "option_label": "Last",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&page=4",
              "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&page=4",
              "url_params": {
                  "q": "af",
                  "product_list_order": "relevance",
                  "product_list_limit": "24",
                  "page": "4"
              },
              "selected": false,
              "type": "last"
          }
      ],
      "collection_price": {
          "lowest_price_with_filters": 98,
          "highest_price_with_filters": 126680,
          "lowest_price": 98,
          "highest_price": 126680
      },
      "visual_filter": []
  },
  "modes": [
      {
          "name": "Grid",
          "type": "grid",
          "option_key": "product_list_mode",
          "option_value": "grid",
          "option_label": "Grid",
          "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&page=1&product_list_mode=grid",
          "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&page=1&product_list_mode=grid",
          "url_params": {
              "q": "af",
              "product_list_order": "relevance",
              "product_list_limit": "24",
              "page": "1",
              "product_list_mode": "grid"
          },
          "selected": true
      },
      {
          "name": "List",
          "type": "list",
          "option_key": "product_list_mode",
          "option_value": "list",
          "option_label": "List",
          "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24&page=1&product_list_mode=list",
          "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24&page=1&product_list_mode=list",
          "url_params": {
              "q": "af",
              "product_list_order": "relevance",
              "product_list_limit": "24",
              "page": "1",
              "product_list_mode": "list"
          },
          "selected": false
      }
  ],
  "query": "af",
  "suggested_text": null,
  "used_suggestions": false,
  "blog": {
      "results": [],
      "amounts": {
          "current_page": 1,
          "last_page": 1,
          "from": null,
          "to": null,
          "per_page": 24,
          "next_page": null,
          "prev_page": null,
          "total": 0
      },
      "orders": [
          {
              "option_key": "product_list_limit",
              "option_value": 24,
              "option_label": "24",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=24",
              "url_path": "/?q=af&product_list_order=relevance&product_list_limit=24",
              "url_params": {
                  "q": "af",
                  "product_list_order": "relevance",
                  "product_list_limit": "24"
              },
              "selected": true
          },
          {
              "option_key": "product_list_limit",
              "option_value": 48,
              "option_label": "48",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=48",
              "url_path": "/?q=af&product_list_order=relevance&product_list_limit=48",
              "url_params": {
                  "q": "af",
                  "product_list_order": "relevance",
                  "product_list_limit": "48"
              },
              "selected": false
          },
          {
              "option_key": "product_list_limit",
              "option_value": 72,
              "option_label": "72",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=72",
              "url_path": "/?q=af&product_list_order=relevance&product_list_limit=72",
              "url_params": {
                  "q": "af",
                  "product_list_order": "relevance",
                  "product_list_limit": "72"
              },
              "selected": false
          },
          {
              "option_key": "product_list_limit",
              "option_value": 96,
              "option_label": "96",
              "url": "https://www.jakov.rs/athena/?q=af&product_list_order=relevance&product_list_limit=96",
              "url_path": "/?q=af&product_list_order=relevance&product_list_limit=96",
              "url_params": {
                  "q": "af",
                  "product_list_order": "relevance",
                  "product_list_limit": "96"
              },
              "selected": false
          }
      ],
      "pager": []
  },
  "banner": [],
  "current_url": "https://www.jakov.rs/athena/?q=af",
  "current_path": "&product_list_order=relevance&product_list_limit=24&page=1"
})

export async function firstClickSearch() {
  return JSON.parse(test_first_click)?.data?.results as zSearchResults;
}

export async function querySearch(query: string) {
  return JSON.parse(test_query)?.data?.results as zSearchResults;
}

export async function athenaSearch(query: string) {
    ////console.log("athenaSearch", query);
    return JSON.parse(test_search) as zSearch;
}