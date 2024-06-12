"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import CertifiedShowCase from "./CertifiedShowCase";
import { useState } from "react";


const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
export default function Newsletter() {
  const [email, setEmail] = useState<string>("");

  const submit = async () => {
    const res = await fetch(API_URL + "/newsletter/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    const data = await res.json();
  }

  return (
    <><div className="w-full aspect-[4] my-10 sm:my-0  relative flex justify-center flex-col items-center">
    <Image
      src="/assets/newsletter/woman.png"
      alt="newsletter"
      fill
      className="object-cover opacity-50 -z-0"
    />
    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-white via-transparent to-white"></div>
    <Image
      src="/assets/newsletter/abs-tl.png"
      alt="logo"
      width={390}
      height={630}
      className="absolute w-[30vw] sm:w-[20vw]  sm:flex -top-[80%] drop-shadow-md left-0 object-contain "
    />
    <Image
      src="/assets/newsletter/abs-bl.png"
      alt="logo"
      width={314}
      height={440}
      className="absolute w-[25vw] sm:w-[15vw]  sm:flex drop-shadow-md -bottom-[20%] left-0 object-contain "
    />
    <Image
      src="/assets/newsletter/abs-tr.png"
      alt="logo"
      width={314}
      height={440}
      className="absolute w-[25vw] sm:w-[15vw]  sm:flex drop-shadow-md -top-[50%] right-0 object-contain "
    />
    <Image
      src="/assets/newsletter/abs-br.png"
      alt="logo"
      width={314}
      height={440}
      className="absolute w-[25vw] sm:w-[15vw]  sm:flex drop-shadow-md -bottom-[20%] right-0 object-contain "
    />

    <p className="font-bold text-xl sm:text-3xl mt-10 sm:mt-0 z-20">PRIJAVA ZA NEWSLETTER</p>

    <div className="flex w-full sm:w-fit text-sm sm:text-base flex-col sm:flex-row relative justify-center px-10  items-center my-10">
      <input
        type="text"
        placeholder="Unesite vašu e-mail adresu "
        className=" w-full sm:w-[30vw] bg-white  z-50 py-4 sm:min-w-[500px] px-5 sm:px-10 rounded-full"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={()=>submit()} className="z-50 absolute top-0 right-[10%] h-[120%] -translate-y-[10%] -translate-x-0 sm:translate-x-10 sm:px-[10%] rounded-full">POŠALJI</Button>
    </div>
  </div>
  
  <CertifiedShowCase/></>
  );
}
