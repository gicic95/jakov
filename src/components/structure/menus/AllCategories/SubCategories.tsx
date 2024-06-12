import { zMenuCategories, zMenuCategory } from "@/schemas/zFrequent";
import Image from "next/image";
import Link from "next/link";

const STORAGE = process.env.NEXT_PUBLIC_STORAGE_URL || "";
export default function SubCategories({
  category,
}: {
  category: zMenuCategory;
}) {
  return (
    <div className="w-[70vw] grid sm:grid-cols-2 p-5 pb-14 text-sm lg:grid-cols-3 gap-3 xl:grid-cols-4 2xl:grid-cols-5">
      {category?.subcategories?.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex gap-2 items-center">
              {category.slug === "svi-brendovi" ? (
                <Image
                  alt="brand"
                  src={
                    item?.image
                      ? STORAGE + item?.image
                      : "/assets/mini_logo.png"
                  }
                  width={30}
                  height={30}
                  className="object-cover object-center"
                />
              ) : null}
              <Link
                className="font-bold"
                href={
                  category.slug === "svi-brendovi"
                    ? "/brend/" + item.slug
                    : `/${item.slug}`
                }
              >
                {item?.name}
              </Link>
            </div>
            <div className="text-sm pt-3 flex  flex-col">
              {item?.subcategories?.slice(0, 5)?.map((sub, index) => {
                return (
                  <Link
                    key={index}
                    href={
                      category.slug === "svi-brendovi"
                        ? "/brend/" + sub.slug
                        : `/${sub.slug}`
                    }
                    className="my-1"
                  >
                    {sub.name}
                  </Link>
                );
              })}
              {item?.subcategories?.length &&
              category.slug !== "sve-kategorije" &&
              item?.subcategories?.length > 5 ? (
                <Link
                  className="py-3 underline text-const_secondary"
                  href={`/${item?.slug}`}
                >
                  Vidi sve
                </Link>
              ) : null}
            </div>
          </div>
        );
      })}
      <Link
        className="absolute bottom-0 uppercase right-0 p-5 text-base"
        href={"/" + category?.slug}
      >
        Pogledaj sve iz {category?.name}
      </Link>
    </div>
  );
}
