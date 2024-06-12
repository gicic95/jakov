import { ZodTransformer, z } from "zod";

// schema for product
export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  main_image: z.object({
    large: z.string() || null,
    medium: z.string() || null,
    small: z.string() || null,
    tiny: z.string() || null,
  }),
  promocode: z.boolean() || null,
  promocode_type:
    z.object({
      name: z.string(),
      type: z.string(),
    }) || null,
  main_category_slug: z.string() || null,
  web_price: z.number() || null,
  price: z.number() || null,
  country_of_origin: z.string() || null,
  slug: z.string(),
  quantity: z.number() || null,
  brand:
    z.object({
      id: z.number(),
      name: z.string(),
    }) || null,
  sku: z.string() || null,
  supplier_sku: z.string() || null,
  attributes:
    z.array(
      z.object({
        attribute: z.object({
          name: z.string(),
        }),
        value: z.object({
          value: z.string(),
        }),
      })
    ) || null,
  images:
    z.array(
      z.object({
        large: z.string() || null,
        medium: z.string() || null,
        small: z.string() || null,
        tiny: z.string() || null,
        main: z.boolean(),
      })
    ) || null,
  threed_image: z.string() || null,
  description: z.string() || null,
  retail_price: z.number() || null,
  catalog_stickers:
    z.array(
      z.object({
        id: z.number(),
        sticker: z.string(),
      })
    ) || null,
  discount:
    z.object({
      id: z.number(),
      price: z.number(),
      from: z.string(),
      to: z.string(),
      sticker: z.string(),
    }) || null,
  supplier_description: z.string() || null,
  deliveryPrice: z.number() || null,
  free_delivery: z.number() || null,
});

export const ActionSchema = z.object({
  id: z.number(),
  name: z.string(),
  desktop_image: z.string() || null,
  slug: z.string(),
});

export const NewsSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  image: z.string(),
  created_at: z.string(),
});

export const BannerHozirontalSchema = z.object({
  position: z.object({
    id: z.number(),
    name: z.string(),
  }),
  mobile_image: z.string(),
  desktop_image: z.string(),
  link: z.string(),
  active: z.boolean(),
  category_id: z.string() || null,
  id: z.number(),
});
export const ProductSchemaArray = z.array(ProductSchema);

export const baseCategory = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string() || null,
  level: z.number(),
  slug: z.string(),
  parent_id: z.number() || null,
  products: z.array(ProductSchema) || null,
  // top_description: z.string() || null,
  // bottom_description: z.string() || null,
});

export const menuCategory = z.object({
  name: z.string(),
  slug: z.string(),
  image: z.string().optional() || null,
});

export type MenuCategory = z.infer<typeof menuCategory> & {
  subcategories: MenuCategory[] | never | null;
};

export const menuCategorySchema: z.ZodType<MenuCategory> = menuCategory.extend({
  subcategories: z.lazy(() => menuCategorySchema.array()),
});

export const menuCategoriesSchema = z.array(menuCategorySchema);
export type zMenuCategories = z.infer<typeof menuCategoriesSchema> | null;

export type zMenuCategory = z.infer<typeof menuCategorySchema> | null | never;

export type Category = z.infer<typeof baseCategory> & {
  subcategories: Category[] | never | null;
  parent: Category | never | null;
};

export const categorySchema: z.ZodType<Category> = baseCategory.extend({
  subcategories: z.lazy(() => categorySchema.array()),
  parent: z.lazy(() => categorySchema.nullable()),
});

export const finalProductSchema = ProductSchema.extend({
  categories: z.lazy(() => categorySchema.array()) || null,
  mainCategory: z.lazy(() => categorySchema.array()) || null,
  main_category: z.lazy(() => categorySchema.array()) || null,
  similarProducts: z.lazy(() => ProductSchema.array()) || null,
});

export const attributeSchema = z.object({
  id: z.number(),
  active: z.boolean(),
  attribute: z.object({
    id: z.number(),
    name: z.string(),
  }),
  order: z.number(),
  values: z.array(
    z.object({
      id: z.number(),
      value: z.object({
        id: z.number(),
        value: z.string(),
        products_count: z.number(),
      }),
    })
  ),
});

export const AttributeSchemaServer = z.object({
  id: z.string(),
  values: z.array(z.string()),
});

export type zAttributes = z.infer<typeof attributeSchema> | null;
export type zAttributeServer = z.infer<typeof AttributeSchemaServer> | null;

export type zCategory = z.infer<typeof categorySchema> | null | never;

export const Meta = z.object({
  current_page: z.number(),
  from: z.number(),
  last_page: z.number(),
  per_page: z.number(),
  to: z.number(),
  total: z.number(),
});

export type zAction = z.infer<typeof ActionSchema> | null;
export type zMeta = z.infer<typeof Meta> | null;
export type zBannerHorizontal = z.infer<typeof BannerHozirontalSchema> | null;
// extract the inferred type
export type zProduct = z.infer<typeof finalProductSchema> | null;
export type zProducts = z.infer<typeof ProductSchemaArray> | null;
export type zNews = z.infer<typeof NewsSchema> | null;
