import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import "@fontsource/poppins";
import Navbar from "@/components/structure/Navbar";
import { Provider } from "@/components/client/SessionProvider";
import { Toaster } from "sonner";
import Footer from "@/components/structure/Footer";
import StoreInitializer from "./store/StoreInitializer";
import ProgressBar from "@/components/progressBar";
import LoadOnScrollComponent from "@/components/frequent/LoadOnScrollComponent";
import { Suspense } from "react";

import { ReCaptchaProvider } from "next-recaptcha-v3";
import { fetchSEO } from "./actions/fequentActions";
import { business_details } from "../../CONFIGURE_HERE";
import CartSheet from "@/components/frequent/client/CartSheet";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const getPathnameFromMetadataState = (state: any): string => {
  const res = Object.getOwnPropertySymbols(state || {})
    .map((p) => state[p])
    .find((state) => state?.hasOwnProperty?.("urlPathname"));

  return res?.urlPathname.replace(/\?.+/, "") ?? "";
};

const PUBLIC_URL =
  process.env.NEXT_PUBLIC_PUBLIC_URL || "http://localhost:3000";

export async function generateMetadata(_: any, state: any): Promise<Metadata> {
  const pathname = getPathnameFromMetadataState(state);
  //console.log("PATHNAME", pathname);
  const data = await fetchSEO(pathname).then((data) => {
    return {
      title: data?.seo_title || "",
      robots: data?.seo_meta_robots || "",
      openGraph: {
        title: data?.seo_title || "",
        description: data?.seo_description || "",
        url: data?.seo_canonical || PUBLIC_URL + pathname,
        type: "website",
        keywords: data?.seo_keywords,
        images: [
          {
            url: PUBLIC_URL + "/assets/Logo.webp",
            width: 800,
            height: 600,
            alt: data?.seo_title,
          },
        ],
      },
    };
  });
  return data;
}

const jsonLd2 = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: PUBLIC_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: PUBLIC_URL + "/pretraga/{search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const seo = await fetchSEO('/');
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              image: PUBLIC_URL + "/Logo.webp",
              url: PUBLIC_URL,
              logo: PUBLIC_URL + "/Logo.webp",
              name: "Jakov Sistem",
              description: seo?.seo_description,
              email: business_details.email,
              telephone: business_details.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: business_details.address,
                addressLocality: "Niš",
                addressCountry: "RS",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
      </head>
      <body className={"scroll-smooth  bg-[#F9F9F9] font-[Poppins]"}>
        <ReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        >
          <Provider>
            <CartSheet />
            <Suspense fallback={<></>}>
              <ProgressBar />
            </Suspense>
            <Navbar />
            <Suspense fallback={<></>}>
              <StoreInitializer />
            </Suspense>
            {children}
            <Suspense fallback={<></>}>
              <Toaster />
            </Suspense>
            <Suspense fallback={<></>}>
              <LoadOnScrollComponent>
                <Footer />
              </LoadOnScrollComponent>
            </Suspense>
          </Provider>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
