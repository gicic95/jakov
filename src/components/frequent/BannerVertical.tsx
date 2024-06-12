import { cn } from "@/lib/utils";
import { zBannerHorizontal } from "@/schemas/zFrequent";
import Image from "next/image";
import Link from "next/link";

export default function BannerVertical({
  className,
  banners,
}: {
  className?: string;
  banners?: zBannerHorizontal[];
}) {
  return (
    <div className="px-0  flex flex-col gap-5 mt-5 pb-20 max-w-screen-2xl h-fit ">
      {banners
        ?.filter((i) => !i?.position?.name.includes("orizontal"))
        .map((banner, index) => {
          return (
            banner?.desktop_image && (
              <Link
                href={banner?.link || "#"}
                className={cn("w-full relative  ", className)}
              >
                <Image
                  src={banner?.desktop_image || ""}
                  alt={banner?.position.name || "banner_horizontal"}
                  className="object-contain w-full hidden sm:flex rounded-xl"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} // optional
                />
                <Image
                  src={banner?.mobile_image || ""}
                  alt={banner?.position.name || "banner_horizontal"}
                  className="object-cover w-full sm:hidden rounded-xl"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} // optional
                />
              </Link>
            )
          );
        })}
    </div>
  );
}
