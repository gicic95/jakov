import Image from "next/image";
import { benefits } from "../../../CONFIGURE_HERE";


export default function BenefitsShowCase() {
  return (
    <div className="w-full  max-w-screen-xl grid grid-cols-1 sm:grid-cols-3 mb-10 mt-20">
      {benefits.map((benefit, index) => {
        return (
          <div key={index} className="p-4">
            <div className="aspect-[1.2] rounded-2xl border border-gray-300 flex justify-center items-center flex-col">
              <div className="relative w-1/4 aspect-square bg-zinc-100 rounded-full">
                <Image src={benefit.image} alt={benefit.title} sizes="100vw" fill />
              </div>
              <p className="font-bold my-4">{benefit.title}</p>
              <p
                className="w-full px-5 text-sm text-center"
                dangerouslySetInnerHTML={{ __html: benefit.description }}
              ></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
