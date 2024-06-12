import useCart from "@/app/store/useCart";


export default function CountPreview () {
    
  const {count} = useCart();
    return(
      <div className="w-5 h-fit line-clamp-1 text-sm aspect-square rounded-full flex justify-center items-center bg-const_secondary absolute top-0 right-0 text-white">
        {count}
      </div>
    )
  }