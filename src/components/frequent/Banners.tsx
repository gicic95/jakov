import { cn } from "@/lib/utils";
import { zBannerHorizontal } from "@/schemas/zFrequent";
import Image from "next/image";
import Link from "next/link";

export default function BannerHorizontal({
  className,
  banners,
  banner,
}: {
  className?: string;
  banners?: zBannerHorizontal[];
  banner?: zBannerHorizontal;
}) {
  return (
    <div className="px-3 sm:px-0  flex flex-col gap-5 mt-5 max-w-screen-2xl h-fit m-auto">
      {banners?.length ? (
        banners?.map((banner, index) => {
          return (
            banner?.position?.name.includes("orizontal") && banner?.desktop_image && (
              <Link
                href={banner?.link || "#"}
                className={cn("w-full relative  ", className)}
              >
                {banner?.position?.name.includes("orizontal") && (
                  <Image
                    src={banner?.desktop_image || ""}
                    alt={banner?.position.name || "banner_horizontal"}
                    className="object-contain w-full hidden sm:flex rounded-xl"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} // optional
                  />
                )}
                {banner?.position?.name.includes("orizontal") && (
                  <Image
                    src={banner?.mobile_image || ""}
                    alt={banner?.position.name || "banner_horizontal"}
                    className="object-scale-down w-full sm:hidden rounded-xl"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} // optional
                  />
                )}
              </Link>
            )
          );
        })
      ) : null}
      {banner?.desktop_image ? (
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
            className="object-scale-down w-full sm:hidden rounded-xl"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
        </Link>
      ) : null}
    </div>
  );
}
