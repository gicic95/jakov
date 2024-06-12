"use server";

import {
  zBannerHorizontal,
  zCategory,
  zMeta,
  zProduct,
  zProducts,
  zAttributes,
  zMenuCategory,
  menuCategory,
  menuCategorySchema,
  menuCategoriesSchema,
  zMenuCategories,
} from "@/schemas/zFrequent";
import { useSession } from "next-auth/react";
import { cookies } from "next/headers";
import { PlaceOrderSchema } from "../(buy flow)/zavrsi-kupovinu/page";
import { z } from "zod";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getUserInfo() {
  const cookie = cookies();

  const res = await fetch(`${API_URL}/users/token?include=addresses`, {
    headers: {
      Authorization: `Bearer ${cookie.get("token")?.value}`,
      Accept: "application/json",
    },
    next: {
      revalidate: 0,
    },
  });
  const data = await res.json();
  return {
    ...data.data,
  };
}

export async function getCartID() {
  const cookie = cookies();

  const res = await fetch(`${API_URL}/users/token`, {
    headers: {
      Authorization: `Bearer ${cookie.get("token")?.value}`,
      Accept: "application/json",
    },
  });
  const data = await res.json();
  return data?.data?.id as number;
}

export async function getUserCart(cart_id?: string) {
  const cookie = cookies();

  const res = await fetch(`${API_URL}/cart?instance=cart&cart_id=${cart_id}`, {
    headers: {
      Authorization: `Bearer ${cookie.get("token")?.value}`,
      Accept: "application/json",
    },
  });
  const data = await res.json();
  return {
    ...data.data,
  };
}
export async function getUserWishllist(cart_id?: string) {
  const cookie = cookies();

  const res = await fetch(
    `${API_URL}/cart?instance=wishlist&cart_id=${cart_id}`,
    {
      headers: {
        Authorization: `Bearer ${cookie.get("token")?.value}`,
        Accept: "application/json",
      },
    }
  );
  const data = await res.json();
  return {
    ...data.data,
  };
}

export async function addToCart(
  cart_id: string,
  product_id: number,
  quantity: number,
  instance: string
) {
  const cookie = cookies();

  const id = await getCartID();

  const formData = new FormData();
  formData.append("instance", instance);
  formData.append("cart_id", cart_id ? cart_id : id.toString());
  formData.append("product_id", product_id.toString());
  formData.append("quantity", quantity.toString());

  const res = await fetch(`${API_URL}/cart/items`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cookie.get("token")?.value}`,
      Accept: "application/json",
    },
    body: formData,
  });

  const data = await res.json();

  //console.log(data);

  return {
    ...data.data,
  };
}

export async function wishlistToCart(cart_id: string, wishlist_id: string) {
  const cookie = cookies();

  const formData = new FormData();
  formData.append("cart_id", cart_id);
  formData.append("wishlist_id", wishlist_id);

  const res = await fetch(API_URL + "/wishlist-to-cart", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cookie.get("token")?.value}`,
      Accept: "application/json",
    },
    body: formData,
  });

  const data = await res.json();

  return {
    ...data.data,
  };
}

export async function transferToCart(
  cart_id: string,
  product_id: number,
  wishlist_id: string
) {
  const cookie = cookies();

  const formData = new FormData();
  formData.append("cart_id", cart_id);
  formData.append("product_id", product_id.toString());
  formData.append("wishlist_id", wishlist_id);

  const res = await fetch(API_URL + "/wishlist-to-cart/single", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cookie.get("token")?.value}`,
      Accept: "application/json",
    },
    body: formData,
  });

  const data = await res.json();

  return {
    ...data.data,
  };
}

export async function removeFromCart(
  cart_id: string,
  product_id: number,
  quantity: number,
  instance: string
) {
  const cookie = cookies();

  const id = await getCartID();
  const formData = {
    instance: instance,
    cart_id: cart_id ? cart_id : id.toString(),
    product_id: product_id.toString(),
    quantity: quantity.toString(),
  };

  const res = await fetch(`${API_URL}/cart/items`, {
    method:
      quantity > 0 && instance !== "wishlist"
        ? quantity < 0
          ? "DELETE"
          : "PATCH"
        : "DELETE",
    headers: {
      Authorization: `Bearer ${cookie.get("token")?.value}`,
      Accept: "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json",
      "Accept-Language": "en-US,en;q=0.9,sr;q=0.8",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  return {
    ...data.data,
  };
}

export async function emptyCart(cart_id: string, instance: string) {
  const cookie = cookies();

  const id = await getCartID();
  const formData = {
    instance: instance,
    cart_id: cart_id ? cart_id : id.toString(),
  };

  const res = await fetch(`${API_URL}/cart`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${cookie.get("token")?.value}`,
      Accept: "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json",
      "Accept-Language": "en-US,en;q=0.9,sr;q=0.8",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  return {
    ...data.data,
  };
}

