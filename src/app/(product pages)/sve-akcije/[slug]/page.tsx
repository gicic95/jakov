import { getAction } from "@/app/actions/fetchWeb";
import Breadcrumb from "@/components/frequent/BreadCrumb";
import ProductCard from "@/components/frequent/ProductCard";
import { zAction, zAttributes, zProduct, zProducts } from "@/schemas/zFrequent";
import { Metadata } from "next";
import { SEO } from "../../../../../CONFIGURE_HERE";
import ProductWrapperAction from "@/components/structure/ProductWrapperAction";
import {
  fetchAction,
  fetchSEO_Action,
  getAttributes,
} from "@/app/actions/fequentActions";

 
const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  try {
    const data = await fetchSEO_Action(params.slug).then((data) => {
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
              url: data.image,
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

export default async function ActionPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { data, catalog, categories } = await getAction({ slug: params.slug });

  const action = await getData({
    params: {
      slug: params.slug,
      searchParams: Object.entries(searchParams || []) as [string, string][],
    },
  });

  return (
    <div className=" ">
      <div className="bg-white py-5 w-full">
        <div className="max-w-screen-2xl mx-auto px-3 2xl:px-0">
          <Breadcrumb
            list={[
              { link: "/", name: "Početna strana" },
              { link: "#", name: catalog || "Akcija" },
            ]}
          />
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-3 2xl:px-0">
        {data?.length ? (
          <>
            <ProductWrapperAction
              metaSSR={action?.actionData.meta}
              searchParams={
                Object.entries(searchParams || []) as [string, string][]
              }
              attributesSSR={action?.attributes || []}
              categories={categories}
              init_products={action?.actionData.products as zProducts}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}

export async function getData({
  params,
}: {
  params: { slug: string; searchParams?: [string, string][] };
}) {
  let init_products = null;
  let actionData = null; // await fetchAction(params.slug, params.searchParams?.find((i) => i[0] === "Current_category")?.[1]);

  let attributes = null;
  if (params.searchParams?.length) {
    attributes = (await getAttributes({
      category_slug: serbianLatinToSlug(
        params.searchParams?.find((i) => i[0] === "Current_category")?.[1] || ""
      ),
      action: params.slug,
    })) as zAttributes[];
  }

  function findGetParameter(parameterName: string) {
    return (
      params?.searchParams?.find(([key]) => key === parameterName)?.[1] || null
    );
  }

  if (params.searchParams) {
    let f_filters = await getAttributes({
      category_slug: serbianLatinToSlug(
        params.searchParams?.find((i) => i[0] === "Current_category")?.[1] || ""
      ),
      action: params.slug,
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
                  ?.includes(e.value)
              )
              .map((m) => m.id)
              .join(",")})`,
          ];
        });

      const f_filters = tmpFilter.join("%3B");

      return f_filters;
    });
    attributes = (await getAttributes({
      category_slug: serbianLatinToSlug(
        params.searchParams?.find((i) => i[0] === "Current_category")?.[1] || ""
      ),
      action: params.slug,
      additional: f_filters,
    })) as zAttributes[];
    actionData = await fetchAction(
      params?.slug || "",
      params.searchParams?.find((i) => i[0] === "Current_category")?.[1],
      parseInt(findGetParameter("page") || "0"),
      findGetParameter("latest") || "",
      findGetParameter("price") || "",
      parseInt(findGetParameter("paginate") || "0"),
      f_filters || "",
      parseInt(findGetParameter("perPage") || "0")
    );
  } else {
    //console.log("NO SEARCH PRODUCTS");
    actionData = await fetchAction(params.slug);
  }
  //console.log(actionData.meta, "ACTION DATA");
  if (actionData) {
    return {
      actionData,
      products: init_products,
      attributes,
    };
  }
  return null;
}
