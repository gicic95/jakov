import { fetchBrand } from "@/app/actions/brandsActions";
import Breadcrumb from "@/components/frequent/BreadCrumb";
import ProductCard from "@/components/frequent/ProductCard";
import ProductWrapperBrands from "@/components/structure/ProductWrapperBrands";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { zMeta, zProduct } from "@/schemas/zFrequent";
import Image from "next/image";
import Link from "next/link";
export default async function BrendPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const data = await getData(
    params.slug,
    Object.entries(searchParams || []) as [string, string][]
  );
  return (
    <div className="w-full  mx-auto ">
      <div className="w-full bg-white py-5">
        <div className="max-w-screen-2xl px-3 2xl:px-0 mx-auto">
          <Breadcrumb
            list={[
              { name: "Brendovi", link: "/brendovi" },
              { name: params.slug, link: "#" },
            ]}
          />
          <br />
          <h3 className="text-xl font-bold">
            {params.slug
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h3>
          <ScrollArea className="w-full h-fit overflow-y-hidden whitespace-nowrap rounded-md ">
            <ScrollBar orientation="horizontal" />
            <div className="flex w-max space-x-4 p-4  overflow-y-hidden h-fit">
              {data?.categories.map((category, index) => {
                return (
                  <Link
                    href={`/brend/${params.slug}?Current_category=${category.name}`}
                    className="flex justify-start aspect-square items-center flex-col"
                    key={index}
                  >
                    <div
                      key={index}
                      className="h-24 sm:h-32 xl:h-40 relative rounded-full  border aspect-square flex justify-center justify-center"
                    >
                      <Image
                        src={category.image}
                        alt="category image"
                        className="w-full h-full object-contain"
                        layout="fill"
                      />
                    </div>
                    <span className="text-sm md:text-base text-wrap w-24  line-clamp-2 truncate text-center">
                      {category.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl px-0 sm:px-3 flex flex-col gap-10 mt-10  2xl:px-0">
        {!(Object.entries(searchParams || []) as [string, string][]).filter(
          (c) => c[0] === "Current_category"
        )?.length ? (
          data.categories?.map((category, index) => {
            return (
              <div key={index} className="w-full bg-white ">
                <p className="flex  w-full px-5 pt-5 justify-between items-center">
                  <span className="font-bold lg:text-lg ">{category.name}</span>
                  <Link
                    href={`/brend/${params.slug}?Current_category=${category.name}`}
                    className="text-const_secondary text-right lg:text-base text-sm"
                  >
                    Pogledaj sve proizvode
                  </Link>
                </p>
                <ScrollArea className="w-full no-scrollbar whitespace-nowrap  ">
                  <ScrollBar orientation="horizontal" />
                  <div className="flex w-max space-x-0 py-4">
                    {category?.products?.slice(0, 6)?.map((product, index) => {
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
            );
          })
        ) : (
          <ProductWrapperBrands
            brand={params.slug}
            allCategories={data?.categories}
            metaSSR={data?.meta as zMeta}
            searchParams={searchParams}
            currentCategory={
              (Object.entries(searchParams || []) as [string, string][])?.find(
                (c) => c?.[0] === "Current_category"
              )?.[1]
            }
          />
        )}
      </div>
    </div>
  );
}

export async function getData(brand: string, searchParams: [string, string][]) {
  const data = await fetchBrand(brand);
  //console.log(data.categories[0].products);
  return data;
}
