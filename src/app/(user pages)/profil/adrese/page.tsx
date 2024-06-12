"use client";
import { getCartID, getUserInfo } from "@/app/actions/fequentActions";
import { changePassword, changeUserInfo } from "@/app/actions/userProfileActions";
import ProfileWrapper from "@/components/client/ProfileWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Profile() {
  
    const [addressess, setAddressess] = useState([]);

   useEffect(()=>{
    getUserInfo().then((response) => {
        setAddressess(response?.addresses);
        // Handle the resolved value here
    }).catch((error) => {
        // Handle any errors here
    });
   }, [])


  return (
      <div className="w-full py-5 h-full flex flex-col px-10 pb-10">
        <p className=" text-2xl flex justify-between items-center">Adresa za naplatu <span className="text-sm text-const_highlight">{addressess?.filter((item:any)=>item?.type === "billing_address").length ? <><Link href={'/profil/adrese/izmeni/naplata'} >Izmeni</Link> <span  className="ml-2 bg-white cursor-pointer text-const_highlight hover">Obriši</span></> : <Link href={'/profil/adrese/dodaj/naplata'}>Dodaj</Link>}</span></p>
        <hr />
        {
            addressess?.filter((item:any)=>item?.type === "billing_address").map((item:any, index:number)=>{
                return (
                <div className="w-full flex flex-col mt-5" key={index}>
                    <p className="text-lg font-medium">{item?.name} {item?.last_name}</p>
                    <p className="text-sm">{item?.address}</p>
                    <p className="text-sm">{item?.email}</p>
                    <p className="text-sm">{item?.city}, {item?.post_code}</p>
                    <p className="text-sm">{item?.phone_numer}</p>
                </div>
                )
            })
        }
        <p className=" mt-10 text-2xl flex justify-between items-center">Adresa za isporuku <span className="text-sm text-const_highlight">{addressess?.filter((item:any)=>item?.type === "shipping_address").length ? <><Link href={'/profil/adrese/izmeni/isporuka'} >Izmeni</Link> <span  className="ml-2 bg-white cursor-pointer text-const_highlight hover">Obriši</span></> : <Link href={'/profil/adrese/dodaj/isporuka'}>Dodaj</Link>}</span></p>
        <hr />
        {
            addressess?.filter((item:any)=>item?.type === "shipping_address").map((item:any, index:number)=>{
                return (
                <div className="w-full flex flex-col mt-5" key={index}>
                    <p className="text-lg font-medium">{item?.name} {item?.last_name}</p>
                    <p className="text-sm">{item?.address}</p>
                    <p className="text-sm">{item?.email}</p>
                    <p className="text-sm">{item?.city}, {item?.post_code}</p>
                    <p className="text-sm">{item?.phone_numer}</p>
                </div>
                )
            })
        }
      </div>
  );
}
