import { fetchAllCategories } from "@/app/actions/fequentActions";
import { fetchWeb } from "@/app/actions/fetchWeb";
import NewPageTitle from "@/components/structure/newPageTitle";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;
export default async function Page() {
  const { brands } = await fetchWeb();
  return (
    <>
      <NewPageTitle title="Svi brendovi">
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

      <div className="flex flex-col justify-start gap-20 mb-32 max-w-screen-2xl mx-auto px-3 2xl:px-0 mt-10">
        {Array.from(
          new Set(
            brands
              ?.sort((a, b) => a.name.localeCompare(b.name))
              .map((brand) => brand.name.charAt(0).toUpperCase())
          )
        ).map((firstLetter) => {
          return (
            <div key={firstLetter}>
              <h2 className="text-2xl font-bold">{firstLetter}</h2>
              <div className="w-full grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
                {brands
                  .filter((b) => b.name.charAt(0).toUpperCase() === firstLetter)
                  .map((b) => (
                    <Link
                      key={b.slug}
                      href={"/brend/" + b.slug}
                      className=" h-full flex justify-center items-center flex-col"
                    >
                      <Image
                        alt="brand image"
                        src={
                          b.image
                            ? STORAGE_URL + b.image
                            : "/assets/mini_logo.png"
                        }
                        width={100}
                        height={100}
                        className="h-full object-contain object-center"
                      />
                      {b.name}
                    </Link>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
