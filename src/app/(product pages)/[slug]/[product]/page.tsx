import Breadcrumb from "@/components/frequent/BreadCrumb";
import { fetchProduct, fetchSEO_Product } from "@/app/actions/fequentActions";
import { zProduct } from "@/schemas/zFrequent";
import ProductInfo from "@/components/product-page/Info";
import ProductCard from "@/components/frequent/ProductCard";
import { getActions } from "@/app/actions/fetchWeb";
import LoadOnScrollComponent from "@/components/frequent/LoadOnScrollComponent";
import { Metadata } from "next";
import { SEO } from "../../../../../CONFIGURE_HERE";
import { Suspense } from "react";

const PUBLIC = process.env.NEXT_PUBLIC_URL;

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const res = await fetchSEO_Product(params.product).then((res) => {
    
    return {
      title: res.seo_title,
      keywords: res.seo_keywords?.split(","),
      alternates: {
        canonical: res.seo_canonical
      },
      description: res.seo_description,
      openGraph: {
        title: res?.seo_title,
        canonical: res.seo_canonical,
        type: "website",
        images: [
          {
            url: res?.main_image?.medium || "",
            width: 800,
            height: 600,
            alt: res?.name || "",
          },
          {
            url: res?.main_image?.large || "",
            width: 900,
            height: 800,
            alt: res?.name || "",
          },
        ],
      },
    };
  });
  
  return res;
}

export default async function CategoryPage({ params }: { params: any }) {
  const data = await getData({
    params: { product: params.product, slug: params.slug },
  });

  const seo = await fetchSEO_Product(params.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: seo?.seo_title,
    image: [
      seo?.main_image?.large
    ],
    other: {
      "og:type":"product"
     },
    description: seo?.seo_description,
    sku: seo?.sku,
    brand: {
      "@type": "Brand",
      name: seo?.brand?.name
    },
    offers: {
      "@type": "Offer",
      url: PUBLIC + `/${data?.product?.slug}`,
      priceCurrency: "RSD",
      price: seo?.price,
      priceValidUntil: "2025-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Jakov Sistem DOO",
      },
    },
  };

  return (
    <div className="w-full 2xl:px-0 mx-auto mt-10 max-w-screen-2xl m-auto">
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <div className=" mx-auto :flex">
        <Suspense fallback={<div>Loading...</div>}>
          {data && (
            <Breadcrumb
              list={[
                { name: "Početna strana", link: "/" },
                ...data.product.categories.map((item) => {
                  return { name: item.name, link: "/" + item.slug };
                }),
                { name: data.product.name, link: "#" },
              ]}
            />
          )}
        </Suspense>
      </div>
      <div className="w-full mt-5">
        <Suspense fallback={<div>Loading...</div>}>
          {data && (
            <ProductInfo product={data.product} stickers={data?.stickers} />
          )}
        </Suspense>
      </div>

      <LoadOnScrollComponent>
        <p className="font-black pl-5 mt-10 mb-5 text-black text-xl sm:text-xl">
          Povezani proizvodi
        </p>
        <div className="w-full bg-white rounded-xl border grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 mb-20 pr-5 sm:pr-0">
          <Suspense>
            {data?.product?.similarProducts?.map((item, index) => {
              return (
                <div key={index} className="p-2 sm:p-2">
                  <ProductCard item={item as zProduct} />
                </div>
              );
            })}
          </Suspense>
        </div>
      </LoadOnScrollComponent>
    </div>
  );
}

export async function getData({
  params,
}: {
  params: { product: string; slug: string };
}) {
  const product = (await fetchProduct(params.product, params.slug)) as zProduct;

  const stickers = (await getActions())?.slice(0, 2);

  if (product) {
    return {
      product,
      stickers,
    };
  }
  return null;
}
