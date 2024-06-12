import z from "zod";
import {finalProductSchema} from "./zFrequent";

export const HeroBannerSchema = z.array(
  z.object({
    position: z.object({
      id: z.number(),
      name: z.string(),
    }),
    mobile_image: z.string(),
    desktop_image: z.string(),
    link: z.string(),
    active: z.boolean(),
    id: z.number(),
    
  })
);

export const ProductCategoriesShowCaseSchema = z.object({
  image: z.string(),
  name: z.string(),
  data: z.array(
    z.object({
      name: z.string(),
      image: z.string(),
      link: z.string(),
    })
  ),
});

export const SectionSchema = z.object({
  name: z.string(),
  id: z.number(),
  products: z.array(finalProductSchema),
})

// extract the inferred type
export type zHeroBanner = z.infer<typeof HeroBannerSchema> | null;

export type zProductCategoriesShowCase = z.infer<typeof ProductCategoriesShowCaseSchema> | null;

export type zSection = z.infer<typeof SectionSchema> | null
export type zSections = z.infer<typeof SectionSchema> | null