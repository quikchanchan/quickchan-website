import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.hywsource.com",
  integrations: [
    sitemap()
  ],
});

