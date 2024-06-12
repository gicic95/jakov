"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StaticWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="w-full mt-10 grid grid-cols-1  sm:grid-cols-10">
      <div className="w-full min-h-52 flex flex-col gap-5 sm:pr-3">
        <Link
          href="/nacini-placanja/krediti"
          className={`w-full text-center text-sm flex justify-center rounded-sm shadow-md  items-center p-4 ${
            pathname === "/nacini-placanja/krediti"
              ? "bg-neutral-100 text-black "
              : "bg-const_secondary text-white shadow-gray-500"
          }"`}
        >
          Krediti
        </Link>
        <Link
          href="/nacini-placanja/gotovina-sa-popustom"
          className={`w-full  text-center text-sm flex justify-center rounded-sm shadow-md  items-center p-4 ${
            pathname === "/nacini-placanja/gotovina-sa-popustom"
              ? "bg-neutral-100 text-black "
              : "bg-const_secondary text-white shadow-gray-500"
          }"`}
        >
          Gotovina sa popustom
        </Link>
        <Link
          href="/nacini-placanja/cekovi-bez-kamate"
          className={`w-full  text-center text-sm flex justify-center rounded-sm shadow-md  items-center p-4 ${
            pathname === "/nacini-placanja/cekovi-bez-kamate"
              ? "bg-neutral-100 text-black "
              : "bg-const_secondary text-white shadow-gray-500"
          }"`}
        >
          Čekovima bez kamate
        </Link>
        <Link
          href="/nacini-placanja/platne-kartice"
          className={`w-full  text-center text-sm flex justify-center rounded-sm shadow-md  items-center p-4 ${
            pathname === "/nacini-placanja/platne-kartice"
              ? "bg-neutral-100 text-black "
              : "bg-const_secondary text-white shadow-gray-500"
          }"`}
        >
          Platne kartice
        </Link>
        <Link
          href="/nacini-placanja/povracaj-pdv-a"
          className={`w-full  text-center text-sm flex justify-center rounded-sm shadow-md  items-center p-4 ${
            pathname === "/nacini-placanja/povracaj-pdv-a"
              ? "bg-neutral-100 text-black "
              : "bg-const_secondary text-white shadow-gray-500"
          }"`}
        >
          Povraćaj PDV-a
        </Link>
      </div>

      <div className="col-span-9 pr-2 mt-10 sm:mt-0 border">{children}</div>
    </div>
  );
}
