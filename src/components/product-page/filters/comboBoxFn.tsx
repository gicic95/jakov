"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { zAttributeServer } from "@/schemas/zFrequent";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Loader, Loader2 } from "lucide-react";
import Image from "next/image";

const FormSchema = z.object({
  items: z.array(z.string()),
});

export function CheckboxHook({
  items,
  setItems,
  parent_id,
}: {
  items: ({ id: string; label: string; count: number, image:string } | null)[];
  setItems?: any;
  parent_id: { id: string; label: string };
}) {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState<number | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   setItems({
  //     id: parent_id.id,
  //     values: data.items,
  //   });
  // }

  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = (name: string, value: string) => {

    if (name === "Current_category") {
      return "Current_category=" + value;
    }

    let cur = params.get(name);
    const tmp = new URLSearchParams(params.toString());
    if (!cur?.includes(value)) {
      tmp.set(name, cur ? cur + "," + value : value);
    } else {
      let n = cur?.split(",").filter((val) => val !== value);
      if (n.length) {
        tmp.set(
          name,
          cur
            ?.split(",")
            .filter((val) => val !== value)
            .join(",")
        );
      } else {
        tmp.delete(name);
      }
    }
    tmp.set("page", "1");
    return tmp.toString();
  };

  useEffect(() => {
    let tmp = params.get(parent_id?.label)?.split(",");
    setItems(tmp?.[0] || "");
    //console.log("ITEMS", items);
    form.setValue(
      "items",
      items
        .filter((item) => item?.label && tmp?.includes(item.label?.replaceAll(',', '.')))
        ?.map((i) => i?.id || "")
    );
    setLoading(null);
  }, [params]);
  

  return items?.length ? (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        // onChange={form.handleSubmit(onSubmit)}
        className=" "
      >
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              {parent_id?.label !== "Current_category" ? (
                <div className=" ml-0">
                  <FormLabel
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className="text-sm flex justify-between font-black text-black"
                  >
                    {parent_id?.label || ""}{" "}
                    <ChevronDown className={cn(!open ? "" : "rotate-180")} />
                  </FormLabel>
                </div>
              ) : null}
              {items.map((item, index) =>
                (index < 5 || expanded) && item?.id && open ? (
                  <FormField
                    key={item?.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item?.id}
                          onClick={()=>{params.get('Current_category') !== item?.label && setLoading(index)}}
                          className="flex -my-3 cursor-pointer flex-row items-start space-x-3 "
                        >
                          {/* <FormControl>
                            <Checkbox
                              className="shadow-none"
                              
                              checked={field.value?.includes(item?.id || "")}
                            />
                          </FormControl> */}
                          <FormLabel
                            onClick={() => {
                              router.push(
                                pathname +
                                  "?" +
                                  createQueryString(
                                    parent_id?.label,
                                    item?.label.replaceAll(',', '.')
                                  ),
                                { scroll: false }
                              );
                            }}
                            className={cn(
                              "w-full text-gray-500 text-sm cursor-pointer font-normal flex items-center justify-between",
                              field.value?.includes(item?.id || "")
                                ? "font-bold text-black"
                                : ""
                            )}
                          >
                            {item.image ? <Image src={item.image} width={40} height={40} className="my-auto" alt={item.id}/> :null}
                            <p
                              className={cn(
                                parent_id.label !== "Current_category"
                                  ? "w-3/4 truncate"
                                  : "w-full truncate"
                              )}
                            >
                              {item?.label}{" "}
                            </p>
                            {item?.count || loading === index ? (
                              <div
                                className={cn(
                                  "w-1/6  flex justify-center items-center  rounded-sm",
                                  loading !== index ? field.value?.includes(item?.id || "")  
                                    ? "text-white bg-const_secondary"
                                    : "bg-[#EFEFEF]" : ""
                                )}
                              >
                                {loading === index ? <Loader className="animate-spin text-neutral-700 w-4 h-4"  /> : item?.count}
                              </div>
                            ) : null}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ) : (
                  <></>
                )
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        {items?.length > 5 && open ? (
          <Button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-const_secondary  bg-white hover:bg-white m-0 text-left p-0 text-[0.7rem] shadow-none space-y-0 mt-0"
          >
            {!expanded ? " Prikaži više" : "  Prikaži manje"}
          </Button>
        ) : (
          <></>
        )}
      </form>
    </Form>
  ) : (
    <></>
  );
}
