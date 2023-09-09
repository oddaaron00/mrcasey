import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mrcasey.com",
      lastModified: new Date(),
    },
  ];
}
