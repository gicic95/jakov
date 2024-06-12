"use client";
import { getAttributes } from "@/app/actions/fequentActions";
import BannerVertical from "@/components/frequent/BannerVertical";
import { CheckboxHook } from "@/components/product-page/filters/comboBoxFn";
import {
  zAttributeServer,
  zAttributes,
  zBannerHorizontal,
  zCategory,
} from "@/schemas/zFrequent";
import { RefreshCcw } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function ActionFilters({
  attributesSSR,
  banners,
  searchParams,
  categories,
  setProducts,
}: {
  attributesSSR?: zAttributes[];
  banners: zBannerHorizontal[];
  searchParams?: [string, string][];
  categories: { name: string; image: string }[];
  setProducts: (products: any) => void;
}) {
  const [attArray, setAttArray] = useState<zAttributeServer[]>([]);

  const updateAttArray = (att: zAttributeServer) => {
    if (att === null) {
      setAttArray([]);
      return;
    }
    if (att?.values?.length === 0) {
      setAttArray(attArray.filter((a) => a?.id !== att?.id));
    } else {
      const existingAtt = attArray.find((a) => a?.id === att?.id);
      if (existingAtt) {
        existingAtt.values = att?.values || [];
        setAttArray([...attArray]);
      } else {
        setAttArray([...attArray, att]);
      }
    }
  };

  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="flex  flex-col w-full h-fit p-3 bg-white rounded-lg text-gray-800 leading-7 tracking-wide text-xs sm:text-sm font-light">
          <>
            {categories?.length > 1 ? (
              <>
                <p className="text-lg mb-3 flex justify-between font-semibold">
                  <span>Kategorije</span>
                  <span
                    onClick={() => {
                      router.push(pathname, { scroll: false });
                      setProducts(null);
                    }}
                    className="cursor-pointer text-xs my-auto font-normal"
                  >
                    Izbriši
                  </span>
                </p>

                <hr className="" />
                <br />
                <div>
                  <CheckboxHook
                    items={categories.map((c) => {
                      return {
                        id: c.name,
                        label: c.name,
                        count: 0,
                        image: c.image,
                      };
                    })}
                    setItems={updateAttArray}
                    parent_id={{
                      id: "categories",
                      label: "Current_category",
                    }}
                  />
                </div>

                <br />
              </>
            ) : null}

            {attributesSSR?.length ? (
              <>
                <p className="text-lg flex justify-between font-semibold">
                  <span>Filteri</span>
                  <span
                    onClick={() => {
                      router.push(pathname, { scroll: false });
                    }}
                    className="cursor-pointer text-xs my-auto font-normal"
                  >
                    Izbriši
                  </span>
                </p>

                <hr className="mt-2" />
              </>
            ) : null}
            {attributesSSR
              ?.map((att, index) => {
                return att?.id ? (
                  <div>
                    <CheckboxHook
                      key={index}
                      items={
                        att?.values
                          ?.filter(
                            (e) =>
                              e.value.products_count ||
                              searchParams
                                ?.map((i) => i[0])
                                .flat()
                                ?.includes(att.attribute.name)
                          )
                          ?.map((v) => {
                            return {
                              id: v?.value?.id?.toString(),
                              label:
                                v?.value?.value?.replaceAll(".", ",") || "",
                              count: v?.value?.products_count || 0,
                              image: "",
                            };
                          }) || []
                      }
                      setItems={updateAttArray}
                      parent_id={{
                        id: att?.attribute?.id?.toString(),
                        label: att?.attribute?.name || "",
                      }}
                    />
                  </div>
                ) : (
                  <></>
                );
              })
              ?.slice(0, open ? attributesSSR.length : 5)}
            {attributesSSR?.length ? (
              !open ? (
                <p
                  onClick={() => setOpen(true)}
                  className=" mt-2 text-const_secondary text-center  cursor-pointer"
                >
                  Prikaži sve
                </p>
              ) : (
                <p
                  onClick={() => setOpen(false)}
                  className=" mt-2 text-const_secondary  text-center cursor-pointer"
                >
                  Prikaži manje
                </p>
              )
            ) : (
              <></>
            )}
          </>
        </div>

        <BannerVertical banners={banners} />
      </div>
    </>
  );
}
