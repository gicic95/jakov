import { zProduct } from "@/schemas/zFrequent";

export default function Specification({ product }: { product: zProduct }) {
  return (
    <div className=" w-full sm:flex  ">
      <div className="sm:w-2/3">
        <br />
        <p className="font-semibold">Specifikacije proizvoda</p>
        <br />
        <div className="flex flex-col">
          {product?.attributes?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex sm:text-sm sm:py-3 text-xs text-right border-b justify-between"
              >
                <p className="pr-5">{item?.attribute?.name}</p>
                <p>{item?.value?.value}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-1/3 h-full hidden sm:grid  p-5 pt-10 uppercase gap-3 grid-cols-2 ">
        {product?.attributes?.slice(0, 4).map((item, index) => {
          return (
            <div
              key={index}
              className="flex text-xs aspect-video  shadow-md py-5 cursor-context-menu justify-center items-center  flex-col bg-neutral-50"
            >
              <p className="">{item?.attribute?.name}</p>
              <p className="text-xl w-full px-4 text-const_secondary truncate hover:overflow-visible hover:text-wrap text-center hover:h-fit">{item?.value?.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
