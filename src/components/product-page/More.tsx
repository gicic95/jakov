"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function More({
  names,
  items,
}: {
  items: React.ReactNode[];
  names: string[];
}) {
  const [active, setActive] = useState(names.includes("Specifikacije proizvoda") ? 1 : 0);

  return (
    <>
      <div id="specifikacije" className="w-full mt-5 sm:flex grid grid-cols-2 sm:align-middle justify-center">
        {names.map((item, index) => {
          return item? (
            <>
              <div
                onClick={() => setActive(index)}
                className={cn(
                  " px-5 my-3 text-center text-xs font-semibold cursor-pointer ",
                  active == index
                    ? " text-const_secondary underline underline-offset-8 "
                    : ""
                )}
                key={index}
              >
                {item}
              </div>
            </>
          ) : null;
        })}
      </div>

      <div className="w-full bg-white rounded-xl border mt-3 pb-5 px-5">
      {items[active]}
      </div>
    </>
  );
}
