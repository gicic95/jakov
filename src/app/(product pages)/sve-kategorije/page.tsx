import { fetchAllCategories } from "@/app/actions/fequentActions";
import NewPageTitle from "@/components/structure/newPageTitle";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const categories = await fetchAllCategories();
  return (
    <>
      <NewPageTitle title="Sve Kategorije">
        <p className="text-sm mt-3">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </NewPageTitle>
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto px-3 2xl:px-0 max-w-screen-2xl mt-5 mb-10 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
        {categories?.map((category) => {
          return (
            <div key={category.slug} className="flex flex-col gap-3">
              <Link href={"/" + category.slug} className="h-fit font-bold">
                {category.name}
              </Link>
              {category?.subcategories?.map((subcategory) => {
                return (
                  <Link href={"/" + subcategory.slug} key={subcategory.slug}>
                    {subcategory.name}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
