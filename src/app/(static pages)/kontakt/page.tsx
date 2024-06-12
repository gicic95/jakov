"use client";
import Breadcrumb from "@/components/frequent/BreadCrumb";
import { business_details, social_media } from "../../../../CONFIGURE_HERE";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Instagram } from "lucide-react";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(1, "Unesite ime"),
  email: z.string().email("Unesite validan email"),
  title: z.string().min(1, "Naslov je obavezan"),
  message: z.string().min(1, "Poruka je obavezna"),
});

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

const shops = [
  {
    id: 1,
    name: "NIŠ, Zona 3",
    address: "Bulevar Nemanjića 25a, PC Zona 3, lokal 69, 18000 Niš",
    email: "prodaja@jakovsistem.com",
    phone: "018/41-55-229",
    mobile: "066/8-220-220",
  },
  {
    id: 2,
    name: "BEOGRAD",
    address:
      "Jurija Gagarina 14g, lokal 13, naselje Belville, zgrada Maslačak, 11070 Novi Beograd",
    email: "beograd@jakovsistem.com",
    phone: "011/630-50-33",
    mobile: "066/822-04-42",
  },
  {
    id: 3,
    name: "NIŠ, Servis",
    address: "Bulevar Nemanjića 25a, PC Zona 3, lokal 70, 18000 Niš",
    email: "prodaja@jakovsistem.com",
    phone: "018/41-55-223",
  },
];

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch(API_URL + "/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        ////console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }

  return (
    <div className="max-w-screen-2xl mx-auto my-20 px-3 2xl:px-0">
      <Breadcrumb
        list={[
          { link: "/", name: "Početna strana" },
          { link: "#", name: "Kontakt" },
        ]}
      />
      <p className="font-semibold text-3xl mt-7">KONTAKT</p>

      <div className="w-full grid gap-20 mt-20 grid-cols-1 lg:grid-cols-2">
        <div className="">
          <h3 className="text-2xl text-const_secondary font-bold">
            Informacije o kompaniji
          </h3>
          <ul className="text-lg mt-5">
            <li className="w-full grid grid-cols-3">
              <span>Pun naziv pravnog subjekta:</span>{" "}
              <span className="col-span-2">Jakov Sistem d.o.o.</span>
            </li>
            <li className="w-full grid grid-cols-3">
              <span>Poštanska adresa:</span>{" "}
              <span className="col-span-2">
                Bulevar Nemanjića 25a TPC Zona 3 lok 69, 18000 Niš
              </span>
            </li>
            <li className="w-full grid grid-cols-3">
              <span>Delatnost i šifra delatnosti:</span>{" "}
              <span className="col-span-2">
                2620 Proizvodnja računara i periferne opreme
              </span>
            </li>
            <li className="w-full grid grid-cols-3">
              <span>Matični broj:</span>
              <span className="col-span-2">20103299</span>
            </li>
            <li className="w-full grid grid-cols-3">
              <span>Poreski broj (PIB):</span>{" "}
              <span className="col-span-2">104184749</span>
            </li>
            <li className="w-full grid grid-cols-3">
              <span>Web adresa:</span>{" "}
              <span className="col-span-2">
                <a href="https://jakov.rs/"> www.jakov.rs</a>
              </span>
            </li>
            <li className="w-full grid grid-cols-3">
              <span>Kontakt telefon:</span>
              <span className="col-span-2">
                <a href="tel:0184155222"> 018 41 55 222</a>
              </span>
            </li>
            <li className="w-full grid grid-cols-3">
              <span>Kontakt e-mail:</span>
              <span className="col-span-2">info@jakovsistem.com</span>
            </li>
          </ul>
        </div>
        {shops.map((shop) => (
          <div className="flex flex-col" key={shop.id}>
            <h3 className="text-2xl text-const_secondary font-bold">
              {shop.name}
            </h3>
            <ul className="flex flex-col text-lg gap-2 mt-5">
              <li className="w-full grid grid-cols-3">
                <span className="">Adresa:</span>{" "}
                <span className="col-span-2">{shop.address}</span>
              </li>
              <li className="w-full grid grid-cols-3">
                <span>Email:</span>{" "}
                <span className="col-span-2">{shop.email}</span>
              </li>
              <li className="w-full grid grid-cols-3">
                <span>Telefon:</span>
                <span className="col-span-2">
                  <a href={`tel: ${shop.phone}`}>{shop.phone}</a>
                </span>
              </li>
              <li className="w-full grid grid-cols-3">
                <span>Mobilni:</span>
                <span className="col-span-2">
                  {" "}
                  <a href={`tel: ${shop.mobile}`}>{shop.mobile}</a>
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <br />
      <Image
        src={"/assets/kontakt/kontakt_below.webp"}
        alt="Jakov Sistem"
        width={1500}
        height={1000}
        className="h-auto w-full hidden md:flex "
      />
      <div className="max-w-screen-sm mt-10 mx-auto bg-white p-5 rounded-md shadow-md ">
        <p className="text-center text-2xl font-black text-const_secondary">Kontaktirajte nas!</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IME</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Unesite vaše ime"
                      className="placeholder:text-gray-300"
                      {...field}
                    />
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
                  <FormLabel>EMAIL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Unesite vaš email"
                      className="placeholder:text-gray-300 "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NASLOV</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Unesite naslov poruke"
                      className="placeholder:text-gray-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PORUKA</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Unesite vašu poruku"
                      className="placeholder:text-gray-300 min-h-52"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-const_secondary">
              POŠALJI PORUKU
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
