"use server";

import { zMeta, zProduct, zProducts } from "@/schemas/zFrequent";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchBrand(slug: string) {
  const products = await (
    await fetch(API_URL + "/brands/" + slug + "/products", {
      next: { tags: ["all"] },
    })
  ).json();

  const categories = await (
    await fetch(API_URL + "/brands/" + slug + "/categories", {
      next: { tags: ["all"] },
    })
  ).json();

  return {
    products: products.data as zProduct[],
    meta: products.meta as zMeta,
    categories: categories as {
      id: number;
      name: string;
      product_count: number;
      image: string;
      products: zProducts
    }[],
  };
}

export async function getBrandByCategory(
  slug: string,
  categories_string: string,
  page?: number,
  latest?: string,
  price?: string,
  paginate?: number,
  perPage?: number
) {
  const brand = await (
    await fetch(
      API_URL +
        `/brands/${slug}/products?categories=${
          categories_string || ""
        }&paginate=${perPage || "25"}&include=discount,brand,mainImage,mainCategory&page=${page || 0}${
          latest ? `&latest=${latest}` : ""
        }${price ? `&price=${price}` : ""}${
          paginate ? `&paginate=${paginate}` : ""
        }`,
      {
        next: { tags: ["all"] },
      }
    )
  ).json();

  ////console.log(brand?.data);
  return {
    products: brand?.data as zProduct[],
    meta: brand?.meta as zMeta,
  };
}
