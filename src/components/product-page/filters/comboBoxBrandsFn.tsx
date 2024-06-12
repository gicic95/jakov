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
import { useState } from "react";

const FormSchema = z.object({
  items: z.array(z.string()),
});

export function CheckboxHookBrands({
  items,
  setItems,
  defaultItems
}: {
  items: ({ id: string; label: string, count?:number } | null)[] | undefined;
  setItems: (att: any) => void;
  defaultItems?: string[];
}) {
  const [expanded, setExpanded] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: defaultItems || [],
    },
  });

  function onSubmit(data: { items: string[] }) {
    setItems(data?.items?.map((i) => i) || []);
  }


  return items?.length && (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onChange={form.handleSubmit(onSubmit)}
        className=" border-b pb-3"
      >
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              {items.map(
                (item, index) =>
                  (index < 10 || expanded) && item?.id && (
                    <FormField
                      key={item?.id}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item?.id}
                            className="flex my-2 cursor-pointer flex-row items-start space-x-3 "
                          >
                            <FormControl>
                              <Checkbox
                                className="shadow-none"
                                checked={field.value?.includes(item?.id || "")}
                                onCheckedChange={(checked) => {
                                  return checked 
                                    ? field.onChange([...field.value, item?.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item?.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm cursor-pointer font-normal">
                            {item?.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  )
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        {items?.length > 5 && (
          <Button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-gray-600 bg-white hover:bg-white m-0 text-left p-0 text-[0.7rem] shadow-none space-y-0 mt-0"
          >
            {!expanded ? " + Prikaži više" : " - Prikaži manje"}
          </Button>
        )}
      </form>
    </Form>
  );
}
