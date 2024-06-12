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
import { registerAccount } from "@/app/actions/userProfileActions";

const formSchema = z.object({
  name: z.string().min(2, "Unesite ime od najmanje 3 karaktera").max(50),
  email: z.string().min(1, "Unesite email!").email("Unesite validnu email adresu!"),
  password: z.string().min(8, "Unesite minimum 8 karaktera"),
  confirm_password: z.string()
});

export default function RegisterPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      password:"",
      confirm_password:""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await registerAccount(values);
    
    if (typeof window !== "undefined" && res === 200) {
        window.location.pathname = "/login";
    }
  }
  return (
    <div className="max-w-screen-2xl mb-10 m-auto flex flex-col justify-center items-center h-fit mt-10 ">
      <p className="text-4xl mb-10 text-const_highlight uppercase font-bold">
        Registruj se
      </p>

      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full sm:w-1/3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Ime" {...field} />
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
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>
                  
                </FormDescription>
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
                  <Input placeholder="Lozinka" {...field} />
                </FormControl>
                <FormDescription>
                  
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Potvrdi lozinku" {...field} />
                </FormControl>
                <FormDescription>
                  
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-const_secondary hover:bg-const_highlight" type="submit">REGISTRUJ SE</Button>
        </form>
      </Form>
    </div>
  );
}
