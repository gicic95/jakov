"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function checkPromocode(values: any) {
  const cookie = cookies();
  try{
    const response = await fetch(API_URL + "/admin/promocode-availability", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie.get("token")?.value}`,
      },
      body: JSON.stringify(values),
      next: {
        revalidate: 0,
      },
    });
    const data = await response.json();
    return data?.data;
  }catch{
    return null;
  }
}
