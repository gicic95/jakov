"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  email: z.string().email(),
  apartment: z.string().min(1).max(50),
  cart_id: z.string().min(2).max(50),
  house_number: z.string(),
  address: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
  post_code: z.string().min(2).max(50),
  phone_number: z.string().min(2).max(50),
  note: z.string().min(2).max(50),
  payment_method: z.string().min(2).max(50),
  company_pib: z.number(),
  company_name: z.string(),
  terms: z.boolean().refine((value) => value !== true, {
    message: "Terms must be true.",
  }),
});

export default function CheckoutForm({form}: {form: z.infer<typeof formSchema>, onSubmit: any}) {

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ime</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
