"use client";

import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

export default function PromoCode({ code }: { code: string }) {

  return (
    <div className="w-full min-h-32 mt-5 p-2 pl-3 rounded-md bg-blue-50">
        <>
          <p className=" font-medium">PROMO KOD ZA POPUST</p>
          <p className="text-gray-700 font-light text-sm">
            Pri naručivanju proizvoda, unesi promo kod i ostvari neverovatno
            sniženje!!! Napravi nalog PROMO KOD TE ČEKA!!!
          </p>

          <div className="w-full grid grid-cols-3 mt-2">
            <div className="col-span-2 bg-[#8bc34a] border-[#8bc34a] border-dashed border-2 flex justify-center items-center bg-opacity-20 rounded-lg min-h-12">
              <p className="text-2xl font-black text-[#8bc34a]">{code}</p>
            </div>
            <div
              onClick={() => {
                navigator.clipboard.writeText(code);
                toast.success("Kod je kopiran");
              }}
              className="flex cursor-pointer pr-1 justify-center items-center gap-2"
            >
              <CopyIcon className="w-5" />
              <p className="text-xs">Kopiraj kod </p>
            </div>
          </div>
        </>
      
    </div>
  );
}
