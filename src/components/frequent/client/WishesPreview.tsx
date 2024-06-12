import useCart from "@/app/store/useCart";


export default function WishesPreview () {
    
  const {wishes} = useCart();
  
    return(
      <div className="w-5 h-fit line-clamp-1 text-sm aspect-square rounded-full flex justify-center items-center bg-const_secondary absolute top-0 right-0 translate-x-1/2 sm:translate-x-0 text-white">
        {wishes}
      </div>
    )
  }