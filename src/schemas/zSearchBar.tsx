import { z } from "zod";

export const item = z.object({
  image: z.string(),
  price: z.object({
    regular_price: z.number(),
    regular_price_with_currency: z.string(),
    discount_percentage: z.number(),
  }),
  link: z.string(),
  name: z.string(),
  highlighted_name: z.string(),
});

export const product = z.object({
  title: z.string(),
  items: z.array(item),
  position: z.number(),
  id: z.number(),
});

export const category = z.object({
  title: z.string(),
  items: z.array(
    z.object({
      name: z.string(),
      highlighted_name: z.string(),
      link: z.string(),
      image: z.string() || null,
    })
  ),
  position: z.number(),
});

export const results = z.object({
  product: product,
  popular: product,
  category: category,
});

export const search = z.object({
  products: z.object({
    amounts: z.object({
      current_page: z.number(),
      from: z.number(),
      last_page: z.number(),
      next_page: z.number(),
      per_page: z.number(),
      prev_page: z.number().nullable(),
      to: z.number(),
      total: z.number(),
    }),
    filters: z.array(
      z.object({
        title: z.string(),
        type: z.string(),
        array: z.array(
          z.object({
            count: z.number(),
            hax_code: z.string().nullable(),
            option_key: z.string(),
            option_label: z.string(),
            option_value: z.string(),
            selected: z.boolean(),
            type_id: z.string(),
            url: z.string(),
            url_params: z.object({
                page: z.string(),
              product_list_limit: z.string().nullable(),
              product_list_order: z.string().nullable(),
              proizvodjac: z.string().nullable(),
              q: z.string().nullable(),
            }),
          })
        ),
      })
    ),
    orders: z.array(
      z.object({
        option_key: z.string(),
        option_label: z.string(),
        option_value: z.string(),
        selected: z.boolean(),
        url_params: z.object({
            page: z.string(),
          product_list_limit: z.string().nullable(),
          product_list_order: z.string().nullable(),
          proizvodjac: z.string().nullable(),
          q: z.string().nullable(),
        }),
      })
    ),
    pager:z.array(z.object({
      option_key: z.string(),
      option_label: z.string(),
      option_value: z.string(),
      selected: z.boolean(),
      type: z.string(),
      url_params: z.object({
          page: z.string(),
          product_list_limit: z.string().nullable(),
          product_list_order: z.string().nullable(),
          proizvodjac: z.string().nullable(),
          q: z.string().nullable(),
          }),
    })),
    sorters: z.array(z.object({
      option_key: z.string(),
      option_label: z.string(),
      option_value: z.string(),
      selected: z.boolean(),
      url_params: z.object({
          page: z.string(),
          product_list_limit: z.string().nullable(),
          product_list_order: z.string().nullable(),
          proizvodjac: z.string().nullable(),
          q: z.string().nullable(),
          }),
      })),
    results: z.array(z.object({
      category_ids: z.array(z.number()),
      category_names: z.array(z.string()),
      highlighted_name: z.string(),
      id: z.number(),
      image: z.string(),
      link: z.string(),
      name: z.string(),
      price: z.object({
        regular_price: z.number(),
        regular_price_with_currency: z.string(),
        discount_percentage: z.number(),
      }),
      sku: z.string(),
    }))
  }),
});

export type zSearchItem = z.infer<typeof item> | null;
export type zSearchProduct = z.infer<typeof product> | null;
export type zSearchCategory = z.infer<typeof category> | null;
export type zSearchResults = z.infer<typeof results> | null;

export type zSearch = z.infer<typeof search>;
