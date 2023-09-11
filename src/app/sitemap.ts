import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.mrcasey.com/",
      lastModified: new Date(),
    },
  ];
}
