"use client"

export default function Description({data}:{data:string}){
    return(
    <p dangerouslySetInnerHTML={{ __html: data}} className="mb-10 mt-20 text-sm text-neutral-700 sm:pl-[18%]" />
    )
}