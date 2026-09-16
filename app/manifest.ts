import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EDOCLA - Impresa Edile Roma",
    short_name: "EDOCLA",
    description:
      "Impresa edile a Roma specializzata in costruzioni, ristrutturazioni complete, impianti e coperture.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F5F2",
    theme_color: "#E25822",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
