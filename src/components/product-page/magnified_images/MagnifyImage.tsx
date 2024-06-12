import { cn } from "@/lib/utils";
import { zProduct } from "@/schemas/zFrequent";
import { ArrowLeft, ArrowLeftIcon, ArrowRight, Rotate3D } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MagnifyImage({
  product,
  current,
  setMagnify,
}: {
  product: zProduct;
  current: number;
  setMagnify: (index: number) => void;
}) {
  const [threed, setThreeD] = useState(product?.threed_image ? true : false);

  useEffect(()=>{
    current == -2 && setThreeD(product?.threed_image ? true : false)
  
  }, [current])

  return (
    <div
      onClick={(e) => {
        setMagnify(-1);
      }}
      className={cn(
        "fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center backdrop-brightness-75 items-center backdrop-blur-md  z-50",
        current == -1 && "hidden"
      )}
    >
      <div className="sm:w-3/4  w-[98%] flex h-full p-5 sm:flex-row flex-col  items-center  rounded-lg    bg-[#] m-auto">
        <div className="w-full">
          <div className="w-full h-fit  bg-white  aspect-square shadow-md rounded-xl relative">
            {threed ? (
              <iframe
                src={product?.threed_image}
                className="w-full h-full rounded-xl"
              ></iframe>
            ) : (
              <Image
                src={product?.images[current]?.large || ""}
                alt="main_image"
                fill
                className=" object-contain sm:object-contain  border rounded-xl "
              />
            )}
          </div>
          {!threed ? (
            <div className="w-dull gap-5 min-h-10 mt-2 grid grid-cols-2">
              <div className="bg-white rounded-l-md">
                <button
                  onClick={(e) => {
                    setMagnify(threed && current ? -2 : current - 1);
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  className="w-full bg-[#] flex justify-center items-center p-2 rounded-lg"
                >
                  {current ? <ArrowLeft /> : "Zatvori"}
                </button>
              </div>

              {product?.images?.length ? (
                <div className="bg-white rounded-r-md">
                  <button
                    onClick={(e) => {
                      if (current == product?.images?.length - 1) {
                        setMagnify(-1);
                      } else {
                        setMagnify(current + 1);
                      }
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                    className="w-full bg-[#] flex justify-center items-center  p-2 rounded-lg"
                  >
                    {!(current == product?.images?.length - 1) ? (
                      <>
                        <ArrowRight />
                      </>
                    ) : product?.images?.length > 1 ? (
                      "Zatvori"
                    ) : null}
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
         
        </div>
        <div className="grid   grid-cols-3 w-full justify-normal h-fit gap-3 p-3 cursor-pointer">
          {product?.threed_image ? <div
            onClick={(e) => {
              setThreeD(true);
              e.stopPropagation();
            }}
            className="relative overflow-hidden flex justify-center items-center flex-col shadow-md rounded-xl bg-white w-full aspect-square"
          >
            <Rotate3D className="w-[40%]  mx-auto h-[30%]" />
            3D prikaz
          </div>:null}
          {product?.images?.map((img, index) => {
            return (
              <div
                key={index}
                className="relative overflow-hidden shadow-md rounded-xl bg-white w-full aspect-square"
              >
                <Image
                  src={img?.small || ""}
                  alt="main_image"
                  fill
                  className="object-contain border h-fit rounded-xl"
                  onClick={(e) => {
                    setMagnify(index);
                    e.stopPropagation();
                    setThreeD(false);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
