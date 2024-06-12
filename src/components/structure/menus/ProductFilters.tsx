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

export default function Filters({
  category,
  currentCategory,
  setFilters,
  attributesSSR,
  banners,
  searchParams,
}: {
  category?: zCategory[];
  currentCategory: string;
  setFilters: any;
  attributesSSR: zAttributes[];
  banners: zBannerHorizontal[];
  searchParams?:[string, string][]
}) {
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col">
        {attributesSSR.length > 0 ? (
          <div className="flex  flex-col w-full min-h-72 p-3 bg-white rounded-lg text-gray-800 leading-7 tracking-wide text-xs sm:text-sm font-light">
            <>
              <p className="text-lg flex justify-between font-semibold">
                <span>Filteri</span>
                <span
                  onClick={() => {
                    router.push(pathname , {scroll:false} );
                  }}
                  className="cursor-pointer text-xs my-auto font-normal"
                >Izbriši</span>
              </p>
              
              <hr className="mt-2"/>
              {attributesSSR
                ?.map((att, index) => {
                  return att?.id ? (
                    <CheckboxHook
                      key={index}
                      items={
                        att?.values
                          ?.filter(
                            (e) =>
                              e.value.products_count ||
                              searchParams?.map((i) => i[0]).flat()?.includes(att.attribute.name)
                          )
                          ?.map((v) => {
                            return {
                              id: v?.value?.id?.toString(),
                              label: v?.value?.value || "",
                              count: v?.value?.products_count || 0,
                            };
                          }) || []
                      }

                      parent_id={{
                        id: att?.attribute?.id?.toString(),
                        label: att?.attribute?.name || "",
                      }}
                    />
                  ) : (
                    <></>
                  );
                })
                ?.slice(0, open ? attributesSSR.length : 5)}
              {attributesSSR?.length > 5 ? (
                !open ? (
                  <p
                    onClick={() => setOpen(true)}
                    className="text-center text-lg mt-2 text-const_secondary underline cursor-pointer"
                  >
                    Prikaži sve
                  </p>
                ) : (
                  <p
                    onClick={() => setOpen(false)}
                    className="text-center text-lg mt-2 text-const_secondary underline cursor-pointer"
                  >
                    Prikaži manje
                  </p>
                )
              ) : (
                <></>
              )}
            </>
          </div>
        ) : (
          <></>
        )}
        <BannerVertical banners={banners} />
      </div>
    </>
  );
}