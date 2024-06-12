import Breadcrumb from "@/components/frequent/BreadCrumb";
import {
  fetchAllCategories,
  fetchCategory,
  fetchProducts,
  fetchSEO_Category,
  fetchSEO_Product,
  getAttributes,
  getCategoryBanner,
} from "@/app/actions/fequentActions";
import {
  zAttributes,
  zBannerHorizontal,
  zCategory,
  zProduct,
  zProducts,
} from "@/schemas/zFrequent";
import draftToHtml from "draftjs-to-html";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductWrapper from "@/components/structure/ProductWrapper";
import SubCategoryCarousel from "@/components/frequent/client/SubCategoryCarousel";
import ProductCard from "@/components/frequent/ProductCard";
import Description from "./Description";
import { Metadata } from "next";
import BannerHorizontal from "@/components/frequent/Banners";
import { useSearchParams } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  try {
    const data = await fetchSEO_Category(params.slug).then((data) => {
      return {
        title: data.seo_title,
        robots: data.seo_meta_robots,
        openGraph: {
          title: data.seo_title,
          description: data.seo_description,
          url: PUBLIC_URL + "/" + params?.slug,
          type: "website",
          keywords: data.seo_keywords,
          images: [
            {
              url: PUBLIC_URL + "/assets/Logo.webp",
              width: 800,
              height: 600,
              alt: data.seo_title,
            },
          ],
        },
      };
    });

    return data;
  } catch {
    return {};
  }
}



export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  //const par = useSearchParams();

  

  const data = await getData({
    params: {
      slug: params.slug,
      searchParams: Object.entries(searchParams || []) as [string, string][],
    },
  });

  return (
    data && (
      <div className="w-full   px-0 sm:px-2 2xl:px-0  mb-20 m-auto">
        <div className=" mx-auto">
          <div className=" bg-white mx-auto">
            <div className="max-w-screen-2xl py-5 px-3 2xl:px-0  mx-auto">
              <div className="px-3 2xl:px-0">
                <Breadcrumb
                  list={[
                    { name: "Početna strana", link: "/" },
                    {
                      name: data.categoryData?.parent?.name || "",
                      link: "/" + data.categoryData?.parent?.slug,
                    },
                    { name: data.categoryData.name, link: "#" },
                  ]}
                />
              </div>

              {data?.banner?.length ? (
                <BannerHorizontal
                  banners={(data?.banner as zBannerHorizontal[]) || null}
                />
              ) : (
                <></>
              )}

              {data?.categoryData?.subcategories?.length &&
              data?.categoryData?.subcategories?.filter(
                (s) => s.subcategories?.length
              )?.length ? (
                <div className="mt-5">
                  <Suspense fallback={<div>Loading...</div>}>
                    <SubCategoryCarousel
                      searchParams={
                        Object.entries(searchParams || []) as [string, string][]
                      }
                      subcategories={data.categoryData.subcategories || []}
                    />
                  </Suspense>
                </div>
              ) : null}
              {!data?.categoryData?.subcategories?.filter(
                (s) => s.subcategories?.length
              )?.length ? (
                <div className="mt-5 sm:hidden">
                  <Suspense fallback={<div>Loading...</div>}>
                    <SubCategoryCarousel
                      searchParams={
                        Object.entries(searchParams || []) as [string, string][]
                      }
                      subcategories={data.categoryData.subcategories || []}
                    />
                  </Suspense>
                </div>
              ) : null}
            </div>
          </div>

          <div className="max-w-screen-2xl px-0 sm:px-3 2xl:px-0 mx-auto">
            {!data?.categoryData?.subcategories?.filter(
              (sub) => sub?.subcategories?.length
            )?.length ? (
              <ProductWrapper
                category={data.categoryData}
                metaSSR={data?.products?.meta}
                attributesSSR={data?.attributes ? data.attributes : []}
                banners={data.banner}
                init_products={data.products.products as zProducts}
                searchParams={
                  Object.entries(searchParams || []) as [string, string][]
                }
              />
            ) : (
              <div className="mx-auto max-w-screen-2xl px-0 sm:px-3 flex flex-col gap-10 mt-10  2xl:px-0">
                {data?.categoryData?.subcategories?.map((category, index) => {
                  return category?.products?.length ? (
                    <div key={index} className="w-full bg-white ">
                      <p className="flex  w-full px-5 pt-5 justify-between items-center">
                        <span className="font-bold lg:text-lg ">
                          {category.name}
                        </span>
                        <Link
                          href={`/${category.slug}`}
                          className="text-const_secondary text-right lg:text-base text-sm"
                        >
                          Pogledaj sve proizvode
                        </Link>
                      </p>
                      <ScrollArea className="w-full no-scrollbar whitespace-nowrap  ">
                        <ScrollBar orientation="horizontal" />
                        <div className="flex w-max space-x-0 py-4">
                          {category?.products
                            ?.slice(0, 6)
                            ?.map((product, index) => {
                              return (
                                <div
                                  key={index}
                                  className="px-2 h-full shrink-0 w-[180px] sm:w-[250px] lg:w-[255px]"
                                >
                                  <ProductCard item={product as zProduct} />
                                </div>
                              );
                            })}
                        </div>
                      </ScrollArea>
                    </div>
                  ) : null;
                })}
              </div>
            )}
          </div>
          {/* 
        <Suspense fallback={<div>Loading...</div>}>
          <Description
            data={draftToHtml(
              JSON.parse(data.categoryData?.bottom_description || "{}")
            )}
          />
        </Suspense> */}
        </div>
      </div>
    )
  );
}

