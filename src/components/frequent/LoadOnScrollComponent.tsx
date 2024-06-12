"use client";

import { cn } from "@/lib/utils";
import {  Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function LoadOnScrollComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [viewport, setViewport] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setViewport(true);
    }
  }, [inView]);

  return (
    <>
      <div className=" flex  justify-center w-full  flex-col ">
        <div
          ref={ref}
          className={cn(
            " m-auto text-3xl w-full flex justify-center",
            viewport ? "hidden" : ""
          )}
        >
          <Loader width={30} height={30} className="animate-spin my-20" />
        </div>

        {viewport && children}
      </div>
    </>
  );
}
