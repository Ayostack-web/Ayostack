import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ayostack - Ayokunle Shittu | Full-Stack Software Engineer",
    short_name: "Ayostack",
    description:
      "Full-stack software engineer building scalable Next.js apps, FastAPI & Celery backends, and PostgreSQL data layers.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#071026",
    theme_color: "#071026",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
