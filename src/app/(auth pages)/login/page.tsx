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
import { Check, X } from "lucide-react";
import AuthenticationCheck from "@/components/frequent/client/AuthenticationCheck";
import { useRouter } from "next/navigation";
import Link from "next/link";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Unesite email!")
    .email("Unesite validnu email adresu!"),
  password: z.string().min(8, "Unesite minimum 8 karaktera"),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: "/",
      });

      if (res?.error) {
        toast("Pogrešan email ili lozinka", {
          icon: (
            <div className="w-6 h-6 bg-red-500 rounded-full flex justify-center items-center">
              <X color="white" className="m-auto" />
            </div>
          ),
        });
      } else
        toast("Uspesna prijava", {
          icon: (
            <div className="w-6 h-6 bg-green-500 rounded-full">
              <Check color="white" />
            </div>
          ),
        });
    } catch (error) {
      error;
    }
  }

  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/"); // Redirect to homepage
    return null; // Render nothing else
  }

  return (
    <div className="max-w-screen-sm m-auto mt-20 mb-20 px-5">
      <div className="text-4xl text-center mb-10 w-fit mx-auto font-light ">
        <div className="flex w-fit text-gray-600 gap-3">
          {" "}
          <Link href="/login">Uloguj se /  {' '} </Link>
          <Link href="/register">Registruj se </Link>
        </div>
        <hr className="border-const_secondary mt-2" />
      </div>
      <p className="text-center text-xs text-gray-600">Dobrodošli</p>
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
                  <Input placeholder="Adresa E-pošte*" className="w-full" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Lozinka*" type="password" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-between">
          <Button className="p-5 px-10 bg-const_secondary text-white" onClick={form.handleSubmit(onSubmit)}>Uloguj se</Button>
          <Link href="/zaboravljena-lozinka">
            <span className="text-const_secondary">Zaboravili ste lozinku?</span> 
            </Link>

          </div>
        </form>
      </Form>
    </div>
  );
}
