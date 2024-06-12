'use client'
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../frequent/BreadCrumb";


export default function NewPageTitle({title, children}:{title:string, children?:React.ReactNode}){
    const {data:usr} = useSession();
    return(
        <div className=" bg-white px-3 flex  sm:mt-0 p-5 flex-col justify-center py-7 2xl:px-0  w-full  ">
        <div className="mx-auto max-w-screen-2xl w-full">
            <Breadcrumb list={[{name:"Početna strana",link:"/"},{name:title,link:""}]}/> <br />
          <div className="text-xl font-bold my-auto flex justify-between items-center ">
            {title}{" "}
            
          </div>

            {children}
         
        </div>
      </div>
    )
}