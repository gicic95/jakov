"use client";

import useCart from "@/app/store/useCart";
import Breadcrumb from "@/components/frequent/BreadCrumb";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  getBexPlaces,
  getCartID,
  placeOrder,
} from "@/app/actions/fequentActions";
import { toast } from "sonner";
import { Check, Loader, Loader2, Truck } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { checkPromocode } from "@/app/actions/promocodeActions";

import { useReCaptcha } from "next-recaptcha-v3";
import { checkCaptcha } from "@/app/actions/captchaAction";
import Image from "next/image";
import CartPreview from "@/components/cart/CartPreview";
import PricePreview from "@/components/cart/PricePreview";
import { cart_related } from "../../../../CONFIGURE_HERE";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const formSchema = z.object({
  name: z.string().min(2, "Polje je obavezno").max(50),
  last_name: z.string().min(2, "Polje je obavezno").max(50),
  email: z.string().email("Polje je obavezno"),
  apartment: z.string().optional(),
  floor: z.string().optional(),
  cart_id: z.string(),
  house_number: z.string().min(1, "Polje je obavezno").max(50),
  address: z.string().min(2, "Polje je obavezno").max(50),
  city: z.string().min(2, "Polje je obavezno").max(50),
  post_code: z.string().min(2, "Polje je obavezno").max(50),
  phone_number: z.string().min(9, "Polje je obavezno").max(50),
  note: z.string(),
  payment_method: z.enum([
    "in_store",
    "payment_card",
    "upon_delivery",
    "checks_upon_delivery",
    "current_account",
  ]),
  company_pib: z.string(),
  company_name: z.string(),
  terms: z.boolean().refine((value) => value === true, {
    message: "Morate prihvatiti uslove koriscenja",
  }),
  promocode: z.string().optional(),
});

export type PlaceOrderSchema = z.infer<typeof formSchema>;

