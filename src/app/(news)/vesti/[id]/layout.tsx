import { fetchSEO_Action, fetchSEO_News } from '@/app/actions/fequentActions';
import { Metadata } from 'next'
 
const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  try {
    const data = await fetchSEO_News(params.id).then((data) => {
      return {
        title: data.seo_title,
        robots: data.seo_meta_robots,
        openGraph: {
          title: data.seo_title,
          description: data.seo_description,
          url: PUBLIC_URL + "/" + params?.id,
          type: "website",
          keywords: data.seo_keywords,
          images: [
            {
              url: data.image,
              width: 800,
              height: 600,
              alt: data.seo_title,
            },
          ],
        },
      };
    });

    return data;
  } catch {
    return {};
  }
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children }