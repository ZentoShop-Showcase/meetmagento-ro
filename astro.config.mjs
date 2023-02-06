import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import image from "@astrojs/image";

// import astroI18next from "astro-i18next";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://ro.meet-magento.com',
  integrations: [
    tailwind(), 
    mdx(), 
    image({ serviceEntryPoint: '@astrojs/image/sharp'}),
    // astroI18next(),
    sitemap(),
  ]
});