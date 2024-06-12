import { Loader, X } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function SelectedFilters({searchParams}:{searchParams:[string, string][]}){
    const params = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState("");


    const createQueryString = (name: string, value: string) => {

       
        let cur = params.get(name);

        if (name === "Current_category") {
            if(cur?.includes(value)){
                return "";
            }
            return "Current_category=" + value;
          }
      
        const tmp = new URLSearchParams(params.toString());
        if (!cur?.includes(value)) {
          tmp.set(name, cur ? cur + "," + value : value);
        } else {
          let n = cur?.split(",").filter((val) => val !== value);
          if (n.length) {
            tmp.set(
              name,
              cur
                ?.split(",")
                .filter((val) => val !== value)
                .join(",")
            );
          } else {
            tmp.delete(name);
          }
        }
        tmp.set("page", "1");
        return tmp.toString();
        
      };

      useEffect(()=>{
        setLoading("");
      }, [params])
    return(
        <div className="flex justify-start items-center gap-3 flex-wrap">
            {searchParams.filter(([key, value]) => key.charAt(0) === key.charAt(0).toUpperCase()).map(par=>{
                return par[1].split(",").map((val)=>{
                    return(
                        <div key={val} onClick={()=>{router.push(`${pathname}?${createQueryString(par[0], val)}`, {scroll:false}); setLoading(val)}} className="flex shadow-sm cursor-pointer items-center justify-between px-3 py-2 bg-white rounded-full">
                            <span className="text-sm text-black ">{val.length < 3 ? `${par[0]} : `:null}{val?.replaceAll('.', ',')}</span>
                            <button  className="text-gray-800">
                                {!(loading === val) ? <X size={16} className="ml-2"/>:<Loader size={16} className="animate-spin ml-2"/>}
                            </button>
                        </div>
                    )
                })

            })}
        </div>
    )
}