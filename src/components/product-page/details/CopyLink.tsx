"use client"

import { ClipboardCopyIcon } from "lucide-react"
import { toast } from "sonner"

export default function CopyLink({string}:{string?:string}){
    return (
        <p className="flex text-const_secondary cursor-pointer mt-2 sm:mt-0 items-center text-xs" onClick={()=>{
            navigator.clipboard.writeText(string || window.location.href)
            toast("Link je kopiran")
        }}><ClipboardCopyIcon className="mr-2" width={15} /> Kopiraj Link</p>
    )
}