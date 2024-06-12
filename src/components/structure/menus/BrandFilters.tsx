"use client";
import { getAttributes } from "@/app/actions/fequentActions";
import { CheckboxHook } from "@/components/product-page/filters/comboBoxFn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { zAttributeServer, zAttributes, zCategory } from "@/schemas/zFrequent";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BrandFilters({
  categories
}: {
    categories: {
        name: string;
        id: number;
        product_count: number;
    }[];
}) {
  const [attArray, setAttArray] = useState<zAttributeServer[]>([]);

  

  return (
    <>

      <div className="flex  flex-col pl-2 text-gray-600 leading-7 tracking-wide text-xs sm:text-sm font-light">
        {categories?.map((att, index) => {
          return (
            att?.id &&
            att?.id && (
                <Checkbox
                className="shadow-none"
                checked={attArray?.some((value) => Number(value?.id || 0) === Number(att?.id))}
                onCheckedChange={(checked) => {
                  ////console.log(checked);
                }}
              />
            )
          );
        })}
      </div>
    </>
  );
}
