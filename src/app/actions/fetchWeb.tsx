"use server";

import { zAction, zProducts } from "@/schemas/zFrequent";
import { zHeroBanner, zSection } from "@/schemas/zHome";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAction({ slug }: { slug: string }) {
  const res = await (
    await fetch(API_URL + "/catalog-stickers/" + slug, {
      next: { tags: ["all"] },
    })
  ).json();

  const data = res.data as zProducts;

  if (!data) {
    // This will activate the closest `error.js` Error Boundary
    return { error: "Failed to fetch data" };
  }
  return {
    data,
    catalog: res.catalog as string,
    categories: res.categories.map((i: string) => {
      return {
        name: i,
        image: null,
      };
    }) as {
      name: string;
      image: string;
    }[],
  };
}

export async function getActions() {
  const actions = await (
    await fetch(API_URL + "/catalog-stickers/", {
      next: { tags: ["all", "actions"] },
    })
  ).json();

  return actions.data as zAction[];
}

export async function getFirstAction() {
  const actions = await getActions();

  return actions[0] as zAction;
}

export async function fetchWeb() {
  const res = await (
    await fetch(API_URL + "/home-page/web", {
      next: { tags: ["all"] },
    })
  ).json();
  const actions = await (
    await fetch(API_URL + "/catalog-stickers/", {
      next: { tags: ["all"] },
    })
  ).json();

  const slug = actions?.data?.[actions?.data?.length - 1]?.slug;
  const products = res.data.products as zProducts;
  const sections = res.data.sections as zSection[];
  const catalogs = res.data.catalogs as zAction[];
  const categories = res.data.categories as any[];
  const brands = res?.data?.brands as {
    id: number;
    name: string;
    slug: string;
    image: string;
  }[];

  if (!products) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return {
    last_action: slug,
    products,
    catalogs,
    sections,
    categories,
    brands,
  };
}
