"use client";

import { cn } from "@/lib/utils";
import { convertFromRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DescriptionTab({
  description,
  supplier_description,
  style,
  image,
}: {
  description: string | null;
  supplier_description: string | null;
  style?: string;
  image?: string;
}) {
  const [desc, setDesc] = useState<string>();

  useEffect(() => {
    if (!description) return;
    try {
      let tmp = JSON?.parse(description || "{}")?.blocks?.map(
        (block: any, index: any) => {
          return (
            <div key={index}>
              <p>{block.text}</p>
            </div>
          );
        }
      );
      //console.log(tmp);
      setDesc(tmp);
    } catch {
      setDesc(description);
    }
  }, [description]);

  const handleSuplierDesc = (value:any) => {
    let txt = document.createElement('textarea');
    let valueTmp = value;
    if (value?.includes('table'))
      valueTmp = value.replaceAll('\n', '').replaceAll('<br>', '');
    txt.innerHTML = valueTmp;
    return txt.value;
  };

  return (
    <div className="w-full p-2 sm:flex-row mt-10 justify-between flex-col sm:p-5 flex">
      <div className="sm:w-fit sm:max-w-[60%]  w-full">
       {desc}
        <div
          dangerouslySetInnerHTML={{
            __html: handleSuplierDesc(supplier_description) || "",
          }}
          key={"second"}
        />
      </div>
      <div className="sm:max-w-[25%] w-full">
        {image && (
          <Image
            alt="Hero Banner"
            src={image || ""}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className=" sm:mt-0  mx-auto  bg-transparent object-contain sm:flex z-10"
          />
        )}
      </div>
    </div>
  );
}
