import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.url;
  const now = new Date();

  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/servicios", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/sobre-nosotros", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/contacto", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/aviso-legal", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/privacidad", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/cookies", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
