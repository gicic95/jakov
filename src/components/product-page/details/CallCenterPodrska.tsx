import Image from "next/image";
import Link from "next/link";

export default function CallCentarPodrska() {
  return (
    <div className="w-full h-32 p-3 border flex items-center rounded-xl bg-white shadow-sm ">
      <div className="h-full aspect-square  relative">
        <Image
          src={"/assets/callcenter.png"}
          alt={"callcenter"}
          fill
          className=""
        />
      </div>
      <div className="w-full">
        <span className="font-black">CALL CENTAR PODRŠKA</span>
        <br />
        <span className="text-[0.7rem]">
          Imate pitanje u vezi sa ovim proizvodom?
          <br />
          Pitajte <span className="text-const_secondary">online</span> ili nas
          pozovite
          <br />
        </span>
        <div className="text-[0.7rem] flex  gap-2 text-nowrap">
          <Link href="tel:0116305033" className="font-black">
            011 630 50 33
          ,{" "}
          </Link>
          <Link href="tel:0184155222" className="font-black flex">
            {' '}018 41 55 222
            <span className="hidden sm:flex">,{" "}</span>
          </Link>
          <div className="hidden sm:flex">
            <Link href="tel:0668220220" className="font-black">
              066 8 220 220
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