export async function getCategoryBanner(category: zCategory) {
  const res = await fetch(`${API_URL}/banners?paginate=100`, {
    next: { tags: ["all", "category_banners"] },
  });
  ////console.log("id", category?.id);
  const data = await res.json();
  let tmp = data?.data?.filter((item: zBannerHorizontal) =>
    item?.category_id
      ?.split(",")
      ?.includes(category?.id?.toString() || "asdasd")
      ? true
      : false
  );

  return tmp as zBannerHorizontal[];
}

export async function fetchCategory(slug: string) {
  const res = await fetch(
    `${API_URL}/categories/${slug}?include=all_subcategories`,
    { next: { tags: ["all", "category"] } }
  );
  const data = await res.json();

  return {
    ...(data.data as zCategory),
  };
}

export async function fetchAllCategories() {
  const res = await fetch(
    `${API_URL}/categories?include=all_subcategories&main=1`,
    {
      next: { tags: ["all", "all_categories"] },
    }
  );
  const data = await res.json();

  return data?.data as zMenuCategories;
}

export async function fetchProducts(
  slug: string,
  page?: number,
  latest?: string,
  price?: string,
  paginate?: number,
  attributes?: string,
  perPage?: number
) {
  const res = await fetch(
    `${API_URL}/categories/${slug}/products?paginate=${perPage || "25"}${
      attributes ? "&attribute_values=" + attributes : ""
    }&include=discount,brand,mainImage,mainCategory&page=${page || 0}${
      latest ? `&latest=${latest}` : ""
    }${price ? `&price=${price}` : ""}${
      paginate ? `&paginate=${paginate}` : ""
    }`,
    { next: { tags: ["all", "products"] }}
  
  );

  const data = await res.json();
  return {
    products: data.data as zProducts,
    meta: data.meta as zMeta,
  };
}

export async function fetchAction(
  slug: string,
  category?: string,
  page?: number,
  latest?: string,
  price?: string,
  paginate?: number,
  attributes?: string,
  perPage?: number
) {
  const res = await fetch(
    `${API_URL}/catalog-stickers/${slug}?${
      category ? `category=${category}&` : ""
    }paginate=${perPage || "25"}${
      attributes ? "&attribute_values=" + attributes : ""
    }&include=discount,brand,mainImage,mainCategory&page=${page || 0}${
      latest ? `&latest=${latest}` : ""
    }${price ? `&price=${price}` : ""}${
      paginate ? `&paginate=${paginate}` : ""
    }`,
    { next: { tags: ["all", "products"] } }
  );

  const data = await res.json();
  return {
    products: data.data as zProducts,
    meta: data.meta as zMeta,
  };
}

export async function fetchProduct(slug: string, category_slug: string) {
  const res = await fetch(
    `${API_URL}/products/${slug}?include=categories,images,discount.type,mainCategory,approvedRatings,brand,supplier,answeredQuestions.user`,
    { next: { tags: ["all", "product"] } }
  );

  const data = await res?.json();

  return {
    ...(data.data as zProducts),
  };
}

