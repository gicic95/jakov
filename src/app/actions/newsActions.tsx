"use server"

import { zMeta, zNews } from "@/schemas/zFrequent";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchNews() {
    const res = await fetch(`${API_URL}/news`, {
      next: { tags: ["all", "news"] },
    });

    const data = await res.json();

    return {
      data: data?.data as zNews[],
      meta: data?.meta as zMeta
    };
  }
  
  export async function getNews(id:string) {
    const res = await fetch(`${API_URL}/news/${id}`, {
      next: { tags: ["all", "news"] },
    });
  
    const data = await res.json();
    ////console.log(data);
    return data?.data as zNews;
  }