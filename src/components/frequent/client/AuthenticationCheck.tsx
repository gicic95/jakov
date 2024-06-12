"use client"
import { useSession } from "next-auth/react";
import { useEffect } from "react";


export default function Authenticated () {
    const {status} = useSession(); 

  useEffect(()=>{
    ////console.log(status)
    if (status === "unauthenticated") {
        window.location.href="/login";
    }
  }, [status])

  ////console.log(status);
  
    return null;
}