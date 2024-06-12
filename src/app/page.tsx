import HeroBanner from "@/components/home/Hero";
import { zHeroBanner } from "@/schemas/zHome";
import { zBannerHorizontal, zNews, zProduct } from "@/schemas/zFrequent";
import { fetchWeb, getActions, getFirstAction } from "./actions/fetchWeb";
import SectionsAll from "@/components/home/SectionsAll";
import ActionsAll from "@/components/home/ActionsAll";
import ProductCarousel from "@/components/product-page/ProductCarousel";
import CategoryShowCase from "@/components/home/CategoryShowCase";
import BannerHorizontal from "@/components/frequent/Banners";
import NewsPreview from "@/components/home/NewsPreview";
import { fetchNews } from "./actions/newsActions";
import LoadOnScrollComponent from "@/components/frequent/LoadOnScrollComponent";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import Brands from "@/components/home/Brands";

export default async function Home() {
  const {
    hero,
    landing_hero,
    banners,
    news,
    left_banner,
    products,
    catalogs,
    sections,
    categories,
    brands
  } = await getData();

  return (
      <main className="flex overflow-x-hidden flex-col mt-3 px-3 2xl:px-0 max-w-screen-2xl mx-auto  justify-between items-center ">
        <div className="w-full ">
          <HeroBanner
            left_banner={left_banner as any}
            data={hero}
            first={landing_hero as zBannerHorizontal}
          />
        </div>

        <div className="w-full ">
          <ProductCarousel products={products as zProduct[]} />

          <ActionsAll enabled={true} sections={catalogs}>
            <div className="sm:mt-16 pl-3 sm:px-5 2xl:px-0 ">
              <CategoryShowCase categories={categories} />
              <SectionsAll enabled={true} sections={sections}>
                <>
                  <BannerHorizontal banner={banners[0] as zBannerHorizontal} />
                </>
              </SectionsAll>
            </div>
          </ActionsAll>
        </div>

        <LoadOnScrollComponent>
          {
            brands?.length ? <Brands brands={brands} /> : <div className="my-5"></div>
          }
        </LoadOnScrollComponent>
        <LoadOnScrollComponent>
          <NewsPreview news={news as zNews[]} />
        </LoadOnScrollComponent>
      </main>
  );
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getData() {
  const res = await (
    await fetch(API_URL + "/banners?paginate=100", {
      next: { tags: ["all"] },
    })
  ).json();

  const data = res.data as zHeroBanner;
  const { products, catalogs, sections, categories, brands } = await fetchWeb();
  const { data: news } = await fetchNews();
  //const left_banner = await getFirstAction();
  if (!data) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  let hero = data?.filter((item) => item.position.id === 1);
  let landing_hero = hero[0];
  const left_banner = catalogs[0];
  hero = hero.slice(1);
  let banners = data?.filter(
    (item) => item.position.name === "Traka na početnoj"
  );

  
  ////console.log(sections);
  return {
    landing_hero,
    left_banner,
    categories,
    catalogs: catalogs.slice(1),
    hero,
    sections,
    products,
    banners,
    news,
    brands
  };
}
