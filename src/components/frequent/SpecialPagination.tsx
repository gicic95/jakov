"use client";
import { zMeta } from "@/schemas/zFrequent";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";
import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function SpecialPagination({ meta }: { meta: zMeta }) {
  const params = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const tmp = new URLSearchParams(params.toString());
      tmp.set(name, value);

      return tmp.toString();
    },
    [params]
  );

  
  function generatePagination(totalPage:number, eachSide:number, currPage:number) {
    let startPage, endPage;
    
    if (totalPage <= (2 * eachSide) + 5) {
        startPage = 1;
        endPage = totalPage;
    } else if (currPage <= eachSide + 3) {
        startPage = 1;
        endPage = (2 * eachSide) + 3;
    } else if (currPage >= totalPage - (eachSide + 2)) {
        startPage = totalPage - (2 * eachSide) - 2;
        endPage = totalPage;
    } else {
        startPage = currPage - eachSide;
        endPage = currPage + eachSide;
    }

    let returnMe = [];
    
    if (startPage > 1) {
        returnMe.push("1");
    }
    if (startPage > 2) {
        returnMe.push("...");
    }
    for (let x = startPage; x <= endPage; x++) {
        returnMe.push(x.toString());
    }
    if (endPage < totalPage - 1) {
        returnMe.push("...");
    }
    if (endPage < totalPage) {
        returnMe.push(totalPage.toString());
    }
    
    return returnMe;
}

  return (
    <div>
      {meta?.current_page && meta?.total ? (
        <Pagination className="mt-10">
          <PaginationContent className="flex">
              <PaginationLink
                href={
                  pathname +
                  "?" +
                  createQueryString("page", (meta.current_page - 1).toString())
                }
              >
                {"<"}
              </PaginationLink>
              {
                generatePagination(meta?.last_page, 1, meta?.current_page).map(
                  (page, index) => {
                    if (page === "...") {
                      return <PaginationLink key={index}>...</PaginationLink>;
                    }
                    return (
                      <PaginationLink
                        key={index}
                        className={Number(page) === meta.current_page ? "text-white bg-black" : ""}
                        href={
                          pathname +
                          "?" +
                          createQueryString("page", page.toString())
                        }
                      >
                        {page}
                      </PaginationLink>
                    );
                  }
                ) as any
              }
            
            {meta?.current_page && meta.current_page < meta.last_page ? (
              <PaginationLink
                href={
                  pathname +
                  "?" +
                  createQueryString("page", (meta.current_page + 1).toString())
                }
              >
                {">"}
              </PaginationLink>
            ) : null}
          </PaginationContent>
        </Pagination>
      ) : null}
    </div>
  );
}
