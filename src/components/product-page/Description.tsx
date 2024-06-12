"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Description({ description }: { description: string }) {
  const [show, setShow] = useState<boolean>(false);
  const [shortDescription, setShortDescription] = useState<boolean>(false);

  useEffect(() => {
    if (description.length > 140) {
      setShow(true);
    } else {
      setShortDescription(true);
    }
  }, [description]);

  return (
    <div>
      {show ? description.slice(0, 140) : description}{" "}
      <span className={show ? "" : "hidden"}>...</span>
      <div className={shortDescription ? "hidden" : ""}>
        <p
          className={cn(
            "text-const_secondary cursor-pointer hover:underline font-normal mt-3",
            show ? "" : "hidden"
          )}
          onClick={() => setShow(false)}
        >
          Pogledajte detaljan opis
        </p>
        <p
          className={cn(
            "text-const_secondary cursor-pointer hover:underline font-normal mt-3",
            !show ? "" : "hidden"
          )}
          onClick={() => setShow(true)}
        >
          Skupi detaljan opis
        </p>
      </div>
    </div>
  );
}