export async function fetchSEO_Product(slug: string) {
  const res = await fetch(`${API_URL}/seo-products/${slug}`, {
    next: { tags: ["all", "product"] },
  });

  const data = await res?.json();

  return data.data as {
    sku: string;
    name: string;
    main_image: {
      id: number;
      main: boolean;
      tiny: string;
      small: string;
      medium: string;
      large: string;
    };
    brand: {
      id: number;
      name: string;
      image: string | null;
    };
    price: number;
    seo_title: string;
    seo_description: string;
    seo_keywords: string | null;
    seo_canonical: string | null;
    seo_meta_robots: string;
  };
}

export async function fetchSEO_Category(slug: string) {
  const res = await fetch(`${API_URL}/seo-categories/${slug}`, {
    next: { tags: ["all", "product"] },
  });

  const data = await res?.json();

  return data.data as {
    name: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string | null;
    seo_canonical: string | null;
    seo_meta_robots: string;
  };
}

export async function fetchSEO_Action(slug: string) {
  const res = await fetch(`${API_URL}/seo-actions/${slug}`, {
    next: { tags: ["all", "product"] },
  });

  const data = await res?.json();

  return data.data as {
    name: string;
    image: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string | null;
    seo_canonical: string | null;
    seo_meta_robots: string;
  };
}

export async function fetchSEO_News(slug: string) {
  const res = await fetch(`${API_URL}/seo-news/${slug}`, {
    next: { tags: ["all", "product"] },
  });

  const data = await res?.json();

  return data.data as {
    name: string;
    image: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string | null;
    seo_canonical: string | null;
    seo_meta_robots: string;
  };
}

export async function fetchSEO(slug: string) {
  const res = await fetch(`${API_URL}/seo-static-pages`, {
    next: { tags: ["all", "product"] },
  });

  const data = await res?.json();

  return (
    data.data as {
      seo_url: string;
      seo_title: string;
      seo_description: string;
      seo_keywords: string | null;
      seo_canonical: string | null;
      seo_meta_robots: string;
    }[]
  ).find((i) => i.seo_url === slug);
}

export async function getAttributes({
  category_slug,
  additional,
  action,
}: {
  category_slug: string;
  additional?: string;
  action?: string;
}) {
  try {
    const res = await fetch(
      `${API_URL}/categories/${category_slug}/attributes?${
        additional && `&attribute_values=${additional}`
      }${action ? `&catalog_sticker_type_slug=${action}` : ""}`,
      { next: { tags: ["all", "attributes"] } }
    );
    const data = await res.json();
    return data?.data as zAttributes[];
  } catch {
    return [];
  }
}

export async function getAttributesAction({
  category_slug,
  additional,
}: {
  category_slug: string;
  additional?: string;
}) {
  const res = await fetch(
    `${API_URL}/catalog-stickers/${category_slug}/attributes?${
      additional && `&attribute_values=${additional}`
    }`,
    { next: { tags: ["all", "attributes"] } }
  );
  const data = await res.json();
  return data?.data as zAttributes[];
}

export async function searchProducts(search: string) {
  const res = await fetch(API_URL + `/products?search=${search}`);
  const data = await res.json();
  return {
    ...(data.data as zProduct[]),
  };
}

export async function placeOrder({ values }: { values: PlaceOrderSchema }) {
  const cookie = cookies();

  const formData = new FormData();
  for (const key in values) {
    formData.append(key, values[key]);
  }

  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cookie.get("token")?.value}`,
      Accept: "application/json",
    },
    body: formData,
  });

  const data = await res.json();


  return {
    ...data.data,
  };
}

export async function getBexPlaces() {
  const res = await fetch(`${API_URL}/bex_places`);

  //console.log(res);
  const data = await res.json();

  //console.log(data);

  return data.data as {
    id: number;
    municipality_id: number;
    place_id: number;
    place_name: string;
    zip: string;
  }[];
}

export async function getBexStreets() {
  const res = await fetch(`${API_URL}/bex_streets`);

  //console.log(res);
  const data = await res.json();

  //console.log(data);

  return data.data as {
    id: number;
    place_id: number;
    street_id: string;
    street_name: string;
  }[];
}
