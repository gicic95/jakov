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
import { signIn, useSession } from "next-auth/react";
import { toast } from "sonner";
import { Check, Loader2Icon, X } from "lucide-react";
import AuthenticationCheck from "@/components/frequent/client/AuthenticationCheck";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Unesite email!")
    .email("Unesite validnu email adresu!"),
});

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const res = await fetch(API_URL + "/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
        }),
      }).then(() => {
        toast(
          "Uspesno poslata poruka za resetovanje lozinke. Pogldejte svoj email."
        );
        router.push("/login"); 
      });
    } catch {
      return;
    }
  }

  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/"); // Redirect to homepage
    return null; // Render nothing else
  }

  return (
    <div className="max-w-screen-sm m-auto mt-20 mb-20 px-5">
      <div className="text-4xl text-center mb-10 w-fit mx-auto font-light ">
        <div className="flex w-fit text-gray-600 gap-3">
          {" "}
          Zaboravljena lozinka
        </div>
        <hr className="border-const_secondary mt-2" />
      </div>
      <p className="text-center text-xs text-gray-600">
        Zaboravili ste lozinku? <br /> Upišite svoje korisničko ime ili adresu
        e-pošte. <br /> Primićete vezu za kreiranje nove lozinke putem e-pošte.
      </p>
      <br />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full "
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Adresa E-pošte*"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="p-5 px-10 bg-const_secondary overflow-hidden text-white"
            onClick={form.handleSubmit(onSubmit)}
          >
            {
                !loading ? 
                "Resetuj lozinku": <Loader2Icon className="animate-spin"/>
            }
          </Button>
        </form>
      </Form>
    </div>
  );
}
