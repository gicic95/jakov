"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { addUserAddress } from "@/app/actions/userProfileActions";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(5).max(50),
  address: z.string().min(5).max(50),
  city: z.string().min(2).max(50),
  postal_code: z.string().min(2).max(50),
  pib: z.string(),
  company_name: z.string(),
});

export default function AddAddress({ params }: { params: { slug: string } }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postal_code: "",
      pib: "",
      company_name: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    ////console.log(values);

    addUserAddress({
        name: values.name,
        lastname: values.lastname,
        email: values.email,
        phone: values.phone,
        address: values.address,
        city: values.city,
        postal_code: values.postal_code,
        pib: Number(values.pib),
        company_name: values.company_name,
        type: params.slug=="naplata"?"billing_address":"shipping_address",
        })

        window.location.pathname = "/profil/adrese";
  }


  return (
    <div className="p-5">
        <p className="text-xl">Dodaj adresu {params.slug=="naplata"?"naplate":"isporuke"}</p>
        <hr />
        <br />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" "
        >
          <div className="gap-3 grid grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ime</FormLabel>
                <FormControl>
                  <Input placeholder="Ime" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prezime</FormLabel>
                <FormControl>
                  <Input placeholder="Prezime" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon</FormLabel>
                <FormControl>
                  <Input placeholder="Telefon" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresa</FormLabel>
                <FormControl>
                  <Input placeholder="Adresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grad</FormLabel>
                <FormControl>
                  <Input placeholder="Grad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="postal_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Poštanski broj</FormLabel>
                <FormControl>
                  <Input placeholder="Poštanski broj" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pib"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PIB</FormLabel>
                <FormControl>
                  <Input placeholder="PIB" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Naziv firme</FormLabel>
                <FormControl>
                  <Input placeholder="Naziv firme" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <Button type="submit" className=" mt-10 w-full  ">
            Dodaj
          </Button>
        </form>
      </Form>
    </div>
  );
}
