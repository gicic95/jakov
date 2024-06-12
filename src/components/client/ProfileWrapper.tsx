"use client";
import { CircleUserRound, ContainerIcon, Home, Power, User2 } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {  useRouter } from "next/navigation";

export default function ProfileWrapper({ children } : {children:React.ReactNode}) {
  const { data } = useSession();
  const router = useRouter();

  return (
    <>
      <div className="m-auto max-w-screen-lg  min-h-52 mt-10 w-full flex flex-col sm:flex-row ">
        <div className="w-full sm:w-1/3 h-full px-10 pb-10 sm:p-0 ">
          <div className="w-full justify-evenly flex-col items-center  flex p-5 aspect-square rounded-xl shadow-gray-300 shadow-inner border">
            <div>
              <div className="flex justify-center items-center h-fit">
                <CircleUserRound className="w-10 h-10 mr-5 aspect-square" />
                <p>{data?.user?.name}</p>
              </div>
              <p className="text-gray-400 text-sm  mt-5 text-center">
                {data?.user?.email}
              </p>
            </div>
            
            <p className="cursor-pointer text-const_highlight underline" onClick={()=>{signOut()}}>Odjavi se</p>

            <div className="w-full grid grid-cols-3 gap-2">
              <Link
                href={"/profil/adrese"}
                className="aspect-square text-sm hover:shadow-gray-400 curspo flex justify-center items-center flex-col shadow-md rounded-xl"
              >
                <Home />
                Adrese
              </Link>
              <Link
                href={"/profil/porudzbine"}
                className="aspect-square text-sm hover:shadow-gray-400 curspo flex justify-center items-center flex-col shadow-md rounded-xl"
              >
                <ContainerIcon />
                Porudžbine
              </Link>
              <Link
                href={"/profil"}
                className="aspect-square text-sm hover:shadow-gray-400 curspo flex justify-center items-center flex-col shadow-md rounded-xl"
              >
                <User2 />
                Nalog
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full  sm:w-2/3 h-full px-10 mb-10  sm:p-0">
          <div className="  min-h-56 sm:overflow-y-scroll  sm:aspect-square shadow-gray-300 rounded-xl sm:ml-10 border shadow-inner ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