export default function CheckoutPage() {
  const { items, total, total_delivery_price } = useCart();

  const [submitted, setSubmitted] = useState(false);
  const [placename, setPlacename] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [places, setPlaces] = useState<
    {
      id: number;
      municipality_id: number;
      place_id: number;
      place_name: string;
      zip: string;
    }[]
  >([]);
  const [fizicko_lice, setFizicko_lice] = useState<boolean>(true);
  const [nestPayArray, setNestPayArray] = useState<any>(null);
  const nestPayRef = useRef(null);

  const [goodPromo, setGoodPromo] = useState<boolean | null>(false);
  const [discounted, setDiscounted] = useState<
    | {
        item: number;
        price: string;
      }[]
    | null
  >(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { executeRecaptcha } = useReCaptcha();

  const checkPromoCode = async (code: string) => {
    setGoodPromo(null);
    const data = checkPromocode({
      promocode: code,
      productIds: items.filter((i) => i?.id && i).map((i) => i!.id),
      userId: await getCartID(),
    }).then((res) => {
      if (res?.status) {
        toast.success(res?.message);
        setGoodPromo(true);
        setDiscounted(
          res?.products?.map((i: { [x: string]: string }) => {
            return {
              item: Object.keys(i)[0],
              price: i[Object.keys(i)[0]],
            };
          })
        );
        let tmp = 0;

        res?.products
          ?.map((i: { [x: string]: string }) => {
            return {
              item: Object.keys(i)[0],
              price: i[Object.keys(i)[0]],
            };
          })
          .forEach((i: { item: string; price: string }) => {
            items?.forEach((e) => {
              if (e?.id === Number(i.item)) {
                tmp += (e.price - Number(i.price)) * (e.quantity || 1);
              }
            });
          });

        setTotalPrice(tmp);
        ////console.log("good promo");
      } else {
        setDiscounted(null);
        setTotalPrice(0);
        toast.error(res?.message || "Došlo je do greške");
        setGoodPromo(false);
        ////console.log("bad promo");
      }
    });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      last_name: "",
      email: "",
      apartment: "",
      cart_id: "",
      house_number: "",
      address: "",
      city: "",
      post_code: "",
      phone_number: "",
      note: "",
      floor: "",
      payment_method: undefined,
      company_name: "",
      company_pib: "",
      terms: false,
      promocode: "",
    },
  });

  async function getBex() {
    await getBexPlaces().then((res) => {
      setPlaces(
        res as {
          id: number;
          municipality_id: number;
          place_id: number;
          place_name: string;
          zip: string;
        }[]
      );
    });
    
  }

  useEffect(() => {
    getBex();
  }, []);

  const { data: usr } = useSession();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitted(true);
    let captcha = true;

    const token = await executeRecaptcha("place_order").then(async (token) => {
      await checkCaptcha(token).then((res) => {
        if (!res?.success) {
          setSubmitted(false);
          toast.error(
            "reCAPTCHA v3 nije prošao. Molimo vas da pokušate ponovo."
          );
          captcha = false;
          return;
        }
      });
    });

    if (!captcha) return;

    //console.log("Nisi bot");
    const data = { ...values, cart_id: localStorage.getItem("store") };
    //console.log(data);
    const res = await placeOrder({ values: data as PlaceOrderSchema }).then(
      (res) => {
        //console.log(res);

        if (res?.order) {
          if (values.payment_method === "payment_card") {
            setNestPayArray(res?.nestpay_data);
          } else {
            window.location.pathname = "/uspesna-kupovina";
          }
        } else {
          toast.error(res?.message);
        }
      }
    );
  }

  useEffect(() => {
    //console.log(nestPayRef.current);
    //console.log(nestPayArray);
    if (nestPayRef?.current == null) return;
    if (nestPayArray !== null) {
      (nestPayRef.current as HTMLFormElement).submit();
    }
  }, [nestPayArray]);

  return nestPayArray !== null ? (
    <div className="w-full h-72 flex justify-center items-center">
      <div className=" h-72 ">
        <Loader2 className="text-black animate-spin" />
      </div>
      <br />
      <form
        onSubmit={(event) => console.log(event.target)}
        ref={nestPayRef}
        method="POST"
        action={nestPayArray?.nestpay_url}
      >
        {Object.keys(nestPayArray).map(
          (name, index) =>
            name !== "nestpay_url" && (
              <input
                key={index}
                type="hidden"
                name={name}
                value={nestPayArray?.[name] || "ne"}
              ></input>
            )
        )}
      </form>
      <br />
    </div>
  ) : (
    <div className=" mx-auto mt-0  ">
      <div className=" bg-white px-3 flex  sm:mt-0 p-5 flex-col justify-center py-7 2xl:px-0  w-full  ">
        <div className="mx-auto max-w-screen-2xl w-full">
          <div className="text-xl font-bold my-auto flex justify-between items-center ">
            Korpa{" "}
            <div className="flex gap-3 text-sm font-medium">
              <Image
                src={"/assets/sigurna_kupovina.png"}
                width={20}
                height={20}
                alt="sigurna kupovina"
              />{" "}
              Sigurna kupovina
            </div>
          </div>

          {!usr?.user?.email ? (
            <p className=" text-sm text-justify mt-3">
              <Link href="/login" className="text-const_secondary ">
                Uloguj se
              </Link>{" "}
              /{" "}
              <Link href="/register" className="text-const_secondary">
                {" "}
                Registruj
              </Link>{" "}
              se i ostvari dodatni popust do čak 10% popusta.
            </p>
          ) : null}
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8  2xl:px-0"
        >
          <div className="max-w-screen-2xl sm:pt-10 gap-4 mx-auto flex flex-col sm:flex-row sm:pr-5">
            <div className="flex flex-col sm:w-3/5 ">
              <div className="sm:p-0 p-4 w-full sm:w-full">
                {!total_delivery_price && total ? (
                  <div className="w-full flex items-center p-5 bg-const_secondary rounded-xl mb-5">
                    <Truck
                      className="w-[10%] hidden sm:flex text-white h-[40px] "
                      strokeWidth={1}
                    />
                    <div className="w-[90%]  text-white h-full">
                      <b>Čestitamo!</b>
                      <p className="text-sm">
                        Ostvarili ste pravo na <b>Besplatnu dostavu</b>!
                      </p>
                    </div>
                  </div>
                ) : null}
                <CartPreview />
                <div className="h-fit sm:hidden w-full  bg-white p-5 sm:p-10  mb-5  rounded-lg">
                  {usr?.user?.email && items?.some((i) => i?.promocode) ? (
                    <div className="w-full sm:hidden my-3 bg-white rounded-md h-12 relative">
                      <FormField
                        control={form.control}
                        name="promocode"
                        render={({ field }) => (
                          <div className="flex gap-3">
                            <FormItem className="w-2/3 h-12">
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Unesite Promo kod"
                                  className="bg-neutral-50"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>

                            <Button
                              type="button"
                              onClick={() => {
                                checkPromoCode(field?.value || "");
                              }}
                              className={` w-1/3 h-12  text-base rounded-lg ${
                                goodPromo === true
                                  ? "bg-white shadow-none border-none"
                                  : "bg-black"
                              }  `}
                            >
                              {goodPromo === true ? (
                                "✅"
                              ) : goodPromo === false ? (
                                "Potvrdi"
                              ) : (
                                <div className="h-full flex justify-center m-auto aspect-square overflow-hidden">
                                  <Loader className="w-6 h-6 animate-spin m-auto" />
                                </div>
                              )}
                            </Button>
                          </div>
                        )}
                      />
                    </div>
                  ) : items?.some((i) => i?.promocode) ? (
                    <p className="my-3 text-const_secondary text-center">
                      Ulogujte se i unesite PROMO KOD
                    </p>
                  ) : (
                    <></>
                  )}

                  <table className="w-full ">
                    <p className="my-5    flex justify-between">
                      Iznos porudžbine
                      {totalPrice ? (
                        <span className="font-semibold text-lg">
                          {Number(total - totalPrice)?.toLocaleString("en-US").replaceAll(',','.')} RSD
                        </span>
                      ) : (
                        <span className="font-semibold text-lg">
                          {Number(total)?.toLocaleString("en-US").replaceAll(',','.')} RSD
                        </span>
                      )}
                    </p>
                    <p className="my-5  text-nowrap pb-4    flex justify-between">
                      Troškovi dostave
                      {total_delivery_price > 0 ? (
                        <span className="font-semibold">
                          RSD {total_delivery_price}
                        </span>
                      ) : (
                        <span className="w-full flex pr-2 font-bold justify-end text-const_highlight gap-2">
                          Besplatna dostava
                        </span>
                      )}
                    </p>
                  </table>

                  <FormField
                    control={form.control}
                    name="payment_method"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormLabel className="text-lg">
                            Način plaćanja
                          </FormLabel>
                          <FormControl
                            className={cn(
                              "bg-neutral-50",
                              field?.value ? "" : "text-red-500 "
                            )}
                          >
                            <SelectTrigger>
                              <SelectValue
                                placeholder="Izaberite način plaćanja"
                                className="text-red-500 placeholder:text-red-500"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="upon_delivery">
                              Plaćanje prilikom preuzimanja
                            </SelectItem>
                            <SelectItem value="payment_card">
                              Plaćanje karticom
                            </SelectItem>
                            <SelectItem value="checks_upon_delivery">
                              Čekovima prilikom preuzimanja
                            </SelectItem>
                            <SelectItem value="in_store">
                              U našim radnjama
                            </SelectItem>
                            <SelectItem value="current_account">
                              Uplatom na tekući račun
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <br />
                  {/* <p className="text-xs text-gray-500 mb-4">
                  Vaši lični podaci biće upotrebljeni za obradu vaše narudžbine,
                  da vaše iskustvo na ovom veb-sajtu bude ugodnije, kao i u
                  druge svrhe kao što je opisano u tekstu{" "}
                  <Link
                    href="/politika-privatnosti"
                    className="text-const_secondary"
                  >
                    politika privatnosti.
                  </Link>
                </p> */}

                  <hr />
                  <table className="w-full ">
                    <p className="mt-5 text-lg flex justify-between">
                      Ukupno za plaćanje
                      <span className="font-semibold flex justify-end flex-col items-end text-2xl">
                        {Number(
                          Number(total) + Number(total_delivery_price)
                        )?.toLocaleString("en-US").replaceAll(',','.')}{" "} RSD
                        <br />
                        <span className="text-xs opacity-50 ">
                          PDV uračunat u cenu
                        </span>
                      </span>
                    </p>
                  </table>
                </div>
              </div>

              <div
                className={cn(
                  "  bg-white p-5  sm:px-10 rounded-lg  w-full sm:w-full mb-10  ",
                  form.getValues().payment_method !== undefined
                    ? ""
                    : "hidden sm:block",
                  !items?.length ? "mt-10" : ""
                )}
              >
                {usr?.user?.email && items?.some((i) => i?.promocode) ? (
                  <div className="w-full hidden sm:flex  my-3 bg-white rounded-md h-12 relative">
                    <FormField
                      control={form.control}
                      name="promocode"
                      render={({ field }) => (
                        <div className="flex gap-3 sm:w-full">
                          <FormItem className="w-2/3 sm:w-full  h-12">
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Unesite Promo kod"
                                className="bg-neutral-50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>

                          <Button
                            type="button"
                            onClick={() => {
                              checkPromoCode(field?.value || "");
                            }}
                            className={` w-1/3 h-12  text-base rounded-lg ${
                              goodPromo === true
                                ? "bg-white shadow-none border-none"
                                : "bg-black"
                            }  `}
                          >
                            {goodPromo === true ? (
                              "✅"
                            ) : goodPromo === false ? (
                              "Potvrdi"
                            ) : (
                              <div className="h-full flex justify-center m-auto aspect-square overflow-hidden">
                                <Loader className="w-6 h-6 animate-spin m-auto" />
                              </div>
                            )}
                          </Button>
                        </div>
                      )}
                    />
                  </div>
                ) : items?.some((i) => i?.promocode) ? (
                  <p className="my-3 text-const_secondary text-center">
                    Ulogujte se i unesite PROMO KOD
                  </p>
                ) : (
                  <></>
                )}
                <RadioGroup
                  defaultValue={fizicko_lice ? "fizicko" : "pravno"}
                  className="flex"
                  onValueChange={(e) => {
                    setFizicko_lice(e === "fizicko" ? true : false);
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fizicko" id="r1" />
                    <Label htmlFor="r1">Fizičko lice</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pravno" id="r2" />
                    <Label htmlFor="r2">Pravno lice</Label>
                  </div>
                </RadioGroup>

                <p className="my-5 text-base font-black ">Podaci za dostavu</p>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-5">
                  <>
                    {" "}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="sm:col-span-3">
                          <FormLabel className=" text-base">
                            Ime{" "}
                            <span className="text-const_secondary font-light">
                              *
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Ime" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem className="sm:col-span-3">
                          <FormLabel className=" text-base">
                            Prezime{" "}
                            <span className="text-const_secondary font-light">
                              *
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Prezime" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>

                  {!fizicko_lice ? (
                    <div className="sm:col-span-6 grid col-span-2 grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="company_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className=" text-base">
                              Naziv kompanije{" "}
                              <span className="text-const_secondary font-light">
                                *
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Naziv kompanije" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company_pib"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sm:col-span-3 text-base">
                              PIB{" "}
                              <span className="text-const_secondary font-light">
                                *
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="PIB" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ) : null}
                  <p className="my-5 hidden col-span-2 sm:col-span-6  sm:flex text-base font-black ">
                    Podaci o isporuci
                  </p>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="col-span-2 sm:col-span-3">
                        <FormLabel className=" text-base">
                          Ulica{" "}
                          <span className="text-const_secondary font-light">
                            *
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Ulica" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="house_number"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-1">
                        <FormLabel className=" text-base text-nowrap text-clip">
                          Broj ulaza{" "}
                          <span className="text-const_secondary font-light">
                            *
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Broj ulaza" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 sm:col-span-2 gap-3 col-span-1">
                    <FormField
                      control={form.control}
                      name="apartment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" text-base">Stan </FormLabel>
                          <FormControl>
                            <Input placeholder="Stan" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="floor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" text-base">Sprat </FormLabel>
                          <FormControl>
                            <Input placeholder="Sprat" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-3">
                        <FormLabel className=" text-base">
                          Grad{" "}
                          <span className="text-const_secondary font-light">
                            *
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Grad"
                            onChange={(e) => {
                              setSearchName(e.currentTarget.value);
                              setPlacename(true);
                            }}
                            value={searchName}
                          />
                        </FormControl>

                        {placename ? (
                          <div className="h-52 w-full overflow-y-scroll bg-white border rounded-md">
                            {places
                              ?.filter((i) =>
                                i.place_name
                                  .toLowerCase()
                                  .includes(searchName.toLowerCase())
                              )
                              .map((i, index) => (
                                <div
                                  key={index}
                                  onClick={() => {
                                    form.setValue(
                                      "city",
                                      i.place_id.toString()
                                    );
                                    form.setValue("post_code", i.zip);
                                    setPlacename(false);
                                    setSearchName(`${i.place_name}`);
                                  }}
                                  className="p-2 cursor-pointer hover:bg-gray-100"
                                >
                                  {i.place_name} - {i.zip}
                                </div>
                              ))}
                          </div>
                        ) : null}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="post_code"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-3">
                        <FormLabel className=" text-base">
                          Poštanski broj{" "}
                          <span className="text-const_secondary font-light">
                            *
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Poštanski broj" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="col-span-2 sm:col-span-3">
                        <FormLabel className=" text-base">
                          Email{" "}
                          <span className="text-const_secondary font-light">
                            *
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem className="col-span-2 sm:col-span-3">
                        <FormLabel className=" text-base">
                          Telefon{" "}
                          <span className="text-const_secondary font-light">
                            *
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Telefon" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="hidden sm:block w-full col-span-3">
                    <FormField
                      control={form.control}
                      name="payment_method"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormLabel className="font-bold  ">
                              Izaberite način plaćanja
                            </FormLabel>
                            <br />
                            <FormControl
                              className={cn(
                                "bg-neutral-50",
                                field?.value ? "" : "text-red-500 "
                              )}
                            >
                              <SelectTrigger>
                                <SelectValue
                                  placeholder="Izaberite način plaćanja"
                                  className="text-red-500 placeholder:text-red-500"
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="upon_delivery">
                                Plaćanje prilikom preuzimanja
                              </SelectItem>
                              <SelectItem value="payment_card">
                                Plaćanje karticom
                              </SelectItem>
                              <SelectItem value="checks_upon_delivery">
                                Čekovima prilikom preuzimanja
                              </SelectItem>
                              <SelectItem value="in_store">
                                U našim radnjama
                              </SelectItem>
                              <SelectItem value="current_account">
                                Uplatom na tekući račun
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <br />
                {/* <br />
                <p className="text-2xl  ">Dodatne informacije</p>
                <hr />
                <br /> */}
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mt-4 text-base">Napomena</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-24 border-gray-400"
                          placeholder="Opciono"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <br />
                <div className="sm:hidden">
                  <p className="text-sm">
                    Vaši lični podaci biće upotrebljeni za obradu vaše
                    narudžbine, da Vaše iskustvo na ovom web sajtu bude
                    ugodnije, kao i u druge svrhe kao što je opisano u tekstu{" "}
                    <Link href={"politika-privatnosti"} className="underline">
                      politika privatnosti
                    </Link>
                    .
                  </p>
                  <br />
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center h-fit">
                          <FormControl>
                            <Input
                              type="checkbox"
                              className="w-5 aspect-square h-fit"
                              placeholder="shadcn"
                              {...field}
                              value={field.value ? "true" : "false"}
                            />
                          </FormControl>
                          <p className="ml-5 text-sm">
                            Pročitao/la sam i prihvatam{" "}
                            <Link
                              className="text-const_secondary"
                              href={"/pravila-i-uslovi-koriscenja"}
                            >
                              uslove
                            </Link>{" "}
                            web sajta.
                          </p>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="mt-5 w-full h-14 bg-const_secondary text-white text-xl"
                  >
                    Naruči
                  </Button>
                </div>
              </div>
            </div>

            <div className="hidden sticky top-5 bottom-5 sm:block sm:w-2/5 p-5 bg-white h-fit rounded-xl">
              <p className="font-bold text-lg">Pregled porudžbine</p>
              <table className="w-full ">
                <p className="my-5    flex justify-between">
                  Iznos porudžbine
                  {totalPrice ? (
                    <span className="font-semibold text-lg">
                      {Number(total - totalPrice)?.toLocaleString("en-US").replaceAll(',','.')} RSD
                    </span>
                  ) : (
                    <span className="font-semibold text-lg">
                      {Number(total)?.toLocaleString("en-US").replaceAll(',','.')} RSD
                    </span>
                  )}
                </p>
                <p className="my-5  text-nowrap pb-4    flex justify-between">
                  Troškovi dostave
                  {total_delivery_price > 0 ? (
                    <span className="font-semibold">
                      {total_delivery_price?.toLocaleString("en-US").replaceAll(',','.')} RSD
                    </span>
                  ) : (
                    <span className="w-full flex pr-2 font-bold justify-end text-const_highlight gap-2">
                      Besplatna dostava
                    </span>
                  )}
                </p>
              </table>
              <hr />
              <table className="w-full ">
                <p className="mt-5 text-lg flex justify-between">
                  Ukupno za plaćanje
                  <span className="font-semibold flex justify-end flex-col items-end text-2xl">
                    {Number(
                      Number(total) + Number(total_delivery_price)
                    )?.toLocaleString("en-US").replaceAll(',','.')}{" "} RSD
                    <br />
                    <span className="text-xs opacity-50 ">
                      PDV uračunat u cenu
                    </span>
                  </span>
                </p>
              </table>
              <br />
              <p className="text-sm">
                Vaši lični podaci biće upotrebljeni za obradu vaše narudžbine,
                da Vaše iskustvo na ovom web sajtu bude ugodnije, kao i u druge
                svrhe kao što je opisano u tekstu{" "}
                <Link href={"politika-privatnosti"} className="underline">
                  politika privatnosti
                </Link>
                .
              </p>
              <br />
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center h-fit">
                      <FormControl>
                        <Input
                          type="checkbox"
                          className="w-5 aspect-square h-fit"
                          placeholder="shadcn"
                          {...field}
                          value={field.value ? "true" : "false"}
                        />
                      </FormControl>
                      <p className="ml-5 text-sm">
                        Pročitao/la sam i prihvatam{" "}
                        <Link
                          className="text-const_secondary"
                          href={"/pravila-i-uslovi-koriscenja"}
                        >
                          uslove
                        </Link>{" "}
                        web sajta.
                      </p>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="mt-5 w-full h-14 bg-const_secondary text-white text-xl"
              >
                Naruči
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