function serbianLatinToSlug(text: string, separator = "-") {
  // Convert to lowercase and remove diacritics
  let normalizedText = text
    .toLowerCase()
    .replace(/đ/g, "dj")
    .replace(/č/g, "c")
    .replace(/ć/g, "c")
    .replace(/š/g, "s")
    .replace(/ž/g, "z");

  // Replace special characters and spaces with the separator
  normalizedText = normalizedText.replace(/[^a-z0-9]/g, separator);

  // Remove duplicate separators
  normalizedText = normalizedText.replace(
    new RegExp(separator + "{2,}", "g"),
    separator
  );

  // Remove leading/trailing separators
  normalizedText = normalizedText.replace(
    new RegExp("^" + separator + "|" + separator + "$", "g"),
    ""
  );

  return normalizedText;
}

export async function getData({
  params,
}: {
  params: { slug: string; searchParams?: [string, string][] };
}) {
  let init_products = null;
  const categoryData = (await fetchCategory(params.slug || "")) as zCategory;
  const banner = await getCategoryBanner(categoryData);
  //console.log(banner);
  let attributes = null;

  if (params.searchParams?.find((i) => i[0] === "Current_category")?.[1]) {
    attributes = (await getAttributes({
      category_slug: serbianLatinToSlug(
        params.searchParams?.find((i) => i[0] === "Current_category")?.[1] || ""
      ),
    })) as zAttributes[];
  } else {
    attributes = (await getAttributes({
      category_slug: params.slug,
    })) as zAttributes[];
  }

  ////console.log("BRO", params?.searchParams?.find((i) => i[0] === "Proizvođač")?.[1])
  function findGetParameter(parameterName: string) {
    return (
      params?.searchParams?.find(([key]) => key === parameterName)?.[1] || null
    );
  }

  //console.log(params.searchParams);

  if (params.searchParams) {
    let f_filters = await getAttributes({
      category_slug:
        serbianLatinToSlug(
          params.searchParams?.find((i) => i[0] === "Current_category")?.[1] ||
            ""
        ) ||
        params?.slug ||
        params?.slug ||
        "",
    }).then((res) => {
      let tmpFilter = [] as any[];

      res
        ?.filter((i) =>
          params?.searchParams
            ?.map((i) => i[0])
            .includes(i?.attribute?.name || "$")
        )
        .forEach((att) => {
          tmpFilter = [
            ...tmpFilter,
            `${att?.attribute.id}(${att?.values
              ?.map((i) => i.value)
              ?.filter((e) =>
                params?.searchParams
                  ?.find((j) => j[0].includes(att?.attribute?.name || "$"))?.[1]
                  ?.split(",")
                  ?.map((sublist) => sublist.replace(/\./g, ","))
                  ?.includes(e.value)
              )
              .map((m) => m.id)
              .join(",")})`,
          ];
        });

      //console.log("TMP", tmpFilter);
      const f_filters = tmpFilter.join("%3B");

      return f_filters;
    });

    attributes = (await getAttributes({
      category_slug:
        serbianLatinToSlug(
          params.searchParams?.find((i) => i[0] === "Current_category")?.[1] ||
            ""
        ) || params?.slug,
      additional: f_filters,
    })) as zAttributes[];

    init_products = await fetchProducts(
      serbianLatinToSlug(
        params.searchParams?.find((i) => i[0] === "Current_category")?.[1] || ""
      ) || params?.slug,
      parseInt(findGetParameter("page") || "0"),
      findGetParameter("latest") || "",
      findGetParameter("price") || "",
      parseInt(findGetParameter("paginate") || "0"),
      f_filters || "",
      parseInt(findGetParameter("perPage") || "0")
    );
  } else {
    //console.log("NO SEARCH PRODUCTS");
    init_products = await fetchProducts(params.slug);
  }
  //console.log(banner);
  if (categoryData) {
    return {
      categoryData,
      banner,
      products: init_products || [],
      attributes,
    };
  }
  return null;
}
