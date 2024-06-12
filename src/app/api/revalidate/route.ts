import {  NextApiResponse } from "next"
import { revalidatePath, revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

const SECRET = process.env.NEXT_SECRET_REVALIDATE_SECRET

export async function GET(
  req:NextRequest,
  res:NextApiResponse,
) {
 if(req.nextUrl.searchParams.get('secret') !== SECRET){
    return new Response("Unauthorized", { status: 401 })
 }

 const path = req.nextUrl.searchParams.get('path') as string
 const tag = req.nextUrl.searchParams.get('tag') as string
 path?.length && await revalidatePath(path)
 tag?.length && await revalidateTag(tag)

 return new NextResponse(JSON.stringify({revalidated: true}))
}