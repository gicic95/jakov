import { cn } from "@/lib/utils"
import { zCategory } from "@/schemas/zFrequent"
import Link from "next/link"

export default function Breadcrumb({ list, categories }: { list?: { name: string, link: string }[], categories?: zCategory[] }) {
    return (
        <div className="text-nowrap overflow-x-scroll  no-scrollbar  " >
            <ul className="flex text-gray-500 text-xs sm:text-xs">
                {list?.map((item, index) => {
                    if (item.name) {
                        return (
                            <li key={index} className="flex items-center">
                                <Link href={item.link} className={cn("text-const_secondary", index === list.length - 1 ? "text-black font-medium" : "")}>{item.name}
                                </Link>
                                {index !== list.length - 1 && (
                                    <span className="mx-2">/</span>
                                )}
                            </li>
                        )
                    }
                })}
                {categories && <li className="flex items-center">
                    <Link href={"/"} className="" > Početna strana
                    </Link>
                    <span className="mx-2">/</span>

                </li>}
                {

                    categories?.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center">
                                <Link href={"/" + item?.slug} className={cn("", index === categories.length - 1 ? "text-black font-medium" : "")}>{item?.name}
                                </Link>
                                {index !== categories.length - 1 && (
                                    <span className="mx-2">/</span>
                                )}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}