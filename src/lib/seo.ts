import type { Metadata } from "next";
import { site } from "./site";

const image = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Hashtrik: we turn rough ideas into working software",
};

// Builds the search and social-sharing tags for one page.
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${site.name}`;
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [image],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}
