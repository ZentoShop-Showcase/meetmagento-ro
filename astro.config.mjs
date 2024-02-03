import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://ro.meet-magento.com',
  integrations: [
    tailwind(), 
    // image({ serviceEntryPoint: '@astrojs/image/sharp'}),
    // astroI18next(),
    sitemap(),
  ]
});