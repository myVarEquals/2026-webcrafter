// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({

    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Permanent Marker',
        cssVariable: "--permanent-marker",
      },
      {
        provider: fontProviders.fontsource(),
        name: 'Varela Round',
        cssVariable: "--varela-round",
      },
      {
        provider: fontProviders.fontsource(),
        name: 'Noto Sans',
        cssVariable: "--noto-sans",
      }
    ],

    integrations: [preact()],

    site: "https://2026-webcrafter.netlify.app",

    vite: {
      plugins: [tailwindcss()]
    },

  
});